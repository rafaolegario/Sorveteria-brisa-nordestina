import express from "express";
import { IceCreamController } from "../controllers/IceCreamController";
import { authMiddleware } from "../middlewares/authMiddlewate";

const protectedRouter = express.Router();

protectedRouter.get("/admin", authMiddleware, async (req, res) => {
  const products = await IceCreamController.getIceCreams(req, res);
  return res.render("admin", { products });
});

protectedRouter.get("/admin/:id", authMiddleware, async (req, res) => {
  await IceCreamController.getById(req, res);
});

protectedRouter.post(
  "/admin/save",
  authMiddleware,
  IceCreamController.saveIceCream
);
protectedRouter.delete(
  "/admin/delete/:id",
  authMiddleware,
  IceCreamController.deleteIceCream
);
protectedRouter.put(
  "/admin/update/:id",
  authMiddleware,
  IceCreamController.updateIceCream
);

export { protectedRouter };
