import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Twitter, Github, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl gradient-text">
                EventChain
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              Plataforma descentralizada de financiación de eventos. 
              Transparencia, seguridad y trazabilidad en blockchain.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Plataforma</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-foreground transition-colors">
                  Ver Eventos
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link to="/connect" className="text-muted-foreground hover:text-foreground transition-colors">
                  Conectar Wallet
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Términos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Disclaimer de Riesgos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 EventChain. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs">
            ⚠️ Las inversiones en eventos conllevan riesgos. No hay garantía de retorno.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
