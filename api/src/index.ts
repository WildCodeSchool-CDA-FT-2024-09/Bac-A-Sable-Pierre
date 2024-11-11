const { PORT, AUTH_SECRET_KEY } = process.env;

import { ApolloServer } from "@apollo/server"; // preserve-line
import { startStandaloneServer } from "@apollo/server/standalone";
import setCookie from "set-cookie-parser";
import * as jwt from "jsonwebtoken";

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
    resolvers: [RepoResolver, UserResolver, LangueResolvers, StatusResolvers],
    authChecker: ({ context }, roles): boolean => {
      console.log(context.cookie);
      console.log("roles", roles);

      // Si utilisateur admin et Authorized("admin")
      if (roles.length > 0)
        return roles.some((role) => context.cookie.role === role);

      // Si utilisateur connect et Authorized()
      if (context.cookie) return true;

      // Default
      return false;
    },
  });

  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: Number(PORT) },
    context: async ({ req, res }) => {
      console.info(req.headers.cookie);

      if (!req.headers.cookie) return { res };

      const { cdatokenexample } = setCookie.parse(
        req.headers.cookie as string,
        {
          map: true,
        }
      );

      if (!cdatokenexample) return { res };

      const payload = jwt.verify(
        cdatokenexample.value,
        AUTH_SECRET_KEY as string
      );

      if (!payload) return { res };
      return { res, cookie: payload };
    },
  });
  console.info("Docker compose is watching");
  console.log(`🚀  Server ready at: ${url}`);
})();
