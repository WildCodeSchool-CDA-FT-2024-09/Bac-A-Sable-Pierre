"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const langue_entities_1 = require("../langue/langue.entities");
const langs_json_1 = __importDefault(require("../data/langs.json"));
const status_entities_1 = require("../status/status.entities");
const status_json_1 = __importDefault(require("../data/status.json"));
const repo_entities_1 = require("../repos/repo.entities");
const repos_json_1 = __importDefault(require("../data/repos.json"));
const lang_by_repo_json_1 = __importDefault(require("../data/lang_by_repo.json"));
(async () => {
    await client_1.dataSource.initialize();
    const queryRunner = client_1.dataSource.createQueryRunner();
    console.log("Database initialized");
    try {
        await queryRunner.startTransaction();
        await queryRunner.query(`DELETE FROM langue_repos_repo`);
        await queryRunner.query(`DELETE FROM langue`);
        await queryRunner.query(`DELETE FROM repo`);
        await queryRunner.query(`DELETE FROM status`);
        await queryRunner.query(`DELETE FROM sqlite_sequence WHERE name='status' OR name='langue'`);
        const savedlangs = await Promise.all(langs_json_1.default.map(async (el) => {
            const langue = new langue_entities_1.Langue();
            langue.label = el.label;
            return await langue.save();
        }));
        console.log(savedlangs);
        const savedStatus = await Promise.all(status_json_1.default.map(async (el) => {
            const status = new status_entities_1.Status();
            status.label = el.label;
            return await status.save();
        }));
        console.log(savedStatus);
        const savedRepos = await Promise.all(repos_json_1.default.map(async (el) => {
            const repo = new repo_entities_1.Repo();
            repo.id = el.id;
            repo.name = el.name;
            repo.url = el.url;
            const status = savedStatus.find((st) => st.id === el.isPrivate);
            repo.status = status;
            const mylangs = savedlangs.filter((svLg) => {
                console.log("repoID", el.id);
                const associatedlang = lang_by_repo_json_1.default.filter((lgbyrep) => lgbyrep.repo_id === el.id);
                console.log("A", associatedlang);
                const langLabel = langs_json_1.default.filter((lg) => associatedlang.some((assolg) => assolg.lang_id === lg.id));
                return langLabel.some((lgLabel) => lgLabel.label === svLg.label);
            });
            repo.langs = mylangs;
            return await repo.save();
        }));
        console.log(savedRepos);
        await queryRunner.commitTransaction();
    }
    catch (error) {
        console.log(error);
        await queryRunner.rollbackTransaction();
    }
})();
//# sourceMappingURL=seed.js.map