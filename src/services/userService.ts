import { tLogin, tUserReq } from "../types/userInfoTypes";
import { api } from "./api";

export const userService = {
  post: async (data: tUserReq) => {
    try {
      const response = await api.post(`/users/`, data);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      throw new Error(
        "Falha ao criar usuário. Por favor, tente novamente mais tarde."
      );
    }
  },

  login: async (data: tLogin) => {
    try {
      const response = await api.post(`/users/login`, data);
      return response.data;
    } catch (error) {
      throw new Error(
        "Falha ao fazer login. Verifique suas credenciais e tente novamente."
      );
    }
  },
};
