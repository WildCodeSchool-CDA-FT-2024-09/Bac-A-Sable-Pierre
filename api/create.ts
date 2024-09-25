import * as fs from "fs";

type Repo = {
  id: string;
  name: string;
  url: string;
  isPrivate: number;
};

(async () => {
  const raw = await JSON.parse(
    fs.readFileSync("raw.json", { encoding: "utf-8" })
  );

  const repo: Repo[] = raw.map(
    (rep: { id: string; isPrivate: boolean; name: string; url: string }) => ({
      id: rep.id,
      isPrivate: rep.isPrivate ? 1 : 2,
      name: rep.name,
      url: rep.url,
    })
  );

  await fs.writeFile("repos.json", JSON.stringify(repo), (err) =>
    err ? console.error(err) : console.log("File repo is ready")
  );
})();
