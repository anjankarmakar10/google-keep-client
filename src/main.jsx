import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import routes from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
