import { Router } from "express";
import loggerCreator from "#loaders/logger.js";

export default () => {
  const Logger = loggerCreator("Loader");
  Logger.info("Enter");

  const app = Router();

  return app;
};
