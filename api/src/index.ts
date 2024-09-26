import express from "express";
import router from "./router";

const app = express();

app.use(express.json());

app.use(`/api`, router);

app.listen(3000, async () => {
  console.log(`serveur is listenning on http://localhost:3000`);
});
