import express, { Response, Request } from "express";
import { validate } from "class-validator";
// import Joi from "joi";

import { Repo } from "../repos/repo.entities";

//import repos from "../../repos.json";
//import type { Repo } from "../repos/repo.type";

//let myRepo: Array<Repo> = repos;

const repoControllers = express.Router();

//const schema = Joi.object({
//id: Joi.string().required(),
//name: Joi.string().required(),
//url: Joi.string().required(),
//isPrivate: Joi.string().valid("1", "2").required(),
//});

// const validateRepo = (req: Request, res: Response, next: NextFunction) => {
//   const { error } = schema.validate(req.body);

//   if (error == null) {
//     next();
//   } else {
//     res.status(422).json(error);
//   }
// };

repoControllers.get("/", async (_: any, res: Response) => {
  try {
    const repos = await Repo.find();
    res.status(200).json(repos);
  } catch (error) {
    res.sendStatus(500);
  }
});

// repoControllers.get("/:id", (req: Request, res: Response) => {
//   const repo = myRepo.find((rep) => rep.id === req.params.id) as Repo;

//   if (repo) {
//     res.status(200).json(repo);
//   } else {
//     res.sendStatus(404);
//   }
// });

repoControllers.post("/", async (req: Request, res: Response) => {
  try {
    const repo = new Repo();
    repo.id = req.body.id;
    repo.name = req.body.name;
    repo.url = req.body.url;
    repo.isPrivate = req.body.isPrivate;
    const error = await validate(repo);
    if (error.length > 0) {
      res.status(422).json(error);
    } else {
      await repo.save();
      res.status(201).json(repo);
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

// repoControllers.delete("/:id", (req: Request, res: Response) => {
//   myRepo = myRepo.filter((repo: Repo) => repo.id !== req.params.id);
//   res.sendStatus(204);
// });

// repoControllers.put("/:id", validateRepo, (req: Request, res: Response) => {
//   const index = myRepo.findIndex((repo) => repo.id === req.params.id);

//   if (index !== -1) {
//     myRepo[index] = req.body;
//     res.status(200).json(myRepo[index]);
//   } else {
//     res.sendStatus(404);
//   }
// });

export default repoControllers;
