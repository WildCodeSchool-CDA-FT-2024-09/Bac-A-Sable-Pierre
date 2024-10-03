import { RepoCardProps } from "../types/RepoCardProps";

function RepoCard({ name, url, status, langs }: RepoCardProps) {
  return (
    <section className="repo-card">
      <h2> {name}</h2>
      <h3 className="card">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {" "}
          Cliquer ici pour accéder au repo
        </a>
      </h3>
      <h4> {status}</h4>

      <ul>
        <h2>Languagues</h2>
        {langs.map((lang) => (
          <>
            <li key={lang.id}> {lang.label}</li>
          </>
        ))}
      </ul>
    </section>
  );
}

export default RepoCard;
