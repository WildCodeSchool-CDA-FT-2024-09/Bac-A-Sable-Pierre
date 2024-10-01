import express, { Response } from "express";
// import langue from "../../langs.json";

import { Langue } from "../repos/langue.entities";
// import type { Langue } from "./langue.type";

const langueControllers = express.Router();

langueControllers.get(`/`, async (_: any, res: Response) => {
  try {
    const langues = await Langue.find();
    res.status(200).json(langues);
  } catch (error) {
    res.sendStatus(500);
  }
});

// langueControllers.get("/:id", (req: Request, res: Response) => {
//   const langues = langue.find(
//     (rep) => rep.id === Number(req.params.id)
//   ) as Langue;

//   if (langues) {
//     res.status(200).json(langues);
//   } else {
//     res.sendStatus(404);
//   }
// });

export default langueControllers;
