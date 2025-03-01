#!/bin/bash

echo "> After install script started"

# Restore .env.local file from backup directory
if [ -f "/home/ubuntu/env-backup/.env.local" ]; then
  echo "> Restoring .env.local file..."
  cp /home/ubuntu/env-backup/.env.local /home/ubuntu/waffle_rookie_review/.env.local || {
    echo "Error: Failed to restore .env.local file."
    exit 1
  }
else
  echo "Warning: No backup .env.local file found. Skipping restoration."
fi

# Restart PM2 process
if command -v pm2 &>/dev/null; then
  echo "> Restarting PM2 process..."
  pm2 restart next-app --update-env || {
    echo "Error: Failed to restart PM2 process."
    exit 1
  }
else
  echo "Error: 'pm2' is not installed. Please install PM2 first."
  exit 1
fi

echo "> After install script completed successfully"
