
#!/bin/bash
set -e
APP_PATH=/home/ubuntu/weather-dashboard

ssh $DEPLOY_USER@$DEPLOY_HOST "mkdir -p $APP_PATH"
scp -r * $DEPLOY_USER@$DEPLOY_HOST:$APP_PATH/

ssh $DEPLOY_USER@$DEPLOY_HOST "cd $APP_PATH && docker compose up -d --build"
