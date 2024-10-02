import "./App.css";
import type { Repo } from "./types/RepoType";
// import data from "./assets/data.json";
import RepoCard from "../src/compenents/RepoCard";
import { useEffect, useState } from "react";

function App() {
  const [repo, setRepo] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/repos`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setRepo(data);
        console.log(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>My Repo Github</h1>
      <main>
        <div className="repo-container">
          {repo.map((repo: Repo) => (
            <RepoCard
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
