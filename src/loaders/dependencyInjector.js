import { Container } from "typedi";
import db from "./mysql.js";
import loggerCreator from "./logger.js";
import User from "#models/entities/users.js";

import AuthService from "#services/Auth.js";
import OpenWeatherService from "#services/openWeather.js";

export default () => {
  const logger = loggerCreator("DI");
  try {
    Container.set("logger", (label) => loggerCreator(label));
    Container.set("db", db);

    //service Container
    Container.set("AuthService", new AuthService());
    Container.set("OpenWeatherService", new OpenWeatherService());

    // models Container
    Container.set("User", User);
  } catch (e) {
    logger.error("🔥 Error on dependency injector loader: %o", e);
    throw e;
  }
};
