import { gql } from "@apollo/client";

export const ADD_REPO = gql`
  mutation Mutation($data: RepoInput!) {
    createNewRepo(data: $data) {
      id
      name
      url
      status {
        id
        label
      }
    }
  }
`;
