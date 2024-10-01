import "reflect-metadata";
import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";
import { IsString } from "class-validator";

@Entity()
export class Langue extends BaseEntity {
  @PrimaryColumn()
  @IsString()
  id: string;

  @Column()
  @IsString()
  label: string;
}
