import AppDataSource from "../config/db.config";
import { DiscussionEntity } from "../entities";

export const DiscussionRepository = AppDataSource.getRepository(
  DiscussionEntity
).extend({});
