import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Contato', href: '#contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const desktop = window.matchMedia('(min-width: 768px)');
    const handleResize = () => { if (desktop.matches) setIsOpen(false); };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    desktop.addEventListener('change', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      desktop.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <motion.nav
      aria-label="Navegação principal"
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isOpen) {
          setIsOpen(false);
          toggleRef.current?.focus();
        }
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-background/95 backdrop-blur-lg border-b border-border' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" aria-label="Gabriel Benicio — início" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-glow">&lt;Dev/&gt;</a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-foreground hover:text-primary transition-colors">{item.name}</a>
            ))}
          </div>
          <button
            ref={toggleRef} type="button"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen} aria-controls="mobile-menu"
            className="md:hidden text-foreground p-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <div id="mobile-menu" hidden={!isOpen} className="md:hidden pb-4">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors">{item.name}</a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
