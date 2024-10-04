import { useParams, useLoaderData } from "react-router-dom";
import type { Repo } from "../types/RepoType";

export default function Detail() {
  console.log("Initialisation du Detail");
  const { id } = useParams();
  const data = useLoaderData() as Repo;

  return (
    <>
      <div>Detail du Repo {id}</div>
      <div>
        <h1>nom {data.name}</h1>
        <p>{data.label}</p>
      </div>
    </>
  );
}
