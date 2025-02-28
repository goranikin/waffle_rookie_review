#!/bin/bash

set -e  # 에러 발생 시 스크립트 중단

echo "Cleaning up existing application files..."

if rm -rf /home/ubuntu/waffle_rookie_review/*; then
  echo "Old files removed successfully."
else
  echo "Failed to remove old files." >&2
  exit 1
fi

if mkdir -p /home/ubuntu/waffle_rookie_review; then
  echo "Directory created successfully."
else
  echo "Failed to create directory." >&2
  exit 1
fi
