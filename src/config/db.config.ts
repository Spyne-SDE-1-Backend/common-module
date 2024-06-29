import { DataSource } from "typeorm";
import { DiscussionEntity, UserEntity } from "../entities";

const { DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE_NAME, DB_HOST } =
  process.env;

const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE_NAME,
  entities: [UserEntity, DiscussionEntity],
  synchronize: false,
});

export default AppDataSource;
