import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages";
import { useAuth } from "./hooks";
import { NotesLayout } from "./layout";

export const RouterRoutes = () => {
  const { isAuthenticated } = useAuth();

  const withNotesLayout = () => {
    return isAuthenticated ? <NotesLayout /> : <Navigate to="/login" replace />;
  };

  return (
    <Routes>
      <Route path="/" element={withNotesLayout()} />
      <Route path="/login" element={<Login />} />
      <Route path="/notes/:id" element={withNotesLayout()} />

      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};
