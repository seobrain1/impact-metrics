import { Search, FileText, Link2, BarChart3, Settings, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Técnico",
    description: "Otimização completa da estrutura do seu site para máxima indexação e velocidade de carregamento.",
    features: ["Auditoria técnica", "Core Web Vitals", "Schema Markup", "Sitemap & Robots"],
  },
  {
    icon: FileText,
    title: "Conteúdo SEO",
    description: "Criação de conteúdo estratégico que atrai e converte seu público-alvo ideal.",
    features: ["Pesquisa de palavras-chave", "Produção de artigos", "Otimização on-page", "Blog estratégico"],
  },
  {
    icon: Link2,
    title: "Link Building",
    description: "Construção de autoridade através de backlinks de qualidade e parcerias estratégicas.",
    features: ["Outreach personalizado", "Guest posts", "Digital PR", "Análise de perfil de links"],
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    description: "Dashboards personalizados com métricas que realmente importam para o seu negócio.",
    features: ["Google Analytics 4", "Search Console", "Relatórios mensais", "KPIs personalizados"],
  },
  {
    icon: Settings,
    title: "SEO Local",
    description: "Domine as buscas locais e atraia clientes da sua região para seu negócio físico.",
    features: ["Google Meu Negócio", "Citações locais", "Reviews management", "Maps optimization"],
  },
  {
    icon: TrendingUp,
    title: "Consultoria SEO",
    description: "Consultoria especializada para equipes internas que desejam evoluir suas estratégias.",
    features: ["Treinamentos", "Análise competitiva", "Roadmap estratégico", "Mentoria contínua"],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Serviços de Otimização{" "}
            <span className="text-gradient">para Buscadores</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Oferecemos um ecossistema completo de serviços de consultoria SEO para posicionar sua marca no topo do Google
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 mb-5 rounded-xl gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
