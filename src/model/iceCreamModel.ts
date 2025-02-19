
import prismaClient from "../prisma";

interface iceCreamProps {
  name: string;
  Price: number;
  InStock: number;
  propertie: string;
  size: string;
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

  save: async ({ name, Price, InStock, propertie, size }: iceCreamProps) => {
    const iceCream = await prismaClient.iceCreams.create({
      data: {
        name,
        price: Price,
        inStock: InStock,
        propertie,
        size
      },
    });
    return iceCream;
  },

  update: async (
    id: string,
    quantity: number,
    newName: string,
    price: number
  ) => {
    const updated = await prismaClient.iceCreams.update({
      where: { id: id },
      data: {
        name: newName,
        price: price,
        inStock: quantity,
      },
    });
    return updated;
  },

  updateStock: async (id: string, quantity: number) => {
    
    const updated = await prismaClient.iceCreams.update({
      where: { id: id },
      data: {
        inStock: quantity,
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
