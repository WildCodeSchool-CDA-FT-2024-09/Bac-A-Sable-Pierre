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
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Repo extends BaseEntity {
  @Field(() => ID)
  @PrimaryColumn()
  @IsString()
  id: string;

  @Field()
  @Column()
  @IsString()
  name: string;

  @Field()
  @Column()
  @IsString()
  url: string;

  @Field(() => Status)
  @ManyToOne(() => Status, (status) => status.id)
  @JoinColumn()
  status: Status;

  @Field(() => [Langue])
  @ManyToMany(() => Langue, (lang) => lang.repos)
  langs?: Langue[];
}
