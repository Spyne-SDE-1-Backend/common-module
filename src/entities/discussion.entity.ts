import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class DiscussionEntity extends BaseEntity {
  @Column({ type: "varchar", length: 255, nullable: false })
  textField!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  image!: string;

  @Column({ type: "varchar", length: 255 })
  hashTags!: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt!: Date;
}
