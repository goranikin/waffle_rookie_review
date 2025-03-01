REPOSITORY=/home/ubuntu/waffle_rookie_review

if [ -f "/home/ubuntu/env-backup/.env.local" ]; then
  echo "> Restoring .env.local file..."
  cp /home/ubuntu/env-backup/.env.local /home/ubuntu/waffle_rookie_review/.env.local || {
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

bun deploy