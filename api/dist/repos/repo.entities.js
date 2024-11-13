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
exports.Repo = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const status_entities_1 = require("../status/status.entities");
const langue_entities_1 = require("../langue/langue.entities");
let Repo = class Repo extends typeorm_1.BaseEntity {
};
exports.Repo = Repo;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Repo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Repo.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Repo.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => status_entities_1.Status, (status) => status.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", status_entities_1.Status)
], Repo.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => langue_entities_1.Langue, (lang) => lang.repos),
    __metadata("design:type", Array)
], Repo.prototype, "langs", void 0);
exports.Repo = Repo = __decorate([
    (0, typeorm_1.Entity)()
], Repo);
//# sourceMappingURL=repo.entities.js.map