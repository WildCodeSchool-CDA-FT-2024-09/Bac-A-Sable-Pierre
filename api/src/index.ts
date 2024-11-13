const { PORT } = process.env;

import { ApolloServer } from "@apollo/server"; // preserve-line
import { startStandaloneServer } from "@apollo/server/standalone";

import { dataSource } from "./db/client";
import "reflect-metadata";

import getSchema from "./schema";

(async () => {
  await dataSource.initialize();
  const schema = await getSchema();

  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { host: "0.0.0.0", port: Number(PORT) },
    context: async ({ req, res }) => {
      console.log(req);
      return { req, res };
    },
  });

  console.log(`🚀  Server ready at: ${url}`);
})();
