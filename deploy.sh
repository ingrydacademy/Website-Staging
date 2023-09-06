#!/bin/bash

git pull origin prod-release

docker-compose up -d --build 

exit
