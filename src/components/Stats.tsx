import { Users, TrendingUp, Award, Target } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "150+",
    label: "Clientes Atendidos",
    description: "Empresas que confiaram na SEO Brain",
  },
  {
    icon: TrendingUp,
    value: "300%",
    label: "Aumento Médio de Tráfego",
    description: "Crescimento orgânico sustentável",
  },
  {
    icon: Award,
    value: "1.500+",
    label: "Posições Ganhas no Google",
    description: "Palavras-chave ranqueadas no top 10",
  },
  {
    icon: Target,
    value: "98%",
    label: "Taxa de Retenção",
    description: "Clientes que renovam conosco",
  },
];

const Stats = () => {
  return (
    <section id="resultados" className="py-24 gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold mb-4 border border-primary-foreground/20">
            Nossos Resultados
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Resultados que Falam por Si
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Números reais de empresas que transformaram sua presença digital com a SEO Brain
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 hover:border-primary-foreground/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-5 bg-primary-foreground/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-lg font-semibold text-primary-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-primary-foreground/60">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
