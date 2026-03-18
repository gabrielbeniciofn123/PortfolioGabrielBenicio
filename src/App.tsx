// Componente principal da aplicação - configura todos os provedores e rotas

import { Toaster } from "@/components/ui/toaster"; // Componente de notificações (toast) estilizado
import { Toaster as Sonner } from "@/components/ui/sonner"; // Segundo sistema de notificações (sonner)
import { TooltipProvider } from "@/components/ui/tooltip"; // Provedor de tooltips (dicas ao passar o mouse)
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Gerenciamento de requisições/cache
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Sistema de rotas/navegação
import Index from "./pages/Index"; // Página principal do portfólio
import NotFound from "./pages/NotFound"; // Página 404 (não encontrado)

// Cria uma instância do QueryClient para gerenciar cache de dados
const queryClient = new QueryClient();

const App = () => (
  // QueryClientProvider: Disponibiliza o cache de dados para toda a aplicação
  <QueryClientProvider client={queryClient}>
    {/* TooltipProvider: Permite usar tooltips em qualquer lugar da aplicação */}
    <TooltipProvider>
      {/* Componentes de notificação - ficam disponíveis globalmente */}
      <Toaster />
      <Sonner />
      {/* BrowserRouter: Gerencia as rotas da aplicação */}
      {/* basename: Em produção usa "/PortfolioGabrielBenicio" para funcionar no GitHub Pages */}
      <BrowserRouter basename={import.meta.env.MODE === "production" ? "/PortfolioGabrielBenicio" : "/"}>
        <Routes>
          {/* Rota principal "/" - renderiza a página do portfólio */}
          <Route path="/" element={<Index />} />
          {/* Rota coringa "*" - qualquer URL não encontrada mostra a página 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
