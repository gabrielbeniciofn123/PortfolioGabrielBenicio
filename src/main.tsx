// Arquivo de entrada principal do React
// É aqui que a aplicação React é montada na página HTML

import { createRoot } from "react-dom/client"; // Importa a função para criar a raiz do React
import App from "./App.tsx"; // Importa o componente principal da aplicação
import "./index.css"; // Importa os estilos globais (Tailwind CSS + design system)

// Encontra o elemento HTML com id="root" e renderiza o componente App dentro dele
createRoot(document.getElementById("root")!).render(<App />);
