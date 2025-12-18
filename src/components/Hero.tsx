import { ArrowRight, Search, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm mb-8 animate-fade-up">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Cresça no Google com estratégias de SEO que geram tráfego, leads e vendas
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Consultoria de SEO focada em{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, hsl(175 70% 55%) 0%, hsl(35 100% 55%) 100%)' }}>
                crescimento orgânico
              </span>
            </span>{" "}
            e resultados reais
          </h1>

          {/* Description after H1 */}
          <p className="text-base md:text-lg text-primary-foreground/90 mb-10 max-w-3xl mx-auto animate-fade-up font-medium" style={{ animationDelay: "0.15s" }}>
            A SEO Brain é uma consultoria de SEO especialista em posicionar empresas no topo do Google. Conquistando mais visibilidade, tráfego qualificado e conversões reais aos seus clientes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="accent" size="xl">
              Solicitar Análise Gratuita
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Ver Cases de Sucesso
            </Button>
          </div>

          {/* Feature cards */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: Search, label: "Análise Técnica", desc: "Auditoria completa do seu site" },
              { icon: BarChart3, label: "Estratégia de Conteúdo", desc: "Conteúdo que ranqueia" },
              { icon: Zap, label: "Link Building", desc: "Autoridade de domínio" },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 hover:border-primary-foreground/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="font-semibold text-primary-foreground mb-1">{feature.label}</p>
                <p className="text-sm text-primary-foreground/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
