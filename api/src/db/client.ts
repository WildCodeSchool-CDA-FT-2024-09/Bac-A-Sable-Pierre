import { DataSource } from "typeorm";
import { Repo } from "../repos/repo.entities";
import { Langue } from "../repos/langue.entities";
import { Status } from "../repos/status.entities";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./src/db/db.sqlite",
  entities: [Repo, Langue, Status],
  synchronize: true,
});
