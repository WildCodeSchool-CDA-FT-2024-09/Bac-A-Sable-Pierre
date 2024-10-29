import fs from "fs";

// Chemin du fichier JSON
const jsonFilePath = "./data/raw.json";

try {
  if (!fs.existsSync(jsonFilePath)) {
    throw new Error(`Le fichier ${jsonFilePath} n'existe pas`);
  }

  const jsonData = fs.readFileSync(jsonFilePath, "utf-8");
  if (jsonData.trim() === "") {
    throw new SyntaxError("Le fichier JSON est vide");
  }
  const parsedData = JSON.parse(jsonData);
  console.log(parsedData);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error("Erreur de syntaxe JSON:", error.message);
  } else {
    console.error("Erreur:", error.message);
  }
}

// Définition des variables
const lang: any[] = []; // Remplacez par les données appropriées
const lang_by_repo: any[] = []; // Remplacez par les données appropriées

// Écriture des fichiers JSON
(async () => {
  await fs.writeFile("./data/langs.json", JSON.stringify(lang), (err) =>
    err ? console.error(err) : console.log("File langs is ready")
  );

  await fs.writeFile(
    "./data/lang_by_repo.json",
    JSON.stringify(lang_by_repo),
    (err) =>
      err ? console.error(err) : console.log("File langs by repo is ready")
  );

  await fs.writeFile(
    "./data/status.json",
    JSON.stringify([
      {
        id: 1,
        label: "Privé",
      },
      { id: 2, label: "Public" },
    ]),
    (err) => (err ? console.error(err) : console.log("File status is ready"))
  );
})();
