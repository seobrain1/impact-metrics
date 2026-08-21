import { useState, useEffect } from "react";
import { Menu, X, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#resultados", label: "Resultados" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
            <Brain className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
            SEO Brain
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground/80" : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="https://wa.me/5511961412794" target="_blank" rel="noopener noreferrer">
            <Button variant={isScrolled ? "default" : "heroOutline"} size="default">
              Fale Conosco
            </Button>
          </a>
        </div>

        <button
          className={`md:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border shadow-lg animate-fade-up">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="https://wa.me/5511961412794" target="_blank" rel="noopener noreferrer">
              <Button variant="default" className="mt-2 w-full">
                Fale Conosco
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
