// Componente Footer - Rodapé do site
// Exibe créditos do desenvolvedor e copyright

import { Heart } from 'lucide-react'; // Ícone de coração

const Footer = () => {
  return (
    // Rodapé com borda superior para separação visual
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        {/* Linha de crédito com ícone de coração */}
        <p className="flex items-center justify-center gap-2">
          Desenvolvido por Gabriel Benicio com <Heart className="w-4 h-4 text-primary fill-primary" /> usando React & Three.js
        </p>
        {/* Copyright */}
        <p className="mt-2">© 2025 Gabriel Benicio - Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
