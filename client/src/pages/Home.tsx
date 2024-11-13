import "../App.css";

import RepoCard from "../../src/compenents/RepoCard";
import { useState } from "react";
import {
  useReposQuery,
  useMutationMutation,
  useLoginLazyQuery,
} from "../generated/graphql-types";

function Home() {
  const [filter] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const { loading, error, data } = useReposQuery();
  const [addRepo] = useMutationMutation();
  const [login] = useLoginLazyQuery();

  const handleLogin = async () => {
    // useQuery...
    await login({
      variables: {
        email: "test@test.com",
        password: "argon2hash",
      },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredRepos = filter
    ? data?.repos.filter((repo) =>
        repo?.langs?.some((lang) => lang?.label === filter)
      )
    : data?.repos;

  const handleAddRepo = () => {
    addRepo({
      variables: {
        data: { id, name, url, isPrivate: 0 },
      },
    }).catch((err) => {
      console.error("Submission Error:", err);
    });
  };

  return (
    <>
      <div>
        <button type="button" onClick={handleLogin}>
          LOGIN
        </button>
      </div>

      <main>
        <section>
          <div>
            <input
              type="text"
              placeholder="ID"
              onChange={(e) => setId(e.target.value)}
            />
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="URL"
              onChange={(e) => setUrl(e.target.value)}
            />
            <input
              type="text"
              placeholder="Status"
              onChange={(e) => setStatus(e.target.value)}
            />
            <button onClick={handleAddRepo}>Ajouter un repo</button>
          </div>
        </section>
        <div className="repo-container">
          {filteredRepos?.map((repo) => (
            <RepoCard
              key={repo.id}
              id={repo.id}
              name={repo.name}
              url={repo.url}
              status={status}
              langs={repo.langs}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
