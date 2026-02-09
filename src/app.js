import express from "express";
import config from "#config/index.js";
import loaders from "#loaders/index.js";
import loggerCreator from "#loaders/logger.js";

const Logger = loggerCreator("app");

async function startServer() {
  const app = express();
  await loaders({ expressApp: app });

  app
    .listen(config.port, () => {})
    .on("error", (err) => {
      Logger.error(err);
      process.exit(1);
    });
}
startServer();
