import type { Repo } from "../types/RepoType";

function RepoDard({ id, name, url, isPrivate }: Repo) {
  return (
    <>
      <section className="repo-card">
        <h2>ID: {id}</h2>
        <h2>Nom : {name}</h2>
        <h3 className="card">{url}</h3>
        <h4>Status: {isPrivate}</h4>
      </section>
    </>
  );
}

export default RepoDard;
