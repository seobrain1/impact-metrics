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
        <title>Agência Especializada em SEO | SEO Brain - Especialistas em Posicionamento Google</title>
        <meta name="description" content="Somos uma agência especializada em SEO com foco em resultados reais. Estratégias personalizadas para posicionar sua empresa no topo do Google e gerar vendas." />
        <link rel="canonical" href="https://seobrain.com.br/agencia-especializada-em-seo/" />
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
