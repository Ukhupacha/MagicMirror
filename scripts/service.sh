#!/bin/bash
npm install -g pm2
pm2 startup
echo "cd ~/Magicmirror
npm run server" >> mm.sh
chmod +x mm.sh
pm2 start mm.sh
pm2 save
