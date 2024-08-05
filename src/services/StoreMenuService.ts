import { api } from "./api";
import { IDatabase } from "../types/MenuInfoTypes";
import { infoMenu } from "../database";

export const StoreMenuService = async (): Promise<IDatabase> => {
  // const response = await api.get<IDatabase>("/challenge/menu");
  // const storeMenu = response.data;

  return infoMenu;
};
