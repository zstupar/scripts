#!/bin/Bash
#
# Get a cert fingerprint after pulling the cert down.

function usage () {
    this="${0##*/}"
    printf "Usage: %s [-h] [-t digest] <host:port>\n\n" $this
    cat <<EOF
Options:
 -h               Help
 -t digest        Hash digest for computing the fingerprint
 -l               List supported digest types
EOF
}

function listdigests () {
    openssl list-message-digest-algorithms >/dev/null
    if test "$?" -eq "0"; then
        openssl list-message-digest-algorithms
    else
        printf "Your OpenSSL version is very old. You should update it.\n\n"
        openssl list-message-digest-commands
    fi
}

if test "$#" -ge "1"; then
    while getopts hlt: x; do
        case $x in
            h ) usage && exit 0 ;;
            l ) listdigests && exit 0 ;;
            t ) fprtype='-'$OPTARG ;;
            * ) usage && exit 2 ;;
        esac
    done
    shift $((OPTIND - 1))

    host=$1
    if test -n "$host"; then
        if test -n "${fprtype}"; then
            openssl s_client -connect $host </dev/null 2>/dev/null | \
                openssl x509 -in /dev/stdin -noout -fingerprint $fprtype
        else
            openssl s_client -connect $host </dev/null 2>/dev/null | \
                openssl x509 -in /dev/stdin -noout -fingerprint
        fi
    fi
    exit $?
else
    usage
    exit 1
fi
