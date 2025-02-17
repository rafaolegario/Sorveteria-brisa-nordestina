"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect("/auth/login");
    }
    try {
        next();
    }
    catch (error) {
        return res.redirect("/auth/login");
    }
};
exports.authMiddleware = authMiddleware;
