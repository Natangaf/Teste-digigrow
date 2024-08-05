import { AxiosResponse } from "axios";
import { api } from "./api";
import { tCategory } from "../types/categoryInfoTypes";

export const categoryService = {
  get: async () => {
    try {
      const response: AxiosResponse<tCategory[]> = await api.get(
        `/category/name`
      );
      return response.data;
    } catch (error) {
      throw new Error(
        "Falha ao fazer login. Verifique suas credenciais e tente novamente."
      );
    }
  },
};
