import { Request, Response } from "express";
import { admin } from "../model/adminUser";
import jwt from "jsonwebtoken";

export const LoginController = {
  login: (req: Request, res: Response) => {
    const { username, password } = req.body;

    const Admin = admin.find((adm) => adm.username === username);

    if (!Admin || Admin.password !== password) {
      return res.redirect("/auth/login");
    }

    const SECRET_KEY = process.env.SECRET_KEY;
    const token = jwt.sign({ username: Admin.username }, SECRET_KEY as string, {
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
