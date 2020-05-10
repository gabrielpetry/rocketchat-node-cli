#!/bin/node
const mimist = require("minimist");
const { sendMessage } = require("./commands/sendMessage");
const { changeStatus } = require("./commands/changeStatus");

const argv = mimist(process.argv.slice(2));

const showHelp = () => {
  console.log(
    `usage:
      [--action] (sendMessage|changeStatus)
      [--msg] (required for sendMessage and optional for changeStatus)
      [--status] (required for status)
      [--channel] (required for sendMessage in list format ["@username", "#group"])`
  );
};

const quitApp = ({ message, code }) => {
  if (message) console.log(message);
  process.exit(code);
};

if (argv.h || argv.help) {
  showHelp();
  quitApp({ code: 0 });
}

if (!argv.action) {
  showHelp();
  quitApp({ message: "Err: No action provided", code: 1 });
}

if (argv.action === "sendMessage") {
  if (!argv.message) quitApp("No message.");
  if (!argv.channel) quitApp("No channel");
  const jsonParse = JSON.parse(argv.channel);
  jsonParse.forEach((channel) => {
    sendMessage(channel, argv.message).then((res) => {
      console.log(res.data);
    });
  });
}

if (argv.action === "changeStatus") {
  changeStatus(argv.status, argv.message).then((res) => {
    console.log(res.data);
  });
}
