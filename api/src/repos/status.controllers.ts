import express, { Response, Request } from "express";
import status from "../../status.json";
import type { Status } from "./status.type";

const statusControllers = express.Router();

statusControllers.get(`/`, (_: any, res: Response) => {
  res.status(200).json(status);
});

statusControllers.get("/:id", (req: Request, res: Response) => {
  const statu = status.find(
    (rep) => rep.id === Number(req.params.id)
  ) as Status;

  if (statu) {
    res.status(200).json(statu);
  } else {
    res.sendStatus(404);
  }
});

export default statusControllers;
