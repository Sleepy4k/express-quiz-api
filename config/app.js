require("dotenv").config();

module.exports = {
  name: process.env.APP_NAME || "Quiz API",
  env: process.env.APP_ENV || "development",
  port: process.env.APP_PORT || 3000,
  url: process.env.APP_URL || "http://localhost:3000",
};
