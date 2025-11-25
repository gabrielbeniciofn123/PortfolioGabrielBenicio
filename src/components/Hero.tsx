import { motion } from 'framer-motion';
import Scene3D from './Scene3D';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow">
            Gabriel Benicio
          </h1>
          <p className="text-2xl md:text-3xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
            Desenvolvedor Web & Marketing Digital
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            Estudante de Ciência da Computação | PUC Minas
          </p>
          <p className="text-md text-muted-foreground mb-8">
            📍 Belo Horizonte – MG
          </p>
          <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
            Criando experiências digitais e estratégias de marketing que geram resultados reais
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-foreground hover:bg-primary/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contato
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-8 h-8 text-primary" />
      </motion.div>
    </section>
  );
};

export default Hero;
