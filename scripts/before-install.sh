#!/bin/bash

# 기존 애플리케이션 디렉터리 삭제
echo "Cleaning up existing application files..."
rm -rf /home/ubuntu/waffle_rookie_review/*

# 필요한 디렉터리가 없을 경우 다시 생성
mkdir -p /home/ubuntu/waffle_rookie_review
