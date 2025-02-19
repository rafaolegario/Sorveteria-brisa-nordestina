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
exports.IceCreamModel = void 0;
const prisma_1 = __importDefault(require("../prisma"));
exports.IceCreamModel = {
    getAll: () => __awaiter(void 0, void 0, void 0, function* () {
        const all = yield prisma_1.default.iceCreams.findMany();
        return all;
    }),
    getID: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const iceCream = yield prisma_1.default.iceCreams.findUnique({
            where: { id: id },
        });
        return iceCream;
    }),
    save: (_a) => __awaiter(void 0, [_a], void 0, function* ({ name, Price, InStock, propertie, size }) {
        const iceCream = yield prisma_1.default.iceCreams.create({
            data: {
                name,
                price: Price,
                inStock: InStock,
                propertie,
                size
            },
        });
        return iceCream;
    }),
    update: (id, quantity, newName, price) => __awaiter(void 0, void 0, void 0, function* () {
        const updated = yield prisma_1.default.iceCreams.update({
            where: { id: id },
            data: {
                name: newName,
                price: price,
                inStock: quantity,
            },
        });
        return updated;
    }),
    updateStock: (id, quantity) => __awaiter(void 0, void 0, void 0, function* () {
        const updated = yield prisma_1.default.iceCreams.update({
            where: { id: id },
            data: {
                inStock: quantity,
            },
        });
        return updated;
    }),
    delete: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const deleted = yield prisma_1.default.iceCreams.delete({
            where: { id: id },
        });
        return deleted;
    }),
};
