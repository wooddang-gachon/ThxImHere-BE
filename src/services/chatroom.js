// src/services/auth.js
export default class ChatroomService {
  constructor(userRepo, logger) {
    this.userRepo = userRepo; // 주입받은 Repo 저장
    this.logger = logger; // 주입받은 Logger 저장
  }

  async signUp(userData) {
    this.logger.info("회원가입 시도: %o", userData.id);
    return await this.userRepo.save(userData);
  }
}
