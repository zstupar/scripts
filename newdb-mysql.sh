#!/bin/bash
#
# Creates new MySQL database and database user.

read -p "Database name: " NEWDB
read -p "Database user: " NEWUSER
read -p "Database user password: " NEWPWD

mysql -uroot -p rootpass <<EOF
CREATE DATABASE $NEWDB;
CREATE USER $NEWUSER@localhost IDENTIFIED BY '$NEWPWD';
GRANT ALL PRIVILEGES ON $NEWDB.* TO $NEWUSER@localhost IDENTIFIED BY '$NEWPWD';
FLUSH PRIVILEGES;
exit
EOF
