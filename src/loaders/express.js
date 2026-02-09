import express from "express";
import cors from "cors";
import LoggerInstance from "#loaders/logger.js";
import config from "#config/index.js";
import routes from "#api/index.js";

export default ({ app }) => {
  const Logger = LoggerInstance("express");
  Logger.info("Enter");
  app.use(cors());
  app.use(express.json());

  app.use(config.api.prefix, routes());
};
