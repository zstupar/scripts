#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# Prints the number of days until some event.

import sys
from datetime import date


def days_until(when):
    year, month, day = when.split('-', 3)
    remaining = date(int(year), int(month), int(day)) - date.today()
    return remaining.days


if __name__ == "__main__":
    message = None

    if len(sys.argv) == 3:
        when = sys.argv[2]
        message = sys.argv[1]
    elif len(sys.argv) == 2:
        when = sys.argv[1]
    else:
        sys.stdout.write("Usage: %s [MESSAGE] YEAR-MONTH-DAY\n" %  __file__)

    remaining = days_until(when)
    sys.stdout.write("Days remaining until %s: %d\n" %
                     (message if message else "event", remaining))
