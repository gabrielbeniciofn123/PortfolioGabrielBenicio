import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// ⚠️ O nome deve ser EXATAMENTE o nome do seu repositório
const repoName = "PortfolioGabrielBenicio";

export default defineConfig(({ mode }) => ({
  base: `/${repoName}/`, // 👈 OBRIGATÓRIO para GitHub Pages funcionar

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
