// Componente de Navegação - barra de menu fixa no topo da página
// Possui versão desktop (horizontal) e mobile (hamburguer)

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Biblioteca de animações
import { Menu, X } from 'lucide-react'; // Ícones do menu hamburguer

const Navigation = () => {
  // Estado que controla se o menu mobile está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);
  // Estado que detecta se o usuário rolou a página (para mudar o estilo do nav)
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect: Adiciona um "ouvinte" de scroll na página
  // Quando o usuário rola mais de 50px, ativa o fundo translúcido na barra
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Se rolou mais de 50px, isScrolled = true
    };
    window.addEventListener('scroll', handleScroll); // Adiciona o ouvinte
    return () => window.removeEventListener('scroll', handleScroll); // Remove ao desmontar o componente
  }, []);

  // Lista de itens do menu com nome e link (âncora para cada seção)
  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ];

  // Função que faz a rolagem suave até a seção clicada
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href); // Encontra o elemento pela âncora
    element?.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até ele
    setIsOpen(false); // Fecha o menu mobile após clicar
  };

  return (
    // motion.nav: Barra de navegação com animação de entrada (desliza de cima)
    <motion.nav
      initial={{ y: -100 }} // Começa 100px acima (fora da tela)
      animate={{ y: 0 }} // Anima para a posição normal
      transition={{ duration: 0.6 }} // Duração da animação: 0.6 segundos
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        // Quando o usuário rola, adiciona fundo translúcido com blur
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo "<Dev/>" com animação de fade-in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-glow"
          >
            &lt;Dev/&gt;
          </motion.div>

          {/* Navegação Desktop - escondida em telas pequenas (md:flex) */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              // Cada item do menu aparece com animação sequencial (delay baseado no index)
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }} // Cada item aparece 0.1s após o anterior
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Botão do Menu Mobile - visível apenas em telas pequenas */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)} // Alterna entre abrir/fechar o menu
          >
            {/* Mostra X quando aberto, Menu (hamburguer) quando fechado */}
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile - aparece apenas quando isOpen é true */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} // Começa invisível e sem altura
            animate={{ opacity: 1, height: 'auto' }} // Expande com animação
            exit={{ opacity: 0, height: 0 }} // Fecha com animação
            className="md:hidden pb-4"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
