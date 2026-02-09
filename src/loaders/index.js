import expressLoader from "./express.js";
import loggerCreator from "./logger.js";

export default async ({ expressApp }) => {
  const Logger = loggerCreator("Loader");
  Logger.info("Enter");

  await expressLoader({ app: expressApp });
};
