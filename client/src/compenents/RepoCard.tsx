import { Link } from "react-router-dom";
import { RepoCardProps } from "../types/RepoCardProps";

function RepoCard({ id, name, url, status, langs }: RepoCardProps) {
  return (
    <>
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
          <Link to={`/detail/${id}`}>Détail</Link>
        </ul>
      </section>
    </>
  );
}

export default RepoCard;
