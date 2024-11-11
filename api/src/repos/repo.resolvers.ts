import {
  Arg,
  Authorized,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { Repo } from "./repo.entities";
import { Status } from "../status/status.entities";

@InputType()
class RepoInput implements Partial<Repo> {
  @Field()
  id: string;

  @Field()
  url: string;

  @Field()
  name: string;

  @Field()
  isPrivate: number;
}

@Resolver(Repo)
export default class RepoResolver {
  // Methode GET pour recuperer tous les repos
  @Authorized("admin", "sudo")
  @Query(() => [Repo])
  async repos() {
    const repos = await Repo.find({
      relations: {
        status: true,
        langs: true,
      },
    });

    return repos;
  }

  @Mutation(() => Repo)
  async createNewRepo(@Arg("data") newRepo: RepoInput) {
    //const newRepo: RepoInput = req.body.data
    // fonction de validation

    const repo = new Repo();
    repo.id = newRepo.id;
    repo.url = newRepo.url;
    repo.name = newRepo.name;

    const status = await Status.findOneOrFail({
      where: { id: +newRepo.isPrivate },
    });
    repo.status = status;

    await repo.save();

    const myRepo = await Repo.findOneOrFail({
      where: { id: newRepo.id },
      relations: {
        langs: true,
        status: true,
      },
    });
    console.log("myRepo", myRepo);
    return repo;
  }
}
