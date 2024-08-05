import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().nonempty("O e-mail é obrigatório."),
  password: z.string().nonempty("O e-mail é obrigatório."),
});
