CREATE TABLE Statut (
    id_statut INT PRIMARY KEY,
    nom VARCHAR (50)
    description VARCHAR(255)
);

CREATE TABLE Repo (
    id_repo INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom VARCHAR(255),
    url VARCHAR(255) NOT NULL,
    id_statut INT NOT NULL,
    FOREIGN KEY (id_statut) REFERENCES Statut(id_statut)
);

CREATE TABLE Langage (
    id_langage INT PRIMARY KEY,
    nom_langage VARCHAR(255)
);

CREATE TABLE Repo_Langage (
    id_repo INT,
    id_langage INT,
    PRIMARY KEY (id_repo, id_langage),
    FOREIGN KEY (id_repo) REFERENCES Repo(id_repo),
    FOREIGN KEY (id_langage) REFERENCES Langage(id_langage)
);

CREATE TABLE Commentaire (
    id_commentaire INT PRIMARY KEY,
    texte_commentaire TEXT,
    date_commentaire DATE,
    id_repo INT,
    FOREIGN KEY (id_repo) REFERENCES Repo(id_repo)
);