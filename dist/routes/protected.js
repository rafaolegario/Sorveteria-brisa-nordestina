"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectedRouter = void 0;
const express_1 = __importDefault(require("express"));
const IceCreamController_1 = require("../controllers/IceCreamController");
const authMiddlewate_1 = require("../middlewares/authMiddlewate");
const protectedRouter = express_1.default.Router();
exports.protectedRouter = protectedRouter;
protectedRouter.get("/admin", authMiddlewate_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield IceCreamController_1.IceCreamController.getIceCreams(req, res);
    return res.render("admin", { products });
}));
protectedRouter.get("/admin/:id", authMiddlewate_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield IceCreamController_1.IceCreamController.getById(req, res);
}));
protectedRouter.post("/admin/save", authMiddlewate_1.authMiddleware, IceCreamController_1.IceCreamController.saveIceCream);
protectedRouter.delete("/admin/delete/:id", authMiddlewate_1.authMiddleware, IceCreamController_1.IceCreamController.deleteIceCream);
protectedRouter.put("/admin/update/:id", authMiddlewate_1.authMiddleware, IceCreamController_1.IceCreamController.updateIceCream);
