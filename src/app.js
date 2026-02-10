import "reflect-metadata";
import { Container } from "typedi";
import express from "express";
import loggerCreator from "#loaders/logger.js";
import config from "#config/index.js";
import loaders from "#loaders/index.js";


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
