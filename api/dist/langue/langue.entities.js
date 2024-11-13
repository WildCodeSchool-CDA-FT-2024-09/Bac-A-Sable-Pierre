"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Langue = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const repo_entities_1 = require("../repos/repo.entities");
let Langue = class Langue extends typeorm_1.BaseEntity {
};
exports.Langue = Langue;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Langue.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Langue.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => repo_entities_1.Repo, (repo) => repo.langs),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Langue.prototype, "repos", void 0);
exports.Langue = Langue = __decorate([
    (0, typeorm_1.Entity)()
], Langue);
//# sourceMappingURL=langue.entities.js.map