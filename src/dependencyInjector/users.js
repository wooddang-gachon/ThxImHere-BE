// src/dependencyInjector/users.js
export default ({ db }) => {
  // 1. Repo 우선 진행 (DB 주입)
  const chatroomRepo = new ChatroomRepository(db);
  const userRepo = new UserRepository(db);

  // 2. 완성된 Repo들을 Service에 주입
  const chatroomService = new ChatroomService(chatroomRepo, userRepo);

  return chatroomService;
};
