// src/repositories/users.js
export default class Chatroom {
  constructor({ db, logger }) {
    this.db = db; // 이제 주입받은 db를 사용합니다.
    this.logger = logger;
  }
}
