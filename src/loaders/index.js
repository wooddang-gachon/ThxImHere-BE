import expressLoader from "./express.js";
import loggerCreator from "./logger.js";
import sqlLoader from "./mysql.js";

export default async ({ expressApp }) => {
  const Logger = loggerCreator("Loader");
  Logger.info("Loader Entered");

  await expressLoader({ app: expressApp });
  Logger.info("express Loaded");

  await sqlLoader;
  Logger.info("sql Loaded");


  
  Logger.info("Loader done");
};
