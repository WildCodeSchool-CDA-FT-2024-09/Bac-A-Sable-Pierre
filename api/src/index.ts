const { PORT } = process.env;

import { ApolloServer } from "@apollo/server"; // preserve-line
import { startStandaloneServer } from "@apollo/server/standalone";

import { dataSource } from "./db/client";
import "reflect-metadata";

import RepoResolver from "../src/repos/repo.resolvers";
import { buildSchema } from "type-graphql";
import LangueResolvers from "./langue/langue.resolvers";
import StatusResolvers from "./status/status.resolvers";
import UserResolver from "./user/user.resolvers";

(async () => {
  await dataSource.initialize();
  const schema = await buildSchema({
    resolvers: [RepoResolver, LangueResolvers, StatusResolvers, UserResolver],
  });

  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { host: "0.0.0.0", port: Number(PORT) },
    context: async ({ req, res }) => {
      console.log(req);
      return res;
    },
  });

  console.log(`🚀  Server ready at: ${url}`);
})();
