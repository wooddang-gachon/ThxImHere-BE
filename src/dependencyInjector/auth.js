// 1. 사용할 클래스(설계도)들만 가져옵니다.
import UserRepository from "../repositories/UserRepository.js";
import AuthService from "../services/AuthService.js";

/**
 * @param {Object} dependencies - 외부에서 넣어줄 공통 부품들
 * @param {Object} dependencies.db - DB 연결 객체
 * @param {Object} dependencies.logger - 로거 객체
 */
export default ({ db, logger }) => {
  // [Step 1] 가장 바닥에 있는 Repository 생성 (DB 주입)
  const userRepo = new UserRepository(db);

  // [Step 2] 그 위에 Service 생성 (완성된 Repo와 Logger 주입)
  // 이제 AuthService 내부에서 Repo를 마음껏 쓸 수 있게 됩니다.
  const authService = new AuthService(userRepo, logger);

  // [Step 3] 최종 완성품(Service)을 반환
  return authService;
};
