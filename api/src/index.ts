import express from "express";
import cors from "cors";
import router from "./router";
import { dataSource } from "./db/client";
import "reflect-metadata";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

app.use(`/api`, router);

app.listen(3000, async () => {
  await dataSource.initialize();
  console.log(`serveur is listenning on http://localhost:3000`);
});
