#!/bin/sh
set -e

mkdir -p /usr/local/lib/nodejs
tar -xJf ./node-v16.13.2-linux-x64.tar.xz -C /usr/local/lib/nodejs
node --version
npm --version
