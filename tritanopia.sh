#!/bin/bash
#
# Mount/umount LUKS partition

# If the partition UUID changes you can retrieve new one by doing:
# $ sudo cryptsetup luksDump /dev/sdb1

TRITANOPIA_PARTUUID = "3d4c7174-73cb-41c4-bdaa-1e937a4267fc"
TRITANOPIA_PARTITION = `blkid -U "$TRITANOPIA_PARTUUID"`
TRITANOPIA_MAPTO = 'tritanopia'
TRITANOPIA_MAPPER = "/dev/mapper/$TRITANOPIA_MAPTO"
TRITANOPIA_MOUNT = "/media/$TRITANOPIA_MAPTO"

function tritMount() {
    mapped=
    mounted=
    printf "Opening LUKS container for tritanopia:\n"

    printf "  Searching for tritanopia's partition... "
    if test -n "$TRITANOPIA_PARTITION" ; then
        printf "%s\n" "$TRITANOPIA_PARTITION"

        isMapped=`sudo cryptsetup status "${TRITANOPIA_MAPTO}" | grep "${TRITANOPIA_PARTITION}"`
        printf "  Checking that %s is not already mapped... " \
               "${TRITANOPIA_MAPTO}"
        if test -z "$isMapped" ; then
            printf "ok\n"

            printf "  Checking that %s is not mounted... " \
                   "$TRITANOPIA_PARTITION"
            if test -z "$(mount | grep $TRITANOPIA_PARTITION)" ; then
                printf "ok\n"

                printf "  Mapping tritanopia LUKS container %s to '%s'... \n" \
                       "$TRITANOPIA_PARTITION" "$TRITANOPIA_MAPTO"
                sudo cryptsetup luksOpen \
                     "$TRITANOPIA_PARTITION" "$TRITANOPIA_MAPTO"
                if test "$?" -eq "0" ; then

                    printf "  Checking for %s... " "$TRITANOPIA_MAPPER"
                    if test -L "$TRITANOPIA_MAPPER" ; then
                        printf "ok\n"
                        mapped=true
                    else
                        printf "FAIL\n" # couldn't find mapper
                        printf "ERROR: cryptsetup says %s is mapped, but cannot find %s" \
                               "$TRITANOPIA_MAPTO" "$TRITANOPIA_MAPPER"
                    fi
                else
                    printf "FAIL\n" # luksOpen failed
                fi
            else
                printf "FAIL\n" # already mounted
                mounted=true
            fi
        else
            printf "FAIL\n"   # already mapped

            printf "  Checking for %s... " "$TRITANOPIA_MAPPER"
            if test -L "$TRITANOPIA_MAPPER" ; then
                printf "ok\n"
                mapped=true
            else
                printf "FAIL\n" # couldn't find mapper
                printf "ERROR: cryptsetup says %s is mapped, but cannot find %s" \
                       "$TRITANOPIA_MAPTO" "$TRITANOPIA_MAPPER"
            fi
        fi

        if test -z "$mounted" -a -n "$mapped" ; then
            printf "  Checking that %s is not already mounted... " \
                   "$TRITANOPIA_MAPPER"
            if test -z "$(mount | grep $TRITANOPIA_MAPPER)" ; then
                printf "ok\n"

                printf "  Mounting %s on %s... " \
                       "$TRITANOPIA_MAPPER" "$TRITANOPIA_MOUNT"
                mount "$TRITANOPIA_MOUNT"
                if test "$?" -eq "0" ; then
                    printf "ok\n"
                else
                    printf "FAIL\n" # mounting failed
                fi

            else
                printf "FAIL\n" # Already mounted
            fi
        fi

        printf "  Checking that %s is mounted... " \
               "$TRITANOPIA_PARTITION"
        if test -n "$(mount | grep $TRITANOPIA_MAPPER)" ; then
            printf "ok\n"
            mounted=true
        else
            printf "FAIL\n" # mounting didn't work
        fi

    else
        printf "FAIL\n"       # partition not found
        printf "ERROR: Are you sure the drive for %s is connected?\n" \
               "$TRITANOPIA_MAPTO"
    fi
}

function tritUnmount() {
    mounted=true
    mapped=true
    printf "Closing LUKS container for tritanopia:\n"

    printf "  Searching for tritanopia's partition... "
    if test -n "$TRITANOPIA_PARTITION" ; then
        printf "%s\n" "$TRITANOPIA_PARTITION"

        printf "  Checking if %s is mounted... " "$TRITANOPIA_MAPPER"
        if test -n "$(mount | grep $TRITANOPIA_MAPPER)" ; then
            printf "ok\n"

            printf "  Unmounting %s... " "$TRITANOPIA_MOUNT"
            umount "$TRITANOPIA_MOUNT"
            if test "$?" -eq "0" ; then
                printf "ok\n"
                mounted=
            else
                printf "FAIL\n" # unmounting failed
            fi
        else
            printf "FAIL\n" # not mounted
        fi

        if test "$mapped" -a -z "$mounted" ; then
            isMapped=`sudo cryptsetup status "${TRITANOPIA_MAPTO}" | grep "${TRITANOPIA_PARTITION}"`
            printf "  Checking if %s is mapped... " "${TRITANOPIA_MAPTO}"
            if test -n "$isMapped" ; then
                printf "ok\n"

                printf "  Checking for %s... " "$TRITANOPIA_MAPPER"
                if test -L "$TRITANOPIA_MAPPER" ; then
                    printf "ok\n"

                    printf "  Unmapping tritanopia LUKS container %s... " \
                           "$TRITANOPIA_MAPTO"
                    sudo cryptsetup luksClose "$TRITANOPIA_MAPTO"
                    if test "$?" -eq "0" ; then
                        printf "ok\n"
                    else
                        printf "FAIL\n" # luksClose failed
                    fi
                else
                    printf "FAIL\n" # couldn't find mapper
                    printf "ERROR: cryptsetup says %s is mapped, but cannot find %s" \
                           "$TRITANOPIA_MAPTO" "$TRITANOPIA_MAPPER"
                fi
            else
                printf "FAIL\n"   # not mapped
            fi
        fi
    else
        printf "FAIL\n"       # partition not found
        printf "ERROR: Are you sure the drive for %s is connected?\n" \
               "$TRITANOPIA_MAPTO"
    fi
}

function usage() {
    prog="${0##*/}"
    printf "Usage: %s [-m|-u]\n" "$prog"
    printf "\n"
    printf "Options:\n"
    printf "  -m\tMount tritanopia\n"
    printf "  -u\tUnmount tritanopia\n"
    printf "\n"
    printf "The default, if called without any arguments, is '%s -m'.\n\n" \
           "$prog"
}

if [[ "$#" == "0" ]] ; then
    tritMount
else
    while getopts umh x; do
        case $x in
            u)  tritUnmount;;
            m)  tritMount;;
            h)  usage;;
        esac
    done
fi
