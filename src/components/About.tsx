import { motion } from 'framer-motion';
import { Code2, Rocket, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Código Limpo",
      description: "Desenvolvimento com as melhores práticas e padrões de qualidade"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance",
      description: "Aplicações otimizadas para máxima velocidade e eficiência"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Inovação",
      description: "Sempre utilizando as tecnologias mais modernas do mercado"
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvedor apaixonado por criar experiências digitais únicas. 
            Especializado em desenvolvimento full stack com foco em interfaces 3D interativas.
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
