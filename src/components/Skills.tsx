// Componente Skills - Seção de habilidades técnicas
// Exibe as tecnologias organizadas em 3 categorias: Frontend, Backend e Marketing

import { motion } from 'framer-motion'; // Biblioteca de animações

const Skills = () => {
  // Array com as categorias de habilidades e suas respectivas tecnologias
  const skillCategories = [
    {
      title: "Linguagens",
      skills: ["JavaScript", "TypeScript", "Java", "C", "C++", "SQL", "HTML5", "CSS3"]
    },
    {
      title: "Frameworks & Tecnologias",
      skills: ["React", "Node.js", "Next.js"]
    },
    {
      title: "Ferramentas & Plataformas",
      skills: ["Git & GitHub", "APIs REST", "Microsoft Azure", "Banco de Dados SQL", "Integração com IA"]
    }
  ];

  return (
    // Seção com fundo levemente diferente (bg-card/30) para contraste visual
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Título da seção com animação de fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} // Anima apenas uma vez
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-glow">Habilidades</h2>
          <p className="text-xl text-muted-foreground">
            Tecnologias que domino e utilizo no dia a dia
          </p>
        </motion.div>

        {/* Grid centralizado com 3 colunas (em desktop) para as categorias */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            // Card de cada categoria com animação sequencial
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }} // Delay progressivo
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-8"
            >
              {/* Título da categoria com cor primária */}
              <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
              {/* Lista de habilidades dentro da categoria */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  // Cada habilidade desliza da esquerda com delay progressivo
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }} // Começa invisível e 20px à esquerda
                    whileInView={{ opacity: 1, x: 0 }} // Anima para posição normal
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                    // Estilo: fundo sutil com borda que muda ao passar o mouse
                    className="bg-muted/50 border border-border/50 rounded-md px-4 py-2 hover:border-primary/50 transition-all"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
