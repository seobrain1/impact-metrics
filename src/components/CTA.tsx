import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contato" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Vamos Conversar
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Contrate Seu{" "}
              <span className="text-gradient">Especialista em SEO</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Solicite uma análise gratuita do seu site e descubra como nossa Consultoria em SEO pode aumentar seu tráfego orgânico
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Contact Form */}
            <div className="p-8 rounded-2xl bg-card border border-border shadow-lg">
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    URL do seu site
                  </label>
                  <input
                    type="url"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    placeholder="https://seusite.com.br"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground resize-none"
                    placeholder="Conte-nos sobre seu projeto..."
                  />
                </div>
                <Button variant="accent" size="lg" className="w-full">
                  Solicitar Análise Gratuita
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Entre em contato
                </h3>
                <p className="text-muted-foreground">
                  Estamos prontos para ajudar sua empresa a crescer organicamente. Entre em contato e receba uma análise personalizada.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <p className="font-semibold text-foreground">contato@seobrain.com.br</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <p className="font-semibold text-foreground">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Localização</p>
                    <p className="font-semibold text-foreground">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
