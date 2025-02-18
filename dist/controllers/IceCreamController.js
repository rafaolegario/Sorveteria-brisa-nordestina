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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IceCreamController = void 0;
const iceCreamModel_1 = require("../model/iceCreamModel");
exports.IceCreamController = {
    getById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const products = yield iceCreamModel_1.IceCreamModel.getID(id);
            return res.json(products);
        }
        catch (error) {
            res.status(500).json({ message: "Erro ao buscar sorvetes", error });
        }
    }),
    getIceCreams: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const products = yield iceCreamModel_1.IceCreamModel.getAll();
            return products;
        }
        catch (error) {
            res.status(500).json({ message: "Erro ao buscar sorvetes", error });
        }
    }),
    saveIceCream: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name, price, inStock, propertie, size } = req.body;
            if (!name || !price || !inStock) {
                res
                    .status(400)
                    .json({ error: "Todos os campos devem ser preenchidos" });
                return;
            }
            const Price = parseFloat(price.replace(",", "."));
            const InStock = parseInt(inStock);
            yield iceCreamModel_1.IceCreamModel.save({ name, Price, InStock, propertie, size });
            res.redirect("/protected/admin");
        }
        catch (error) {
            res.status(500).json({
                error: "Erro ao salvar o sorvete",
                details: error.message,
            });
        }
    }),
    updateIceCream: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const { name, price, inStock } = req.body;
            const Price = parseFloat(price.replace(",", "."));
            const Quantity = parseInt(inStock);
            yield iceCreamModel_1.IceCreamModel.update(id, Quantity, name, Price);
            res.status(201).send();
        }
        catch (error) {
            res.status(500).json({
                error: "Erro ao atualizar o estoque",
                details: error.message,
            });
        }
    }),
    deleteIceCream: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            if (!id) {
                res.status(400).json({ error: "Identificador invalido" });
                return;
            }
            yield iceCreamModel_1.IceCreamModel.delete(id);
            res.status(201).json({ message: "Sorvete excluido!" });
        }
        catch (error) {
            res.status(500).json({
                error: "Erro ao excluir sorvete",
                details: error.message,
            });
        }
    }),
};
