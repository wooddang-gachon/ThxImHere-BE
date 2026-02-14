import { Router } from "express";
import { Container } from "typedi";
import config from "#config/index.js";

const route = Router();
export default (app) => {
  const logger = Container.get("logger")("Route");
  logger.silly("openWeather called");

  app.use("/auth", route);

  route.post("/signIn", async (req, res) => {
    try {
      logger.info("signIn called");
      const AuthService = Container.get("AuthService");
      await AuthService.signIn();
      res.status(200).json(signInService);
    } catch (e) {
      logger.error(e);
    }
  });
};
