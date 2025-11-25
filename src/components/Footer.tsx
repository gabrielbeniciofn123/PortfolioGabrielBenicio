import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p className="flex items-center justify-center gap-2">
          Desenvolvido com <Heart className="w-4 h-4 text-primary fill-primary" /> usando React & Three.js
        </p>
        <p className="mt-2">© 2025 - Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
