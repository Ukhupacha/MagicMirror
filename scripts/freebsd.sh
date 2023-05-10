#!/bin/bash
pkg install -y vim node npm
service sshd enable
echo "PermitRootLogin yes" >> /etc/ssh/ssh_config
service sshd start
