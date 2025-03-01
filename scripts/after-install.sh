#!/bin/bash

echo "> After install script started"

# 프로젝트 디렉토리로 이동
cd /home/ubuntu/waffle_rookie_review || {
  echo "Error: Failed to navigate to project directory."
  exit 1
}

# 의존성 설치 (bun이 설치되어 있어야 함)
if command -v bun >/dev/null 2>&1; then
  echo "> Installing dependencies using bun..."
  bun install || {
    echo "Error: Failed to install dependencies."
    exit 1
  }
else
  echo "Error: 'bun' is not installed. Please install bun first."
  exit 1
fi

# PM2 프로세스 재시작
if command -v pm2 >/dev/null 2>&1; then
  echo "> Restarting PM2 process..."
  pm2 restart 0 || {
    echo "Error: Failed to restart PM2 process."
    exit 1
  }
else
  echo "Error: 'pm2' is not installed. Please install PM2 first."
  exit 1
fi

echo "> After install script completed successfully"