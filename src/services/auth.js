// src/services/auth.js
import { Container } from "typedi";
export default class AuthService {
  constructor() {
    this.logger = Container.get("logger")("Auth");
  }
  async signIn() {
    await this.logger.silly("signIn called");
  }
}
