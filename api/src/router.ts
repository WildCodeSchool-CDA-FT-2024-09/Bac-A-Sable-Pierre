import express from "express";
import { Response } from "express";
import repoControllers from "./repos/repos.controllers";
import statusControllers from "../src/status/status.controllers";
import langueControllers from "../src/langue/langue.controllers";

const router = express.Router();

router.get("/", (_, res: Response) => {
  console.log(res);
  res.send("Hello wilders");
});

router.use("/repos", repoControllers);
router.use(`/status`, statusControllers);
router.use(`/langue`, langueControllers);

export default router;
