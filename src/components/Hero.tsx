// Componente Hero - Seção principal/inicial do portfólio
// Exibe o nome, título profissional, localização e botões de ação
// Possui uma cena 3D animada como fundo

import { motion } from 'framer-motion'; // Biblioteca de animações
import Scene3D from './Scene3D'; // Componente da esfera 3D animada
import { Button } from '@/components/ui/button'; // Componente de botão estilizado
import { ArrowDown } from 'lucide-react'; // Ícone de seta para baixo

const Hero = () => {
  return (
    // Seção com altura mínima da tela inteira, centralizada vertical e horizontalmente
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fundo 3D - renderiza a esfera animada atrás de tudo (z-0) */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>
      
      {/* Camada de gradiente sobre o 3D - escurece a parte inferior para legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
      
      {/* Conteúdo principal - fica acima do fundo 3D e do gradiente (z-20) */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        {/* Animação de fade-in + slide para cima */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} // Começa invisível e 30px abaixo
          animate={{ opacity: 1, y: 0 }} // Anima para visível na posição correta
          transition={{ duration: 0.8, delay: 0.2 }} // 0.8s de duração, começa após 0.2s
        >
          {/* Nome com efeito de brilho (text-glow) */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow">
            Gabriel Benicio
          </h1>
          {/* Título profissional com gradiente de cor no texto */}
          <p className="text-2xl md:text-3xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
            Desenvolvedor Web
          </p>
          {/* Informação acadêmica */}
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            Estudante de Ciência da Computação | PUC Minas
          </p>
          {/* Localização */}
          <p className="text-md text-muted-foreground mb-8">
            📍 Belo Horizonte – MG
          </p>
          {/* Frase de impacto / descrição */}
          <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
            Criando experiências digitais e estratégias de marketing que geram resultados reais
          </p>
          {/* Botões de ação */}
          <div className="flex gap-4 justify-center">
            {/* Botão "Ver Projetos" - rola até a seção de projetos */}
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
            </Button>
            {/* Botão "Contato" - rola até a seção de contato */}
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
      
      {/* Indicador de scroll - seta animada que sobe e desce continuamente */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }} // Animação: sobe e desce 10px
        transition={{ duration: 2, repeat: Infinity }} // Repete infinitamente a cada 2s
      >
        <ArrowDown className="w-8 h-8 text-primary" />
      </motion.div>
    </section>
  );
};

export default Hero;
