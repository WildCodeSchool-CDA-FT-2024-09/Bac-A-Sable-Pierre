import express, { Response, Request } from "express";

import { Repo } from "../repos/repo.entities";
import { Status } from "../status/status.entities";

const repoControllers = express.Router();

repoControllers.get("/", async (_: any, res: Response) => {
  try {
    const repos = await Repo.find();
    res.status(200).json(repos);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

repoControllers.post("/", async (req: Request, res: Response) => {
  try {
    const repo = new Repo();
    repo.id = req.body.id;
    repo.name = req.body.name;
    repo.url = req.body.url;

    const status = await Status.findOneOrFail({
      where: { id: req.body.status },
    });
    repo.status = status;

    await repo.save();
    res.status(201).json(repo);
  } catch (error) {
    res.sendStatus(500);
  }
});

export default repoControllers;
