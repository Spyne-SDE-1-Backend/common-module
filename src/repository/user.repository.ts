import AppDataSource from "../config/db.config";
import { UserEntity } from "../entities";

export const UserRepository = AppDataSource.getRepository(UserEntity).extend(
  {}
);
