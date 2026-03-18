// Componente NavLink - Wrapper customizado do NavLink do React Router
// Adiciona suporte a classes CSS condicionais para estados ativo e pendente

import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom"; // NavLink original do React Router
import { forwardRef } from "react"; // Permite repassar refs para componentes filhos
import { cn } from "@/lib/utils"; // Função utilitária para combinar classes CSS

// Interface que define as props aceitas pelo componente
// Omit<NavLinkProps, "className"> remove a prop className original e adiciona versões customizadas
interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string; // Classe CSS padrão
  activeClassName?: string; // Classe aplicada quando o link está ativo (URL atual)
  pendingClassName?: string; // Classe aplicada enquanto a navegação está em andamento
}

// forwardRef: Permite que componentes pais acessem o elemento <a> interno via ref
const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        // Função que combina as classes baseado no estado do link (ativo/pendente)
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props} // Repassa todas as outras props
      />
    );
  },
);

// Define o nome do componente para facilitar debugging no React DevTools
NavLink.displayName = "NavLink";

export { NavLink };
