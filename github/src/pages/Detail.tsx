import { useParams } from "react-router-dom";
import type { Repo } from "../types/RepoType";
import { useEffect, useState } from "react";

import connexion from "../services/connexion";

export default function Detail() {
  console.log("Initialisation du Detail");
  const { id } = useParams();

  const [data, setData] = useState<Repo | null>(null);

  useEffect(() => {
    console.log("I'm the useEffect");
    const fetchRepos = async () => {
      try {
        const repos = await connexion.get<Repo[]>(`/api/repos/${id}`);
        console.log(" useEffect repos", repos);
        setData(repos.data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRepos();
  }, []);

  return (
    <>
      <div>Detail du Repo {id}</div>
      <div>
        {data ? (
          <>
            <h1>nom {data.name}</h1>
            <p>{data.label}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
