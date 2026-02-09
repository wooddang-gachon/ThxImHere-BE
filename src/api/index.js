import { Router } from "express";
import LoggerInstance from "#loaders/logger.js";

export default () => {
  const Logger = LoggerInstance("Loader");
  Logger.info("Enter");

  const app = Router();

  return app;
};
