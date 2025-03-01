#!/bin/bash

echo "> After install script started"

# Navigate to the project directory
cd /home/ubuntu/waffle_rookie_review || exit

# Install dependencies (if necessary)
bun install

# Restart the PM2 process
pm2 restart next-app

echo "> After install script completed"
