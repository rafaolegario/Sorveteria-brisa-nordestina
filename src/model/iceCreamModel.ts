import { get } from "http";
import prismaClient from "../prisma";

interface iceCreamProps {
  name: string;
  Price: number;
  InStock: number
}

export const IceCreamModel = {
  getAll: async () => {
    const all = await prismaClient.iceCreams.findMany();
    return all;
  },

  getID: async (id: string) => {
    const iceCream = await prismaClient.iceCreams.findUnique({
      where: { id: id },
    });
    return iceCream;
  },


  save: async ({ name, Price, InStock }: iceCreamProps) => {

    const iceCream = await prismaClient.iceCreams.create({
      data: {
        name,
        price: Price,
        inStock: InStock,
      },
    });
    return iceCream;
  },

  update: async (id: string, quantity: number, newName : string, price: number) => {
    const updated = await prismaClient.iceCreams.update({
      where: { id: id },
      data: {
        name: newName,
        price: price,
        inStock: quantity
      },
    });
    return updated;
  },

  delete: async (id: string) => {
    const deleted = await prismaClient.iceCreams.delete({
      where: { id: id },
    });
    return deleted;
  },
};
