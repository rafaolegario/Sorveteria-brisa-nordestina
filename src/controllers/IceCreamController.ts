import { Request, Response } from "express";
import { IceCreamModel } from "../model/iceCreamModel";

export const IceCreamController = {

  getById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const products = await IceCreamModel.getID(id); 
      return res.json(products);
    } catch (error) {
    res.status(500).json({ message: "Erro ao buscar sorvetes", error });
  }
  },
 
  getIceCreams: async (req: Request, res: Response) => {
      try {
        const products = await IceCreamModel.getAll(); 
        return products;
      } catch (error) {
      res.status(500).json({ message: "Erro ao buscar sorvetes", error });
    }
  },
  

  saveIceCream: async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, price, inStock } = req.body as {
        name: string;
        price: string;
        inStock: string;
      };

      if (!name || !price|| !inStock) {
        res
          .status(400)
          .json({ error: "Todos os campos devem ser preenchidos" });
        return;
      }

      const Price = parseFloat(price);
      const InStock = parseInt(inStock);  

      await IceCreamModel.save({ name, Price, InStock });

      res.redirect("/protected/admin");
      
    } catch (error) {
      res.status(500).json({
        error: "Erro ao salvar o sorvete",
        details: (error as Error).message,
      });
    }
  },

  updateIceCream: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const { name, price , inStock } = req.body;
      const Price = parseFloat(price);
      const Quantity = parseInt(inStock);
      await IceCreamModel.update(id, Quantity, name, Price);
      res.status(201).send();
      
    } catch (error) {
      res.status(500).json({
        error: "Erro ao atualizar o estoque",
        details: (error as Error).message,
      });
    }
  },

  deleteIceCream: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      if (!id) {
        res.status(400).json({ error: "Identificador invalido" });
        return;
      }

      await IceCreamModel.delete(id);

      res.status(201).json({ message: "Sorvete excluido!" });
    } catch (error) {
      res.status(500).json({
        error: "Erro ao excluir sorvete",
        details: (error as Error).message,
      });
    }
  },
};
