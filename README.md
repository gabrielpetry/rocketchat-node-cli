# Rocketchat node cli

This is a simple rocketchat cli app written in node.js

## What's the purpose

I'm to lazy to change my status manually and send status messages to the groups.

This way I can programmatically change status and send messages from terminal.

## Usage?

There is a provided docker container update once in a while with github actions.

`docker run --rm -ti gabrielpetry/rocketchat-node-cli --action=sendMessage --channel='["@friend"]' --message="Stay at home!"`

If you are even lazyer ~martins~ there is also scripts in bin folder

Create a ~/.config/rocketchat-node-cli.config.json and use the example scripts

`bin/sendMessage "@friend" "Hello!"`

`bin/sendMessage "@friend,@fiend" "Hello, are u alieve?!"`

`bin/changeStatus "away" "Going out, but with a mask"`

## Should I use it?

Nope

## Why did you done this?

Read topic 2

## Topic 2

Why not?

## This is a joke repo?

Yes, but also works.
