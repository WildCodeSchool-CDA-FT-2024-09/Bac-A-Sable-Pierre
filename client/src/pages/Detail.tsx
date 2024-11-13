import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_REPOS = gql`
  query Repos {
    repos {
      id
      name
    }
  }
`;

export default function Detail() {
  console.log("Initialisation du Detail");
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_REPOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const repo = data.repos.find((repo: { id: string }) => repo.id === id);

  if (!repo) return <p>Repo not found</p>;

  return (
    <>
      <div>Detail du Repo {id}</div>

      <div>
        <>
          <h1>nom {repo.name}</h1>
        </>
      </div>
    </>
  );
}
