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
              Somos uma agência especializada em SEO com foco em resultados mensuráveis. Ajudamos empresas a conquistar as primeiras posições do Google de forma sustentável.
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

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              {["SEO Técnico", "Conteúdo SEO", "Link Building", "SEO Local", "Consultoria"].map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 SEO Brain. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
