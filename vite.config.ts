// Configuração do Vite - ferramenta de build e servidor de desenvolvimento
// Define plugins, aliases e configurações para desenvolvimento e produção

import { defineConfig } from "vite"; // Função para definir a configuração do Vite
import react from "@vitejs/plugin-react-swc"; // Plugin do React usando SWC (compilador rápido)
import path from "path"; // Módulo Node.js para manipular caminhos de arquivos
import { componentTagger } from "lovable-tagger"; // Plugin do Lovable para identificar componentes

// ⚠️ O nome deve ser EXATAMENTE o nome do seu repositório no GitHub
const repoName = "PortfolioGabrielBenicio";

export default defineConfig(({ mode }) => ({
  // base: Define o caminho base da aplicação
  // Em produção (GitHub Pages): "/PortfolioGabrielBenicio/" para que os assets sejam encontrados
  // Em desenvolvimento: "/" (raiz normal)
  base: mode === "production" ? `/${repoName}/` : "/",

  // Configuração do servidor de desenvolvimento
  server: {
    host: "::", // Aceita conexões de qualquer endereço (IPv4 e IPv6)
    port: 8080, // Porta onde o servidor roda
  },

  // Plugins utilizados
  plugins: [
    react(), // Plugin do React - habilita JSX, Fast Refresh, etc
    mode === "development" && componentTagger() // Tagger do Lovable - apenas em desenvolvimento
  ].filter(Boolean), // Remove valores falsy (quando componentTagger não é adicionado em produção)

  // Configuração de aliases para imports
  resolve: {
    alias: {
      // "@" aponta para a pasta "src" - permite usar @/components/ ao invés de ../../components/
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
