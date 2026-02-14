// 외부 api를 통해 gps정보를 받아오는 방법

import { Container } from "typedi";

export default class EnvironmentScorer {
  constructor() {
    this.logger = Container.get("logger")("EnvironmentScorer");
    this.User = Container.get("User");
  }
  async getLocation() {
    this.logger.info("getLocation Called");
  }
}
