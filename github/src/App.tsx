import "./App.css";
import type { Repo } from "./types/RepoType";
import connexion from "./services/connexion";
import RepoCard from "../src/compenents/RepoCard";
import { useEffect, useState } from "react";

function App() {
  const [repo, setRepo] = useState<Repo[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await connexion.get<Repo[]>(
          `${import.meta.env.VITE_API_URL}/repos`
        );

        setRepo(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const filteredRepos = filter
    ? repo.filter((repo) => repo.langs.some((lang) => lang.label === filter))
    : repo;

  return (
    <>
      <h1>My Repo Github</h1>
      <div>
        <label htmlFor="language-filter">Filter by Language </label>
        <select
          id="language-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="JavaScript">JavaScript</option>
          <option value="HTML">HTML</option>
          <option value="SCSS">SCSS</option>
        </select>
      </div>

      <main>
        <div className="repo-container">
          {filteredRepos.map((repo: Repo) => (
            <RepoCard
              key={repo.id}
              id={repo.id}
              name={repo.name}
              url={repo.url}
              isPrivate={repo.isPrivate}
              status={repo.status.label}
              langs={repo.langs}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
