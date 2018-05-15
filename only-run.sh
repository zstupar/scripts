#!/bin/bash
#
# Only run $@ if it isn't running already.

if [ -z "`ps -Af | grep -o -w ".*$1" | grep -v grep | grep -v only`" ] ; then
    $@
fi
