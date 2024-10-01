import "reflect-metadata";
import { BaseEntity, Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { Min, Max, IsString } from "class-validator";
import { Status } from "../repos/status.entities";

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

  @ManyToMany(() => Status, (status) => status.id)
  @Min(1)
  @Max(2)
  status: Status;
}
