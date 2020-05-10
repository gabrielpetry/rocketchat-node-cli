const { api } = require("../services/rocketchatApi.js");

exports.sendMessage = async (channel, message) => {
  return api.post("/chat.postMessage", {
    channel: channel,
    text: message,
  });
};
