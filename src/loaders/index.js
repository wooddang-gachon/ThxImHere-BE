import dependencyInjector from "./dependencyInjector.js";
import expressLoader from "./express.js";
import loggerCreator from "./logger.js";
import sqlLoader from "./mysql.js";

export default async ({ expressApp }) => {
  const logger = loggerCreator("Loader");
  try {
    logger.info("Loader Entered");

    await expressLoader({ app: expressApp });
    logger.info("express Loaded");

    await sqlLoader;
    logger.info("sql Loaded");

    await dependencyInjector();
    logger.info("DI Loaded");

    logger.info("Loader done");
  } catch (e) {
    logger.error(`${e}`);
  }
};
