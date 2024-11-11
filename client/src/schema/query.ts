import { gql } from "@apollo/client";

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

const GET_LANGUAGES = gql`
  query Languages {
    langs {
      id
      label
      repos {
        name
      }
    }
  }
`;

const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export { GET_LANGUAGES, GET_REPOS, LOGIN };
