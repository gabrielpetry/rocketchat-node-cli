#!/bin/sh
status="$1"
message="$2"

docker run --rm -ti \
  -v "$HOME/.config/rocketchat-node-cli.config.json:/app/src/config.json" \
  gabrielpetry/rocketchat-node-cli \
  --action=changeStatus \
  --status="$status" \
  --message="$message"