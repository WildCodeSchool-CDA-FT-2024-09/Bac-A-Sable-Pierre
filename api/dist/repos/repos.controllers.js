"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const repo_entities_1 = require("../repos/repo.entities");
const status_entities_1 = require("../status/status.entities");
const langue_entities_1 = require("../langue/langue.entities");
const typeorm_1 = require("typeorm");
const repoControllers = express_1.default.Router();
repoControllers.get("/", async (_, res) => {
    try {
        const repos = await repo_entities_1.Repo.find({
            relations: {
                status: true,
                langs: true,
            },
        });
        res.status(200).json(repos);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
repoControllers.get("/:id", async (req, res) => {
    console.log("GET REPOS");
    try {
        const repos = await repo_entities_1.Repo.find({
            where: {
                id: req.params.id,
            },
            relations: {
                status: true,
                langs: true,
            },
        });
        res.status(200).json(repos);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
repoControllers.post("/", async (req, res) => {
    try {
        const repo = new repo_entities_1.Repo();
        repo.id = req.body.id;
        repo.name = req.body.name;
        repo.url = req.body.url;
        const status = await status_entities_1.Status.findOneOrFail({
            where: { id: req.body.isPrivate },
        });
        repo.status = status;
        const langs = await langue_entities_1.Langue.find({
            where: { id: (0, typeorm_1.In)(req.body.langs.map((l) => l)) },
        });
        repo.langs = langs;
        await repo.save();
        res.status(201).json(repo);
    }
    catch (error) {
        res.sendStatus(500);
    }
});
exports.default = repoControllers;
//# sourceMappingURL=repos.controllers.js.map