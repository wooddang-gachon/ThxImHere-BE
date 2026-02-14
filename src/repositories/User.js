import loggerCreator from "#loaders/logger.js"
import db from "mysql2"
import User from "#models/entities/users.js"


export async function findUserById({user_num}) {
  const [result] = await db.query(
    "SELECT * FROM `USER` WHETER `USER` = ?",
    [user_num],
  );
    
  return new User();
}