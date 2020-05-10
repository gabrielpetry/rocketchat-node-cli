const axios = require("axios");
const config = require("../config.json");

exports.api = axios.create({
  baseURL: `${config.rocketchatUrl}/api/v1`,
  headers: {
    "X-Auth-Token": config.userToken,
    "X-User-Id": config.userId,
    "Content-type": "application/json",
  },
});
