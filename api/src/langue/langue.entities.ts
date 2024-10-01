import "reflect-metadata";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsString } from "class-validator";

@Entity()
export class Langue extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @IsString()
  label: string;
}
