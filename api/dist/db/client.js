"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const repo_entities_1 = require("../repos/repo.entities");
const langue_entities_1 = require("../langue/langue.entities");
const status_entities_1 = require("../status/status.entities");
exports.dataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "./src/db/db.sqlite",
    entities: [repo_entities_1.Repo, langue_entities_1.Langue, status_entities_1.Status],
    synchronize: true,
});
//# sourceMappingURL=client.js.map