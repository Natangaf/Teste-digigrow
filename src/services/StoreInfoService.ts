import { infoStore } from "../database";
import { Restaurant } from "../types/StoreInfoTypes";
import { api } from "./api";

export const StoreInfoService = async (): Promise<Restaurant> => {
  // const response = await api.get<Restaurant>("/challenge/venue/9");
  // const storeInfo = response.data;

  // console.log(storeInfo);

  return infoStore;
};
