import express from "express";

const app = express();

app.listen(3000, async () => {
  console.log(`serveur is listenning on http://localhost:3000`);
});
