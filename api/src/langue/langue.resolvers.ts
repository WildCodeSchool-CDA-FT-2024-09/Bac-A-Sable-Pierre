import { Query, Resolver } from "type-graphql";
import { Langue } from "./langue.entities";

@Resolver(Langue)
export default class LangueResolvers {
  @Query(() => [Langue])
  async langs() {
    const langue = await Langue.find({
      relations: {
        repos: true,
      },
    });
    console.log("langue", langue);
    return langue;
  }
}
