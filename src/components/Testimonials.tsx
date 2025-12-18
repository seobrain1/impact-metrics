import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "CEO, TechStart Brasil",
    content: "Em 6 meses, nosso tráfego orgânico cresceu 420%. A SEO Brain entende profundamente o algoritmo do Google e entrega resultados consistentes.",
    rating: 5,
  },
  {
    name: "Carolina Santos",
    role: "Diretora de Marketing, E-commerce Plus",
    content: "A equipe é extremamente técnica e estratégica. Nossas vendas vindas de busca orgânica triplicaram desde que começamos a parceria.",
    rating: 5,
  },
  {
    name: "Fernando Lima",
    role: "Fundador, Clínica Saúde Total",
    content: "SEO local era um mistério para nós. Agora dominamos as buscas na nossa região e os agendamentos aumentaram 180%.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O Que Nossos Clientes{" "}
            <span className="text-gradient">Dizem</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Histórias reais de empresas que transformaram sua presença digital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-card-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
