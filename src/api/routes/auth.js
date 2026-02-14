import { Router } from "express";
import { Container } from "typedi";
import config from "#config/index.js";
import Auth from "#services/auth.js";
import AuthService from "#services/auth.js";

export default (app) => {
  const route = Router();
  const logger = Container.get("logger")("Route");

  app.use("/auth", route);

  route.post("/signIn", async (req, res) => {
    try {
      logger.info("signIn called");
      const signInService = Container.get("AuthService");
      await signInService.signIn;
      res.status(200).json(signInService);
    } catch (e) {
      logger.error(e);
    }
  });
};
