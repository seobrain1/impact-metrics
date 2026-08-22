import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroAgencia from "@/components/HeroAgencia";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const AgenciaEspecializadaSEO = () => {
  return (
    <>
      <Helmet>
        <title>Agência Especializada em SEO | SEO Brain</title>
        <meta name="description" content="Estratégias de SEO personalizadas para colocar sua empresa no topo do Google, aumentar o tráfego orgânico e gerar mais leads e vendas." />
        <link rel="canonical" href="https://stats-bloom-sparklee.lovable.app/agencia-especializada-em-seo" />
        <meta property="og:url" content="https://stats-bloom-sparklee.lovable.app/agencia-especializada-em-seo" />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroAgencia />
          <Services />
          <Stats />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
        <ExitIntentPopup />
      </div>
    </>
  );
};

export default AgenciaEspecializadaSEO;
