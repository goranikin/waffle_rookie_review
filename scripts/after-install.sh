REPOSITORY=/home/ubuntu/waffle_rookie_review

cd $REPOSITORY || {
  echo "Error: Failed to navigate to project directory."
  exit 1
}

bun deploy