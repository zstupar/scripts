#!/usr/bin/env bash
##
## This script is meant to be used on a Debian-based system to build a kernel
## package from a git checkout of a kernel source tree branch. For example:
##
## $ git clone git://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git
## $ git checkout -b 3.8 v3.8

## must be root
if [ "$(id -u)" != "0" ] ; then
    printf "You gotta be root.\nExiting...\n"
    exit 1
fi

## Whether or not to display a lot of text about all the commands being run:
KBUILD_VERBOSE=1

## Add the '-V=1' flag to Makefiles:
MAKE_VERBOSE=1

## This should be the number of CPUs to use in the build-process
## (default: *all of the CPUs*):
CONCURRENCY_LEVEL=

## The GnuPG key to sign the .dsc and CHANGELOG files with:
SIGNING_KEY=0xa3adb67a2cdb8b35

## You should increment this by one for each build of the same kernel source:
REV=1

## This should be the kernel version you are building. If git-what-branch is
## installed, we'll calculate it from the name of the immediate ancestor
## branch.
KVER=

## Architecture to build for. Defaults to the output of
## `dpkg --print-archictecture`.
KPKG_ARCH=

## Whether to include the architecture compiled for in the package name:
ARCH_IN_NAME=1

## This should specify any optional extra tags to append to the end of the
## package name, specifying why it is special (i.e. 'rt' if the kernel
## RT_PREEMPT patches have been included):
##
## Note that this variable may only contain a-z ~ - + .
## and it will be appended to the end of the package name with a '+'.
APPEND_TO_VERSION=

## INTERNAL VARIABLES (you shouldn't need to touch these)
child=$(basename $0)                         ## this script, its pid, and
childpid=$(ps --no-headers -C $0)            ## dependencies
deps={ make fakeroot make-kpkg gcc dpkg-buildpackage }

function log() { test -n "$1" && logger -t "$child [$childpid]" -s "$1" }

function exists() { hash "$1" 2>/dev/null || log "Could not find $1" }

function havedeps() {
    for dep in $deps ; do
        exists $dep
        if [ "$?" != "0" ] ; then
            log "Unable to run without dependency $dep ..."
            log "Exiting ..." & exit 1
	    fi
    done
}

if test -z "$CONCURRENCY_LEVEL" ; then
    CONCURRENCY_LEVEL=$(grep -c '^processor' /proc/cpuinfo)
    if test -n "$CONCURRENCY_LEVEL" ; then
        log "Building with CONCURRENCY_LEVEL set to $CONCURRENCY_LEVEL CPUs."
    else
        log "ERROR: Unable to number of available cores from /proc/cpuinfo."
    fi
fi

if test -z "$KVER" ; then
    if which git-what-branch >/dev/null 2>&/dev/null ; then
        ## try to get the kernel version from the our ancestor branch:
        eldergod=$(git what-branch `git merge-base --octopus HEAD`)
        if test -n "$eldergod" ; then
            KVER=$eldergod
        else
            log "Couldn't figure out kernel version."
            log "Set the environment variable KVER and try again."
        fi
    fi
fi

if test -z "$KPKG_ARCH" ; then KPKG_ARCH=$(dpkg --print-architecture) ; fi

## And putting them all together, we get the kernel package name:
KREV="${KVER}-${REV}-${KPKG_ARCH}"
if test -n "${APPEND_TO_VERSION}" ; then
    APPEND_TO_VERSION="+${APPEND_TO_VERSION}"
    KREV="${KREV}${APPEND_TO_VERSION}"
fi

function usage () {
    cat <<EOF
Please see the required dependencies and documentation on environment variable
at the top of this script.
EOF
    exit 1
}

## Unused, these were for building from a source tarball from
## https://www.kernel.org/
#export KREV=-$REV-$ARCH+patched-ec
#export KVER=3.6.0-6
#export KSOURCETARBALL=$HOME/code/kernels/kernel-source-$KVER+toi.tar
#export NCPUS=4
#cd /usr/src

function main()
{
    havedeps
    while getopts "xm" option ; do
        case $option in
            x ) upthex=true && export upthex && shift ;;
            s ) skipconfig=true && export skipconfig && shift ;;
            ? ) usage ;;
            * ) usage ;;
        esac
    done

    if test -r "/boot/config-$(uname -r)" && ! test "$skipconfig" ; then
        log "Using our current kernel config as a base..."
        echo "/boot/config-`uname -r`"|xargs cat > .config
        log "Running make oldconfig ..."
        make oldconfig
    else
        log "Couldn't find current kernel configuration file..."
        icanhazx=$(ps --no-headers -C X)             ## if we're running X11
        if test -z "$icanhazx" && ! test "$upthex" ; then
            log "Running make xconfig ..."
            make xconfig
        else
            log "Running make menuconfig ..."
            make menuconfig
        fi
    fi

    log "Cleaning up working directory..."
    make-kpkg clean

    log "Building source..."

    ## Uncomment to use all flags in hardening-wrapper.
    ## see https://wiki.debian.org/HardeningWalkthrough
    export DEB_BUILD_MAINT_OPTIONS = hardening=+all

    export CONCURRENCY_LEVEL
    export APPEND_TO_VERSION
    export KBUILD_VERBOSE
    export KPKG_ARCH
    export ARCH_IN_NAME

    #make-kpkg --noexec --rootcommand --append-to-version -j3 \
    #    --initrd --revision=3.6.0-6 \
    #    --added_modules tp_smapi kernel_image kernel_headers

    #CONCURRENCY_LEVEL=$CONCURRENCY_LEVEL fakeroot make-kpkg --initrd \
    #    --revision=$REV --append-to-version=${APPEND_TO_VERSION}

    if test "$MAKE_VERBOSE" -eq "1" ; then
        make-kpkg --verbose --root-command fakeroot \
            --initrd --revision=$REV kernel_image kernel_headers
    else
        make-kpkg --root-command fakeroot \
            --initrd --revision=$REV kernel_image kernel_headers
    fi
}
# mkdir linux-headers-$KVER$KREV
# chgrp src linux-headers-$KVER$KREV
# chmod g+rxw linux-headers-$KVER$KREV
# usermod -aG src isis
# exit
# ## to reload group information
# su -u isis
# tar -zx --strip-components=1 -C linux-headers-$KVER$KREV -f $KSOURCETARBALL
# cd linux-headers-$KVER$KREV
# cp /boot/config-`uname -r` .config
# make oldconfig
# make menuconfig
# make-kpkg --rootcmd fakeroot --append-to-version +toi-3.2-1-amd64 --initrd -j $NCPUS kernel_image
# make-kpkg --rootcmd fakeroot --append-to-version $KREV --initrd -j $NCPUS kernel_headers
# sudo su
# dpkg -i linux-image-$KVER*.deb
# dpkg -i linux-headers$KVER*.deb
# ## Just in case
# update-initramfs -k $KVER$KREV -c
# update-grub
# ## When you have booted to the TOI enabled kernel
# ## you can read the swap file location by issuing
# ##   $ cat /sys/power/tuxonice/swap/headerlocations
# ## You will get the exact resume line that you will
# ## have to provide as kernel boot parameter (starting
# ## with resume=) e.g.
# ## For swapfile `/var/swap`,
# ## use resume=swap:/dev/sda5:0x503a400.


## start:

main
