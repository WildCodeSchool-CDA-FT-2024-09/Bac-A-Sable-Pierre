import "reflect-metadata";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";

import { IsString } from "class-validator";
import { Status } from "../status/status.entities";
import { Langue } from "../langue/langue.entities";

@Entity()
export class Repo extends BaseEntity {
  @PrimaryColumn()
  @IsString()
  id: string;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  url: string;

  @ManyToOne(() => Status, (status) => status.id)
  @JoinColumn()
  status: Status;

  @ManyToMany(() => Langue, (lang) => lang.repos)
  langs?: Langue[];
}
