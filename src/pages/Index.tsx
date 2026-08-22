import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SEO Brain — Consultoria de SEO e Posicionamento no Google</title>
        <meta name="description" content="A SEO Brain é uma consultoria de SEO especializada em estratégias para aumentar o tráfego orgânico, gerar leads qualificados e posicionar sua empresa no Google." />
        <link rel="canonical" href="https://stats-bloom-sparklee.lovable.app/" />
        <meta property="og:url" content="https://stats-bloom-sparklee.lovable.app/" />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
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

export default Index;
