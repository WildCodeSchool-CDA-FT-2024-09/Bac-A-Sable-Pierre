import { graphql, GraphQLSchema, print } from "graphql";
import getSchema from "../schema";
import gql from "graphql-tag";

const GET_REPOS = gql`
  query Repos {
    repos {
      id
      name
      url
      status {
        label
      }
      langs {
        label
      }
    }
  }
`;

describe("Repo resolvers", () => {
  let schema: GraphQLSchema;

  beforeAll(async () => {
    schema = await getSchema();
  });

  it("should return all list of repos", async () => {
    const result = (await graphql({
      schema: schema,
      source: print(GET_REPOS),
    })) as { data: { repos: Array<unknown> } };
    console.log(result);

    expect(result.data.repos).toEqual(expect.any(Array));
  });
});
