import express, { Response, Request, NextFunction } from "express";
import Joi from "joi";

import repos from "../../repos.json";
import type { Repo } from "../repos/repo.type";

let myRepo: Array<Repo> = repos;

const repoControllers = express.Router();

const schema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  url: Joi.string().required(),
  isPrivate: Joi.string().valid("1", "2").required(),
});

const validateRepo = (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);

  if (error == null) {
    next();
  } else {
    res.status(422).json(error);
  }
};

repoControllers.get("/", (_: any, res: Response) => {
  res.status(200).json(myRepo);
});

repoControllers.get("/:id", (req: Request, res: Response) => {
  const repo = myRepo.find((rep) => rep.id === req.params.id) as Repo;

  if (repo) {
    res.status(200).json(repo);
  } else {
    res.sendStatus(404);
  }
});

repoControllers.post("/", validateRepo, (req: Request, res: Response) => {
  myRepo.push(req.body);
  res.status(201).json(req.body);
});

repoControllers.delete("/:id", (req: Request, res: Response) => {
  myRepo = myRepo.filter((repo: Repo) => repo.id !== req.params.id);
  res.sendStatus(204);
});

repoControllers.put("/:id", validateRepo, (req: Request, res: Response) => {
  const index = myRepo.findIndex((repo) => repo.id === req.params.id);

  if (index !== -1) {
    myRepo[index] = req.body;
    res.status(200).json(myRepo[index]);
  } else {
    res.sendStatus(404);
  }
});

export default repoControllers;
