import { motion } from 'framer-motion';
import { Code2, Rocket, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Desenvolvimento Web",
      description: "Criação de sites profissionais com HTML, CSS, JavaScript e foco em responsividade"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Marketing Digital",
      description: "Gestão de tráfego pago, Meta Ads, Google Ads e crescimento no Instagram"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Atendimento & Suporte",
      description: "Experiência em atendimento ao público e suporte em TI com foco em soluções"
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
            Sou estudante de Ciência da Computação e desenvolvedor em formação, com experiência prática 
            em <strong className="text-primary">tráfego pago</strong>, <strong className="text-primary">criação de sites</strong>, 
            <strong className="text-primary"> marketing digital</strong> e <strong className="text-primary">desenvolvimento web</strong>.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Trabalho com <strong className="text-foreground">HTML, CSS, JavaScript, Java e C</strong>. 
            Tenho experiência com Instagram, Meta Ads, Google Ads, criação de páginas profissionais 
            para empresas, suporte em TI e atendimento ao público.
          </p>
          <p className="text-lg text-primary/90 max-w-2xl mx-auto mt-6 font-semibold">
            Proativo, dedicado, responsável e apaixonado por tecnologia. Busco oportunidades em 
            desenvolvimento, estágios e projetos freelance.
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
