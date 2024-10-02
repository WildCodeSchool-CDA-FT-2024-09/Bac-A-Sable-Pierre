import { DataSource } from "typeorm";
import { Repo } from "../repos/repo.entities";
import { Langue } from "../langue/langue.entities";
import { Status } from "../status/status.entities";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./src/db/db.sqlite",
  entities: [Repo, Langue, Status],
  synchronize: true,
});
