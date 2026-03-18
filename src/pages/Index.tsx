// Página principal do portfólio
// Organiza e renderiza todas as seções do site na ordem correta

import Navigation from '@/components/Navigation'; // Barra de navegação fixa no topo
import Hero from '@/components/Hero'; // Seção inicial com nome e chamada para ação
import About from '@/components/About'; // Seção "Sobre Mim" com foto e bio
import Skills from '@/components/Skills'; // Seção de habilidades técnicas
import Projects from '@/components/Projects'; // Seção de projetos realizados
import Contact from '@/components/Contact'; // Seção de contato com formulário
import Footer from '@/components/Footer'; // Rodapé do site

const Index = () => {
  return (
    // Container principal que ocupa no mínimo a altura total da tela
    <main className="min-h-screen">
      <Navigation /> {/* Navegação fixa no topo */}
      <Hero /> {/* Primeira seção - apresentação */}
      <About /> {/* Segunda seção - sobre mim */}
      <Skills /> {/* Terceira seção - habilidades */}
      <Projects /> {/* Quarta seção - projetos */}
      <Contact /> {/* Quinta seção - contato */}
      <Footer /> {/* Rodapé */}
    </main>
  );
};

export default Index;
