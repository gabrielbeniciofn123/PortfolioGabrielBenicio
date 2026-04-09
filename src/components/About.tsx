// Componente About - Seção "Sobre Mim" do portfólio
// Exibe foto com efeito neon, biografia e cards de áreas de atuação

import { motion } from 'framer-motion'; // Biblioteca de animações
import { Code2, TrendingUp, Users } from 'lucide-react'; // Ícones das áreas de atuação
import gabrielPhoto from '@/assets/gabriel-photo.png'; // Foto de perfil importada como módulo

const About = () => {
  // Array com as 3 áreas de atuação - cada uma com ícone, título e descrição
  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Desenvolvimento Web",
      description: "Criação de sites modernos e responsivos com HTML, CSS e JavaScript, React, Typscriptm, MySQL "
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Marketing Digital",
      description: "Gestão de campanhas no Meta Ads e Google Ads, otimização de tráfego pago e Instagram"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Suporte Técnico & Atendimento",
      description: "Experiência em infraestrutura de TI, suporte técnico e atendimento ao público"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção com animação de fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Começa invisível e 20px abaixo
          whileInView={{ opacity: 1, y: 0 }} // Anima quando entra na tela
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} // Anima apenas uma vez (não repete ao rolar de volta)
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-glow">Sobre Mim</h2>
          
          {/* Seção de foto + biografia lado a lado (em desktop) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
            {/* Foto com efeito neon circular */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} // Começa menor e invisível
              whileInView={{ opacity: 1, scale: 1 }} // Cresce para tamanho normal
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex-shrink-0"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Efeito de brilho neon atrás da foto - gradiente com blur e pulsação */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary opacity-70 blur-xl animate-pulse" />
                {/* Borda gradiente da foto */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-primary to-secondary p-1">
                  {/* Container da imagem com recorte circular */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <img
                      src={gabrielPhoto}
                      alt="Gabriel Benicio - Desenvolvedor Web"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Texto da biografia */}
            <div className="text-left max-w-2xl">
              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                Sou estudante de Ciência da Computação na <strong className="text-primary">PUC Minas</strong> e desenvolvedor em formação, 
                com experiência prática em <strong className="text-primary">tráfego pago</strong>, <strong className="text-primary">criação de sites</strong>, 
                <strong className="text-primary"> marketing digital</strong>, <strong className="text-primary">desenvolvimento web</strong>, 
                <strong className="text-primary">atendimento ao público</strong> e <strong className="text-primary">suporte técnico</strong>.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Trabalho com <strong className="text-foreground">HTML, CSS, Java, C e JavaScript</strong>. 
                Tenho experiência com Instagram, Meta Ads, Google Ads e criação de páginas profissionais para empresas.
              </p>
              <p className="text-lg text-primary/90 font-semibold">
                Perfil: Proativo, dedicado, responsável, comprometido e apaixonado por tecnologia. 
                Objetivo: Conquistar oportunidades em TI / Desenvolvimento, estágio e projetos freelance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grid com 3 cards de áreas de atuação */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            // Cada card aparece com delay sequencial (0.2s entre cada)
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-8 hover-glow"
            >
              {/* Ícone da área */}
              <div className="text-primary mb-4">{feature.icon}</div>
              {/* Título da área */}
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              {/* Descrição da área */}
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
