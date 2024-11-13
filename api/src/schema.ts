import { buildSchema } from "type-graphql";
import RepoResolver from "./repos/repo.resolvers";
import LangueResolvers from "./langue/langue.resolvers";
import StatusResolvers from "./status/status.resolvers";
import UserResolver from "./user/user.resolvers";

const getSchema = async () => {
  return await buildSchema({
    resolvers: [RepoResolver, LangueResolvers, StatusResolvers, UserResolver],
  });
};

export default getSchema;
