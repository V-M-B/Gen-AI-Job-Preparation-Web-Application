import { useContext } from "react";
import { AuthContext } from "./auth.context.jsx";
import { login, register, logout, getMe } from "../services/auth.service.js";

export const useAuth = () => {
  const { user, setUser, loading, setLoading } = useContext(AuthContext);

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    const data = await login({ email, password });
    setUser(data.user);
    setLoading(false);
    return data;
  };

  const handleRegister = async ({ name, email, password }) => {
    setLoading(true);
    const data = await register({ name, email, password });
    setUser(data.user);
    setLoading(false);
    return data;
  };

  const handleLogout = async () => {
    setLoading(true);
    await logout();
    setUser(null);
    setLoading(false);
  };

  return {
    user,
    setUser,
    loading,
    setLoading,
    handleLogin,
    handleRegister,
    handleLogout,
  };
};
