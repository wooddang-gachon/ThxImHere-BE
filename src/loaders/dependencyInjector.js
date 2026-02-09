import db from "./mysql.js";
import authServiceInjector from "../dependencyInjector/auth.js";
import chatServiceInjector from "../dependencyInjector/chat.js";
import loggerCreator from "./logger.js";

export default () => {
  // 2. 각 도메인 공장을 돌려서 완성품(Service)을 받아옵니다.
  // 이때 이미 연결된 'db'와 'logger'를 인자로 던져줍니다.
  const authService = authServiceInjector({ db,logger:loggerCreator('Auth') });
  const chatService = chatServiceInjector({ db,logger:loggerCreator('Chat') });

  // 3. 완성된 서비스들을 하나의 객체로 묶어서 반환합니다.
  // 이제 이 객체만 있으면 어디서든 우리 서비스들을 꺼내 쓸 수 있습니다.
  return {
    authService,
    chatService,
  };
};
