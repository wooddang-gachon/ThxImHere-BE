import { Router } from "express";
import loggerCreator from "#loaders/logger.js";

import authRouter from "#api/routes/auth.js";
import openWeatherRouter from "#api/routes/openWeather.js";

export default () => {
  const Logger = loggerCreator("Api");
  Logger.verbose("Entered");

  const app = Router();
  authRouter(app);
  openWeatherRouter(app);
  Logger.verbose("Done");
  return app;
};
