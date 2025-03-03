REPOSITORY=/home/ubuntu/waffle_rookie_review
BUN_PATH=/home/ubuntu/.bun/bin/bun

if [ -f "/home/ubuntu/env-backups/.env.local" ]; then
  echo "> Restoring .env.local file..."
  cp /home/ubuntu/env-backups/.env.local /home/ubuntu/waffle_rookie_review/.env.local || {
    echo "Error: Failed to restore .env.local file."
    exit 1
  }
else
  echo "Warning: No backup .env.local file found. Skipping restoration."
fi

cd $REPOSITORY || {
  echo "Error: Failed to navigate to project directory."
  exit 1
}

$BUN_PATH run deploy