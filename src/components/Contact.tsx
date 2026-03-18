// Componente Contact - Seção de contato do portfólio
// Possui formulário de envio de mensagem (via EmailJS) e links de contato

import { motion } from 'framer-motion'; // Biblioteca de animações
import { Button } from '@/components/ui/button'; // Botão estilizado
import { Input } from '@/components/ui/input'; // Campo de texto estilizado
import { Textarea } from '@/components/ui/textarea'; // Área de texto estilizada
import { Mail, Github, Linkedin } from 'lucide-react'; // Ícones de contato
import { useState } from 'react'; // Hook para gerenciar estado
import { useToast } from '@/hooks/use-toast'; // Hook para mostrar notificações
import emailjs from '@emailjs/browser'; // Biblioteca para enviar emails direto do frontend

// Configuração do EmailJS - IDs necessários para o serviço de envio de email
const EMAILJS_SERVICE_ID = 'service_zklk8tu'; // ID do serviço configurado no EmailJS
const EMAILJS_TEMPLATE_ID = 'template_aa7z5xn'; // ID do template de email
const EMAILJS_PUBLIC_KEY = 'qibpwZokFstHKsNPG'; // Chave pública do EmailJS

const Contact = () => {
  const { toast } = useToast(); // Função para exibir notificações na tela
  const [isLoading, setIsLoading] = useState(false); // Estado de carregamento do envio
  // Estado do formulário com nome, email e mensagem
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Função executada ao enviar o formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
    setIsLoading(true); // Ativa o estado de carregamento

    try {
      // Envia o email usando o EmailJS com os dados do formulário
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name, // Nome do remetente
          from_email: formData.email, // Email do remetente
          message: formData.message, // Mensagem
        },
        EMAILJS_PUBLIC_KEY
      );

      // Se deu certo, mostra notificação de sucesso
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornarei em breve!",
      });
      // Limpa o formulário após envio bem-sucedido
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      // Se deu erro, mostra notificação de erro
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato por email.",
        variant: "destructive", // Estilo vermelho de erro
      });
    } finally {
      setIsLoading(false); // Desativa o carregamento independente do resultado
    }
  };

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Título da seção com animação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-glow">Contato</h2>
          <p className="text-xl text-muted-foreground">
            Vamos trabalhar juntos? Entre em contato!
          </p>
        </motion.div>

        {/* Grid com 2 colunas: formulário à esquerda, links à direita */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Coluna esquerda - Formulário de contato */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} // Desliza da esquerda
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Campo de nome */}
              <div>
                <Input 
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-background border-border"
                  required // Campo obrigatório
                />
              </div>
              {/* Campo de email */}
              <div>
                <Input 
                  type="email"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-background border-border"
                  required
                />
              </div>
              {/* Campo de mensagem */}
              <div>
                <Textarea 
                  placeholder="Sua mensagem"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-background border-border min-h-[150px]"
                  required
                />
              </div>
              {/* Botão de envio - muda texto durante o carregamento */}
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isLoading} // Desabilita durante o envio
              >
                {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </motion.div>

          {/* Coluna direita - Links de contato e disponibilidade */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} // Desliza da direita
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-6">Conecte-se</h3>
            {/* Links de contato: Email, GitHub e LinkedIn */}
            <div className="space-y-4">
              {/* Link de email */}
              <a 
                href="mailto:gcontato.gabrielbenicio@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>contato.gabrielbenicio@gmail.com</span>
              </a>
              {/* Link do GitHub */}
              <a 
                href="https://github.com/gabrielbeniciofn123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
                <span>https://github.com/gabrielbeniciofn123</span>
              </a>
              {/* Link do LinkedIn */}
              <a 
                href="https://github.com/gabrielbeniciofn123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span>https://www.linkedin.com/in/gabriel-benicio-733928334/</span>
              </a>
            </div>

            {/* Card de disponibilidade */}
            <div className="mt-8 p-6 bg-card border border-border rounded-lg">
              <h4 className="font-bold mb-2">Disponível para:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Estágios em TI e Desenvolvimento</li>
                <li>• Projetos freelance</li>
                <li>• Desenvolvimento web</li>
                <li>• Gestão de tráfego pago</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
