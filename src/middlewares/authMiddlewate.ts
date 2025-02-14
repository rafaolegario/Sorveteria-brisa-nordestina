import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.cookies.token; 

  if (!token) {
    return res.redirect("/auth/login");
  }

  try {

    next();
  } catch (error) {
    return res.redirect("/auth/login");
  }
};