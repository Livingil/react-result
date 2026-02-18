import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleLogin = () => {
    login();
    navigate("/notes/1", { replace: true });
  };
  return (
    <>
      <h1>Login Page</h1>
      <Button onClick={handleLogin}>Login</Button>
    </>
  );
};
