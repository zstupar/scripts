#!/bin/bash
#
# Convert magnet link to a .torrent file and add it to then
# watch directory so that rtorrent can find it.

WATCH_DIRECTORY="$HOME/torrents/watch"

cd $WATCH_DIRECTORY || exit
[[ "$1" =~ xt=urn:btih:([^&/]+) ]] || exit
hashh=${BASH_REMATCH[1]}
if [[ "$1" =~ dn=([^&/]+) ]];then
  filename=${BASH_REMATCH[1]}
else
  filename=$hashh
fi
fn="meta-"$filename".torrent"
touch $fn
echo "d10:magnet-uri${#1}:${1}e" | cat > $fn
