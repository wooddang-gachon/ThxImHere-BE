import { Router } from "express";
import loggerCreator from "#loaders/logger.js";

import authRouter from "#api/routes/auth.js";

export default () => {
  const Logger = loggerCreator("Api");
  Logger.verbose("Entered");

  const app = Router();
  authRouter(app);

  return app;
};
