import { motion } from 'framer-motion';
import { Code2, TrendingUp, Users } from 'lucide-react';

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
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-glow">Sobre Mim</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sou estudante de Ciência da Computação na <strong className="text-primary">PUC Minas</strong> e desenvolvedor em formação, 
            com experiência prática em <strong className="text-primary">tráfego pago</strong>, <strong className="text-primary">criação de sites</strong>, 
            <strong className="text-primary"> marketing digital</strong>, <strong className="text-primary">desenvolvimento web</strong>, 
            <strong className="text-primary">atendimento ao público</strong> e <strong className="text-primary">suporte técnico</strong>.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Trabalho com <strong className="text-foreground">HTML, CSS, Java, C e JavaScript</strong>. 
            Tenho experiência com Instagram, Meta Ads, Google Ads e criação de páginas profissionais para empresas.
          </p>
          <p className="text-lg text-primary/90 max-w-2xl mx-auto mt-6 font-semibold">
            Perfil: Proativo, dedicado, responsável, comprometido e apaixonado por tecnologia. 
            Objetivo: Conquistar oportunidades em TI / Desenvolvimento, estágio e projetos freelance.
          </p>
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
