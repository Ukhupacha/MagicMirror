#!/bin/sh
pkg install -y vim node npm
service sshd enable
echo "PermitRootLogin yes" >> /etc/ssh/sshd_config
service sshd start
npm install googleapis
