"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ejs = __importStar(require("ejs"));
const routes_1 = require("./routes/routes");
const protected_1 = require("./routes/protected");
const auth_1 = require("./routes/auth");
const dotenv_1 = __importDefault(require("dotenv"));
const path = require("node:path");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors = require("cors");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(cors());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path.join(__dirname, "../public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));
app.engine("ejs", ejs.renderFile);
app.set("view options", {
    layout: false,
});
app.use(express_1.default.json());
app.use("/Brisanordestina", routes_1.router);
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/Brisanordestina", routes_1.router);
app.use("/auth", auth_1.authRouter);
app.use("/protected", protected_1.protectedRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(PORT);
});
