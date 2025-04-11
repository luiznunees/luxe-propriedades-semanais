
import React from 'react';
import { Calendar } from 'lucide-react';

interface HeaderProps {
  currentDate: string;
}

const Header: React.FC<HeaderProps> = ({ currentDate }) => {
  return (
    <header className="py-8 md:py-12 px-4 md:px-6 text-center animate-fade-in">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-center mb-4">
          <h3 className="font-serif text-luxury-navy text-lg md:text-xl tracking-wider">Anderson Nunes</h3>
        </div>
        
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-luxury-navy font-light mb-3 md:mb-5">
          Seleção Exclusiva
        </h1>
        
        <div className="flex items-center justify-center gap-2 mb-6 md:mb-8 text-luxury-navy/80">
          <Calendar size={18} className="text-luxury-gold" />
          <span className="text-sm md:text-base tracking-wide">
            Semana {currentDate}
          </span>
        </div>
        
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-12 text-luxury-charcoal/80">
          Casas que falam por si. Imóveis selecionados pessoalmente por Anderson Nunes.
        </p>
        
        <div className="mt-8">
          <a 
            href="https://wa.me/5599999999999?text=Olá,%20gostaria%20de%20receber%20a%20seleção%20semanal%20de%20imóveis" 
            className="whatsapp-button inline-flex items-center gap-2 px-8 py-4 bg-luxury-navy text-white font-medium rounded-full hover:bg-luxury-navy/90 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Quer receber essa seleção toda semana no WhatsApp?</span>
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
