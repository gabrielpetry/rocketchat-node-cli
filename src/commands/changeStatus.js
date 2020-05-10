const { api } = require("../services/rocketchatApi.js");
const config = require("../config.json");

exports.getStatus = async (username) => {
  return api.get(`/users.getStatus?username=${username}`, {});
};

exports.changeStatus = async (status, message) => {
  const oldStatus = await exports.getStatus(config.username);
  if (!status) {
    status = oldStatus.status;
  }

  if (!message) {
    message = oldStatus.message;
  }

  return api.post("/users.setStatus", {
    message,
    status,
  });
};

// exports.getStatus("gabriel.petry");
