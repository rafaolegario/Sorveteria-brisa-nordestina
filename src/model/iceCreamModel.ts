import prismaClient from "../prisma";

interface iceCreamProps {
  name: string;
  description: string;
  inStock: string;
}

export const IceCreamModel = {
  getAll: async () => {
    const all = await prismaClient.iceCreams.findMany();
    return all;
  },

  save: async ({ name, description, inStock }: iceCreamProps) => {
    const InStock = parseInt(inStock);

    const iceCream = await prismaClient.iceCreams.create({
      data: {
        name,
        description,
        inStock: InStock,
      },
    });
    return iceCream;
  },

  upadate: async (id: string, quantity: number) => {
    const upadated = await prismaClient.iceCreams.update({
      where: { id: id },
      data: {
        inStock: quantity,
      },
    });
    return upadated;
  },

  delete: async (id: string) => {
    const deleted = await prismaClient.iceCreams.delete({
      where: { id: id },
    });
    return deleted;
  },
};
