import { Brain, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 gradient-hero text-primary-foreground">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">SEO Brain</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Somos uma consultoria seo com foco em resultados mensuráveis. Ajudamos empresas a conquistar as primeiras posições do Google de forma sustentável.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {["Serviços", "Resultados", "Depoimentos", "Blog", "Contato"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-primary-foreground/70 text-sm">
              <li>
                <a href="https://wa.me/5511961412794" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  (11) 96141-2794
                </a>
              </li>
              <li>Avenida Paulista, 1636, Sala 1105, Bela Vista</li>
              <li>CEP: 01310-200</li>
              <li>São Paulo - SP</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col items-center gap-4">
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2026 SEO Brain. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="https://seobrain.com.br/politica-de-privacidade/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
          <p className="text-primary-foreground/40 text-xs text-center">
            DXC Empreendimentos Digitais LTDA - CNPJ: 57.887.403/0001-11
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
