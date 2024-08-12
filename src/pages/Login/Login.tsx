import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { tLogin } from "../../types/userInfoTypes";
import { LoginSchema } from "../../schema/UserSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputValidator } from "../../components/inputs";
import { useAuth } from "../../context/AuthContext";
import ContainerComponent from "../../components/ContainerComponent/ContainerComponent";
import { Buttonlogin, ButtonRegister, StyledLogin } from "./_login";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tLogin>({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema),
  });

  const submit: SubmitHandler<tLogin> = async (data) => {
    try {
      await login({ email: data.email, password: data.password });
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(
        "Falha no login. Verifique suas credenciais e tente novamente."
      );
    }
  };

  return (
    <ContainerComponent gap={5}>
      <StyledLogin>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(submit)}>
          <InputValidator
            id="email"
            label="E-mail:"
            placeholder="Digite e-mail."
            error={errors.email?.message}
            {...register("email", { required: "Digite e-mail." })}
          />

          <InputValidator
            id="password"
            label="Senha:"
            type="password"
            placeholder="Digite sua senha."
            error={errors.password?.message}
            {...register("password", { required: "Digite sua Senha." })}
          />
          <Buttonlogin
            className="btn-login"
            type="submit"
            disabled={Object.keys(errors).length > 0}
          >
            Entrar
          </Buttonlogin>
        </form>
        <div className="register-box">
          <p className="not-acount">Ainda não possui uma conta?</p>
          {/* <ButtonRegister
            className="register-btn"
            onClick={() => navigate("/register")}
          >
            Cadastrar
          </ButtonRegister> */}
        </div>
      </StyledLogin>
    </ContainerComponent>
  );
};

export default Login;
