import { gql, useQuery } from "@apollo/client";

import "../App.css";

const GET_LANGUAGES = gql`
  query Languages {
    langs {
      id
      label
      repos {
        name
      }
    }
  }
`;

export default function Languages() {
  const { loading, error, data } = useQuery(GET_LANGUAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>Languages</h1>
      <table>
        <thead>
          <tr>
            {data.langs.map((lang: any) => (
              <th key={lang.id}>{lang.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {data.langs.map((lang: any) => (
              <td key={lang.id}>
                <ul>
                  {lang.repos.map((repo: any) => (
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
