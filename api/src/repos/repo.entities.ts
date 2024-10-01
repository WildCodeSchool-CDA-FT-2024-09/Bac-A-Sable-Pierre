import "reflect-metadata";
import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Repo extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  url: string;

  @Column()
  isPrivate: number;
}
