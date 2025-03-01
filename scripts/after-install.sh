#!/bin/bash

echo "> After install script started"

# Check if bun is installed
if ! command -v bun &>/dev/null; then
  echo "Error: 'bun' is not installed. Installing bun..."
  curl -fsSL https://bun.sh/install | bash || {
    echo "Error: Failed to install 'bun'."
    exit 1
  }

  # Apply environment variables for bun (ensure it's available for this session)
  export BUN_INSTALL="$HOME/.bun"
  export PATH="$BUN_INSTALL/bin:$PATH"
fi

echo "> Bun version: $(bun --version)"

# Navigate to the project directory
cd /home/ubuntu/waffle_rookie_review || {
  echo "Error: Failed to navigate to project directory."
  exit 1
}

# Install dependencies using bun
echo "> Installing dependencies using bun..."
bun install || {
  echo "Error: Failed to install dependencies."
  exit 1
}

# Build the application using bun
echo "> Building the application..."
bun build || {
  echo "Error: Failed to build the application."
  exit 1
}

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
