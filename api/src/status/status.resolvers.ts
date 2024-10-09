import { Query, Resolver } from "type-graphql";
import { Status } from "./status.entities";

@Resolver(Status)
export default class StatusResolvers {
  @Query(() => [Status])
  async status() {
    const status = await Status.find({
      relations: {
        repos: true,
      },
    });
    console.log("status", status);
    return status;
  }
}
