import express, { Response, Request } from "express";

import { Langue } from "../langue/langue.entities";

const langueControllers = express.Router();

langueControllers.get(`/`, async (_: any, res: Response) => {
  try {
    const langues = await Langue.find();
    res.status(200).json(langues);
  } catch (error) {
    res.sendStatus(500);
  }
});

langueControllers.post("/", async (req: Request, res: Response) => {
  try {
    const langue = new Langue();
    langue.label = req.body.label;

    await langue.save();
    res.status(201).json(langue);
  } catch (error) {
    res.sendStatus(500);
  }
});

export default langueControllers;
