REPOSITORY=/home/ubuntu/waffle_rookie_review
BUN_PATH=/home/ubuntu/.bun/bin/bun

cd $REPOSITORY || {
  echo "Error: Failed to navigate to project directory."
  exit 1
}

$BUN_PATH run deploy