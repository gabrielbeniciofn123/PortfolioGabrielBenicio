import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_zklk8tu';
const EMAILJS_TEMPLATE_ID = 'template_aa7z5xn';
const EMAILJS_PUBLIC_KEY = 'qibpwZokFstHKsNPG';

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornarei em breve!",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato por email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
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

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-background border-border"
                  required
                />
              </div>
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
              <div>
                <Textarea 
                  placeholder="Sua mensagem"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-background border-border min-h-[150px]"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-6">Conecte-se</h3>
            <div className="space-y-4">
              <a 
                href="mailto:gcontato.gabrielbenicio@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>contato.gabrielbenicio@gmail.com</span>
              </a>
              <a 
                href="https://github.com/gabrielbeniciofn123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
                <span>https://github.com/gabrielbeniciofn123</span>
              </a>
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
