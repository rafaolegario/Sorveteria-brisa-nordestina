import { Request, Response } from "express";
import { IceCreamModel } from "../model/iceCreamModel";

export const IceCreamController = {
  getIceCreams: async (req: Request, res: Response): Promise<void> => {
    try {
      const all = await IceCreamModel.getAll();

      if (all.length === 0) {
        res.status(404).json({ message: "Not Found!" });
        return;
      }
      res.status(200).json(all);
    } catch (error) {
      res.status(500).json({ messge: "Erro interno do servidor",error });
    }
  },

  saveIceCream: async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, price, inStock } = req.body as {
        name: string;
        price: number;
        inStock: number;
      };

      if (!name || !price|| !inStock) {
        res
          .status(400)
          .json({ error: "Todos os campos devem ser preenchidos" });
        return;
      }

      await IceCreamModel.save({ name,price, inStock });

      res.status(201).json({ message: "Sorvete salvo com sucesso!" });
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
      const { name, price , quantity } = req.body;

      if (!id) {
        res.status(404).json("Not Found!");
      }
      if (!quantity) {
        res.status(400).json("Você deve passar uma quantidade!");
      }

      await IceCreamModel.update(id, quantity, name, price);
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
