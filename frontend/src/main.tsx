import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ModalsProvider } from "@mantine/modals";
import { MantineProvider } from "@mantine/core";
import { App } from "./App.tsx";
import { AuthProvider, NotesProvider } from "./context";
import "@mantine/core/styles.css";

createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <ModalsProvider>
      <AuthProvider>
        <NotesProvider>
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <App />
          </BrowserRouter>
        </NotesProvider>
      </AuthProvider>
    </ModalsProvider>
  </MantineProvider>,
);
