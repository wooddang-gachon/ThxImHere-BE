import axios from "axios";
import { Container } from "typedi";

import config from "#config/index.js";

const OPENWEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = config.api.openWeaterKey;

export default class OpenWeatherService {
  constructor() {
    this.logger = Container.get("logger")("Service");
  }

  async getWeather(lat, lon) {
    this.logger.silly("OpenWeather Service called");

    this.logger.silly(`Using API KEY: ${API_KEY}`);
    try {
      const response = await axios.get(OPENWEATHER_BASE_URL, {
        params: {
          lat: lat,
          lon: lon,
          appid: API_KEY,
        },
      });

      // API 응답 데이터 구조화 (필요한 것만 골라내기)
      const data = response.data;
      this.logger.silly(data);
      const weatherResult = {
        location: data.name, // 성남시
        temp: data.main.temp, // 현재 온도 (섭씨)
        feelsLike: data.main.feels_like, // 체감 온도
        humidity: data.main.humidity, // 습도 (%)
        description: data.weather[0].description, // 날씨 설명 (예: 실안개)
        windSpeed: data.wind.speed, // 풍속
        cloudiness: data.clouds.all, // 구름 양 (%)
      };

      this.logger.info("날씨 데이터 정제 완료:", weatherResult);
      return weatherResult;
    } catch (error) {
      this.logger.error("데이터 정제 중 에러 발생:", error.message);
      throw new Error("날씨 정보를 가져오는 데 실패했습니다.");
    }
  }
}
