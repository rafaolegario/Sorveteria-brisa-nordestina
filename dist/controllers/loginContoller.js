"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const adminUser_1 = require("../model/adminUser");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.LoginController = {
    login: (req, res) => {
        const { username, password } = req.body;
        const Admin = adminUser_1.admin.find((adm) => adm.username === username);
        if (!Admin || Admin.password !== password) {
            return res.redirect("/auth/login");
        }
        const SECRET_KEY = process.env.SECRET_KEY;
        const token = jsonwebtoken_1.default.sign({ username: Admin.username }, SECRET_KEY, {
            expiresIn: "72h",
        });
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 3600000,
        });
        res.redirect("/protected/admin");
    },
};
