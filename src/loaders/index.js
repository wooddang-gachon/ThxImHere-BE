import expressLoader from "./express.js";
import LoggerInstance from "./logger.js";

export default async ({ expressApp }) => {
  const Logger = LoggerInstance("Loader");
  Logger.info("Enter");

  await expressLoader({ app: expressApp });
};
