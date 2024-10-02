interface RepoCardProps {
  id: string;
  name: string;
  url: string;
  isPrivate: number;
  status: string; // On attend directement le label du statut
  langs: { id: number; label: string }[]; // Tableau de langues avec id et label
}

function RepoCard({ id, name, url, status, langs }: RepoCardProps) {
  return (
    <section className="repo-card">
      <h2>Nom : {name}</h2>
      <h3 className="card">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      </h3>
      <h4>Statut: {status}</h4>

      <ul>
        <h2>Languagues:</h2>
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
