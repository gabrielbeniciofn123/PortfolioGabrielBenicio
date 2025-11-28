import { motion } from 'framer-motion';
import { Code2, TrendingUp, Users } from 'lucide-react';
import gabrielPhoto from '@/assets/gabriel-photo.png';

const About = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Desenvolvimento Web",
      description: "Criação de sites modernos e responsivos com HTML, CSS e JavaScript"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-glow">Sobre Mim</h2>
          
          {/* Photo and Bio Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
            {/* Photo with neon effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex-shrink-0"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Neon glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary opacity-70 blur-xl animate-pulse" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-primary to-secondary p-1">
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
            
            {/* Bio text */}
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

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-8 hover-glow"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
