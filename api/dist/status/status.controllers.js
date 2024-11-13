"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const status_entities_1 = require("../status/status.entities");
const statusControllers = express_1.default.Router();
statusControllers.get("/", async (_, res) => {
    try {
        const status = await status_entities_1.Status.find({
            relations: {
                repos: true,
            },
        });
        res.status(200).json(status);
    }
    catch (error) {
        res.sendStatus(500);
    }
});
statusControllers.post("/", async (req, res) => {
    try {
        const status = new status_entities_1.Status();
        status.label = req.body.label;
        await status.save();
        res.status(201).json(status);
    }
    catch (error) {
        res.sendStatus(500);
    }
});
exports.default = statusControllers;
//# sourceMappingURL=status.controllers.js.map