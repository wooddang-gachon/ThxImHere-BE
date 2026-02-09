import express from "express";
import config from "#config/index.js";
import loaders from "#loaders/index.js";

console.log("hello world");

async function startServer() {
  const app = express();
  await loaders({ expressApp: app });

  app
    .listen(config.port, () => {})
    .on("error", (err) => {
      process.exit(1);
    });
}
startServer();
