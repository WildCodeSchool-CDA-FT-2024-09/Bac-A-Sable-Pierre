import express, { Response, Request } from "express";
import langue from "../../langs.json";
import type { Langue } from "./langue.type";

const langueControllers = express.Router();

langueControllers.get(`/`, (_: any, res: Response) => {
  res.status(200).json(langue);
});

langueControllers.get("/:id", (req: Request, res: Response) => {
  const langues = langue.find(
    (rep) => rep.id === Number(req.params.id)
  ) as Langue;

  if (langues) {
    res.status(200).json(langues);
  } else {
    res.sendStatus(404);
  }
});

export default langueControllers;
