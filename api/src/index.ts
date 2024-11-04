// import express from "express";
// import cors from "cors";
// import router from "./router";
// import * as dotenv from "dotenv";
// import { dataSource } from "./db/client";

// import "reflect-metadata";

// dotenv.config();
const { PORT } = process.env;
// const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   })
// );

// app.use(express.json());

// app.use(`/api`, router);

// app.listen(PORT, async () => {
//   await dataSource.initialize();
//   console.log(`serveur is listenning on http://localhost:${PORT}`);
// });

import { ApolloServer } from "@apollo/server"; // preserve-line
import { startStandaloneServer } from "@apollo/server/standalone";

import { dataSource } from "./db/client";
import "reflect-metadata";

import RepoResolver from "../src/repos/repo.resolvers";
import { buildSchema } from "type-graphql";
import LangueResolvers from "./langue/langue.resolvers";
import StatusResolvers from "./status/status.resolvers";

// import repos from "../src/data/repos.json";
// import langs from "../src/data/langs.json";
// import status from "../src/data/status.json";
// import raws from "../src/data/raw.json";

// const typeDefs = `#graphql
//   type Language {
//     size: Int
//     name: String
//   }

//   type Raws {
//     id: String
//     isPrivate: Boolean
//     languages: [Language]
//     name: String
//     url: String
//   }

//   type Repos {
//     id: String
//     name: String
//     url: String
//     isFavorite: Boolean
//   }

//   type Langs {
//     id: String
//     label: String
//   }

//   type Status {
//     id: String
//     label: String
//   }

//   type Query {
//     repos: [Repos]
//     langs: [Langs]
//     status: [Status]
//     raws: [Raws]
//   }
// `;

// const resolvers = {
//   Query: {
//     // repos: () => repos,
//     // langs: () => langs,
//     // status: () => status,
//     // raws: () =>
//     //   raws.map((raw) => ({
//     //     ...raw,
//     //     languages: raw.languages.map((lang) => ({
//     //       size: lang.size,
//     //       name: lang.node.name,
//     //     })),
//     //   })),
//   },
// };

(async () => {
  await dataSource.initialize();
  const schema = await buildSchema({
    resolvers: [RepoResolver, LangueResolvers, StatusResolvers],
    // validate: false,
  });

  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { host: "0.0.0.0", port: Number(PORT) },
  });

  console.log(`🚀  Server ready at: ${url}`);
})();
