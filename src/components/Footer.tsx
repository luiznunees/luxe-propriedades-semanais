
import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 border-t border-luxury-beige">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="font-serif text-xl text-luxury-navy mb-1">Anderson Nunes</h3>
          <p className="text-sm text-luxury-charcoal/60">Especialista em Imóveis de Luxo</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <div className="flex items-center space-x-3 mb-3">
            <a
              href="https://instagram.com/andersonnunesimoveis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-navy hover:text-luxury-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com/andersonnunesimoveis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-navy hover:text-luxury-gold transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-navy hover:text-luxury-gold transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
          <p className="text-sm text-luxury-charcoal/60">@andersonnunesimoveis</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
