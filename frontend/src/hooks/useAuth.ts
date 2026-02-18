import { useContext } from "react";
import { AuthContext } from "../context";

export const useAuth = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext) || {
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
  };
  return { isAuthenticated, login, logout };
};
