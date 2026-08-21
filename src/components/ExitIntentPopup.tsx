import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    url: "",
  });

  const showPopup = useCallback(() => {
    if (!hasShown) {
      setIsOpen(true);
      setHasShown(true);
      localStorage.setItem("exitIntentShown", "true");
    }
  }, [hasShown]);

  useEffect(() => {
    // Check if popup was already shown in this session
    const alreadyShown = localStorage.getItem("exitIntentShown");
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    let inactivityTimer: ReturnType<typeof setTimeout>;

    // Exit intent - mouse leaves viewport (top)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        showPopup();
      }
    };

    // Tab visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        showPopup();
      }
    };

    // Inactivity timer - 20 seconds
    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        showPopup();
      }, 20000);
    };

    // Add event listeners
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("mousemove", resetInactivityTimer);
    document.addEventListener("keydown", resetInactivityTimer);
    document.addEventListener("scroll", resetInactivityTimer);
    document.addEventListener("click", resetInactivityTimer);

    // Start inactivity timer
    resetInactivityTimer();

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("mousemove", resetInactivityTimer);
      document.removeEventListener("keydown", resetInactivityTimer);
      document.removeEventListener("scroll", resetInactivityTimer);
      document.removeEventListener("click", resetInactivityTimer);
      clearTimeout(inactivityTimer);
    };
  }, [showPopup]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    const whatsappMessage = `Olá! Gostaria de receber um diagnóstico SEO gratuito.\n\nNome: ${formData.nome}\nWhatsApp: ${formData.whatsapp}\nSite: ${formData.url}`;
    const whatsappUrl = `https://wa.me/5511961412794?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Popup */}
      <div className="relative w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl p-8 animate-in fade-in zoom-in duration-300">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
            <span className="text-3xl">🔍</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Receba um diagnóstico SEO gratuito
          </h2>
          <p className="text-muted-foreground">
            Descubra por que seu site não aparece no Google
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Seu nome"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              required
              className="bg-background"
            />
          </div>
          <div>
            <Input
              type="tel"
              placeholder="WhatsApp (com DDD)"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              required
              className="bg-background"
            />
          </div>
          <div>
            <Input
              type="url"
              placeholder="URL do seu site"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              required
              className="bg-background"
            />
          </div>
          <Button type="submit" className="w-full gradient-primary text-primary-foreground font-semibold py-6">
            Quero meu diagnóstico gratuito
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-4">
          Seus dados estão seguros. Não enviamos spam.
        </p>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
