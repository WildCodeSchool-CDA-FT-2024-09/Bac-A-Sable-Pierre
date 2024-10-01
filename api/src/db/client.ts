import { DataSource } from "typeorm";
import { Repo } from "../repos/repo.entities";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./src/db/db.sqlite",
  entities: [Repo],
  synchronize: true,
});
