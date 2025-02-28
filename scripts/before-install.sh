#!/bin/bash

set -e  # 에러 발생 시 스크립트 중단

echo "Cleaning up existing application files..."

# 모든 파일과 숨김 파일 삭제
find /home/ubuntu/waffle_rookie_review -mindepth 1 -delete

echo "Cleanup completed."
