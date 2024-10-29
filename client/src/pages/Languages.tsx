import { useLanguagesQuery } from "../generated/graphql-types";

import "../App.css";

export default function Languages() {
  const { loading, error, data } = useLanguagesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (data) {
    return (
      <>
        <h1>Languages</h1>
        <table>
          <thead>
            <tr>
              {data.langs?.map((lang) => (
                <th key={lang.id}>{lang.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {data.langs?.map((lang) => (
                <td key={lang.id}>
                  <ul>
                    {lang.repos.map((repo) => (
                      <li key={repo.name}>{repo.name}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
