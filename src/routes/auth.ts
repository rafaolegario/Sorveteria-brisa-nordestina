import express from "express";

import { LoginController } from "../controllers/loginContoller";

const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
  res.render("adminLogin");
});
authRouter.post("/login", LoginController.login);

export { authRouter };
