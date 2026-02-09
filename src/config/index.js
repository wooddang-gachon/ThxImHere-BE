import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  /**
   * Your favorite port
   */
  port: process.env.PORT,

  databaseHOST: process.env.mysql2_HOST,
  databaseUSER: process.env.mysql2_USER,
  databasePASSWORD: process.env.mysql2_PASSWORD,
  databaseNAME: process.env.mysql2_DATABASE,

  /**
   * API configs
   */
  api: {
    prefix: process.env.API_PREFIX || "/api",
  },
  logger: {
    NODE_ENV: process.env.NODE_ENV,
    LEVELS: process.env.LOG_LEVEL,
  },
};
