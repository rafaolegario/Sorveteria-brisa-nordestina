import express from "express";
import { IceCreamController } from "../controllers/IceCreamController";

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await IceCreamController.getIceCreams(req, res);

  return res.render("cardapio", { products });
});

router.patch("/stock/:id", async (req, res) => {
   await IceCreamController.updateStock(req, res);
})

export { router };
