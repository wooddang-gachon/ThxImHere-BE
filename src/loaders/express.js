import express from "express";
import cors from "cors";
import loggerCreator from "#loaders/logger.js";
import config from "#config/index.js";
import routes from "#api/index.js";

export default ({ app }) => {
  const Logger = loggerCreator("express");
  Logger.info("Enter");
  app.use(cors());
  app.use(express.json());

  app.use(config.api.prefix, routes());
};