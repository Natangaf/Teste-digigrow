import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { tLogin } from "../types/userInfoTypes";

interface ChildrenProps {
  children: ReactNode;
}

interface IAuthContext {
  isAuthenticated: () => boolean;
  login: (data: tLogin) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: ChildrenProps) => {
  const navigate = useNavigate();

  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      navigate("/login");
      return false;
    }
  };

  const login = async (data: tLogin) => {
    try {
      const response = await api.post("/login", data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
      throw new Error(
        "Failed to log in. Please check your credentials and try again."
      );
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
