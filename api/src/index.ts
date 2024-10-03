import express from "express";
import cors from "cors";
import router from "./router";
import * as dotenv from "dotenv";
import { dataSource } from "./db/client";

import "reflect-metadata";

dotenv.config();
const { PORT } = process.env;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

app.use(`/api`, router);

app.listen(PORT, async () => {
  await dataSource.initialize();
  console.log(`serveur is listenning on http://localhost:${PORT}`);
});
