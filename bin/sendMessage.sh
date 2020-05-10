#!/bin/sh
destinations="$1"
message="$2"

docker run --rm -ti \
  --volume "$HOME/.config/rocketchat-node-cli.config.json:/app/src/config.json" \
  gabrielpetry/rocketchat-node-cli \
  --action=sendMessage \
  --channel="[\"$destinations\"]" \
  --message="$message"