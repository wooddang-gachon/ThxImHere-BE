// src/dependencyInjector/auth.js
import UserRepository from "../repositories/UserRepository.js"; // 파일명 일치 확인
import AuthService from "../services/auth.js";

export default ({ db, logger }) => {
  // 1. 하위 부품(Repo) 조립
  const userRepo = new UserRepository(db);

  // 2. 상위 부품(Service) 조립 및 하위 부품 주입
  const authService = new AuthService(userRepo, logger);
  return authService;
};
