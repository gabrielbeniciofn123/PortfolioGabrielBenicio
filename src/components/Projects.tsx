import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Content Company",
      description: "Gestão completa de marketing digital com criação de site, campanhas pagas e gestão de redes sociais",
      tech: ["HTML", "CSS", "JavaScript", "Meta Ads", "Google Ads", "Instagram"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      details: "Criação e otimização de campanhas no Meta Ads e Google Ads, geração de leads e aumento de visibilidade"
    },
    {
      title: "Blaster & Nacif Sociedade de Advogadas",
      description: "Site institucional profissional para escritório de advocacia com páginas dinâmicas e responsivas",
      tech: ["HTML5", "CSS3", "JavaScript", "Design Responsivo"],
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop",
      details: "Páginas dinâmicas, trajetória das sócias, contato integrado e versão mobile otimizada"
    },
    {
      title: "Águas Residence",
      description: "Landing page comercial para projeto imobiliário com integração WhatsApp",
      tech: ["HTML", "CSS", "JavaScript", "WhatsApp API"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
      details: "Landing page comercial com integração WhatsApp e conteúdos imobiliários otimizados"
    },
    {
      title: "Gym Rats - Projeto Acadêmico",
      description: "Site de academia desenvolvido na faculdade com estética esportiva e layout moderno",
      tech: ["HTML5", "CSS3", "JavaScript", "Design"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop",
      details: "Projeto da PUC Minas com layout estilizado e conteúdo informativo sobre fitness"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-glow">Projetos</h2>
          <p className="text-xl text-muted-foreground">
            Alguns dos meus trabalhos mais recentes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg overflow-hidden hover-glow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 border-primary/50 hover:bg-primary/10">
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Projeto
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
