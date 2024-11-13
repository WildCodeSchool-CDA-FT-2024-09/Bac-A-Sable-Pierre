"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const langue_entities_1 = require("../langue/langue.entities");
const langueControllers = express_1.default.Router();
langueControllers.get(`/`, async (_, res) => {
    try {
        const langues = await langue_entities_1.Langue.find();
        res.status(200).json(langues);
    }
    catch (error) {
        res.sendStatus(500);
    }
});
langueControllers.post("/", async (req, res) => {
    try {
        const langue = new langue_entities_1.Langue();
        langue.label = req.body.label;
        await langue.save();
        res.status(201).json(langue);
    }
    catch (error) {
        res.sendStatus(500);
    }
});
exports.default = langueControllers;
//# sourceMappingURL=langue.controllers.js.map