import { Container } from "typedi";
import db from "./mysql.js";
import loggerCreator from "./logger.js";

import AuthService from "#services/auth.js";

export default () => {
  const logger = loggerCreator("DI");
  try {
    Container.set("logger", (label) => loggerCreator(label));
    Container.set("db", db);

    //service container
    Container.set("AuthService", AuthService);
  } catch (e) {
    logger.error("🔥 Error on dependency injector loader: %o", e);
    throw e;
  }
};
