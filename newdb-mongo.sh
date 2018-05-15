#!/bin/bash
#
# Creates new MongoDB database and database user.

read -p "Database name: " NEWDB
read -p "Database user: " NEWUSER
read -p "Database user password: " NEWPWD

mongo <<EOF
use $NEWDB
db.createUser( { user: $NEWUSER,
                 pwd: $NEWPWD,
                 roles: [ { role: "readWrite", db: $NEWDB } ]
             } )
exit
EOF
