import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// ⚠️ IMPORTANTE:
// Substitua "my-3d-folio-showcase" pelo nome DO SEU repositório exato
const repoName = "PortfolioGabrielBenicio";

export default defineConfig(({ mode }) => ({
  base: `/${repoName}/`, // 👈 obrigatório para GitHub Pages

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
