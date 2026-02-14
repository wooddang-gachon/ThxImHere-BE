import { Router } from "express";
import { Container } from "typedi";

const route = Router();

export default (app) => {
  const logger = Container.get("logger")("Route");
  logger.silly("openWeather called");

  app.use("/openweather", route);

  // isAuthenticated checks if user is authenticated
  route.get("/getWeather", async (req, res) => {
    try {
      const OpenWeatherService = Container.get("OpenWeatherService");
      const weatherData = await OpenWeatherService.getWeather(
        37.4524,
        127.1331,
      );
      res.status(200).json(weatherData);
    } catch (e) {
      logger.error("날씨 API 라우트 에러:", e);
      return res.status(500).json({
        success: false,
        message: "날씨 정보를 불러오는 중 서버 에러가 발생했습니다.",
        error: e.message,
      });
    }
  });
};
