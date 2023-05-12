#!/bin/sh
pkg install -y vim node npm
service sshd enable
echo "PermitRootLogin yes" >> /etc/ssh/sshd_config
service sshd start
cd ~/Magicmirror
npm run install-mm
npm install googleapis@105 @google-cloud/local-auth@2.1.0 --save
cd ~/Magicmirror/modules/MMM-OpenWeatherForecast
npm install
cp ~/Magicmirror/modules/MMM-GoogleTasks
npm install
cp ~/Magicmirror/modules/credentials/* ~/Magicmirror/modules/MMM-GoogleTasks/
