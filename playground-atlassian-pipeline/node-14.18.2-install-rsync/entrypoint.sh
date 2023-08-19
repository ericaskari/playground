#!/bin/bash
set -e

#node --version
#npm --version
#
#source "$NVM_DIR"/nvm.sh
#nvm install lts/gallium
#
#node --version
#npm --version

apt update -y
apt install rsync -y

rsync
printenv
