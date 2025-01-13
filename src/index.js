import React from "react";
import { createRoot } from "react-dom/client"; // Importa createRoot do react-dom/client
import "./index.css"; // Estilos básicos
import App from "./App";

// Obtém o elemento root do DOM
const container = document.getElementById("root");

// Cria a instância de root
const root = createRoot(container);

// Renderiza o aplicativo dentro do React.StrictMode
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
