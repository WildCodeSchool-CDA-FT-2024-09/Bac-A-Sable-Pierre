"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const repos_controllers_1 = __importDefault(require("./repos/repos.controllers"));
const status_controllers_1 = __importDefault(require("../src/status/status.controllers"));
const langue_controllers_1 = __importDefault(require("../src/langue/langue.controllers"));
const router = express_1.default.Router();
router.get("/", (_, res) => {
    console.log(res);
    res.send("Hello wilders");
});
router.use("/repos", repos_controllers_1.default);
router.use(`/status`, status_controllers_1.default);
router.use(`/langue`, langue_controllers_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map