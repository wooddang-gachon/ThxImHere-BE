// src/dependencyInjector/users.js
import ChatroomRepository from "../repositories/ChatroomRepository.js";
import UserRepository from "../repositories/UserRepository.js";
import ChatroomService from "#services/chatroom.js";

export default ({ db, logger }) => {
  // 1. Repo 우선 진행 (DB 주입)
  const chatroomRepo = new ChatroomRepository(db);
  const userRepo = new UserRepository(db);

  // 2. 완성된 Repo들을 Service에 주입
  const chatroomService = new ChatroomService(chatroomRepo, userRepo);
  logger.info("DI done");
  return chatroomService;
};
