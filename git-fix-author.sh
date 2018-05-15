#!/bin/bash
#
# Change  all occurences of one author in git commits to another.

## git filter-branch to remove authorname

cat <<EOF
What is the name of the author you would like to filter?
(e.g. if git log shows "Author:   Anon <anon@localhost>", then the
author's name would be given as "Anon")
EOF

read -p"What is the name of the author you would like to filter?" orig_author
read -p"What name would you like to replace it with?" new_author
read -p"What is the new author's email address?" new_email
echo "Should we filter the current branch now, changing all occurences of"
read -p"$orig_author to $new_author <$new_email> ? (y/N)" choice

case $choice in
    y|Y)
        git filter-branch --commit-filter 'if [ "$GIT_AUTHOR_NAME" = "$orig_author" ]; then export GIT_AUTHOR_NAME="$new_author" ; export GIT_AUTHOR_EMAIL="$new_email" ; fi; git commit-tree "$@"'
        ;;
    *)
        echo "Exiting..." && exit 0
        ;;
esac
