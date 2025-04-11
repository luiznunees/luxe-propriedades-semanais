
import React from 'react';

const ClosingSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-luxury-navy/5">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-luxury-navy mb-6">
          Não encontrou o que procurava?
        </h2>
        
        <p className="text-luxury-charcoal/80 max-w-2xl mx-auto mb-8">
          Tenho um portfólio amplo de imóveis exclusivos que não estão nesta seleção. Me conte o que você procura e encontrarei a opção perfeita para você e sua família.
        </p>
        
        <div className="mb-12">
          <a 
            href="https://wa.me/5599999999999?text=Olá%20Anderson,%20estou%20procurando%20um%20imóvel%20diferente%20dos%20apresentados%20na%20seleção." 
            className="whatsapp-button inline-flex items-center gap-2 px-8 py-4 bg-luxury-gold text-white font-medium rounded-md hover:bg-luxury-gold/90 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Converse comigo sobre suas preferências</span>
          </a>
        </div>
        
        <div className="border-t border-luxury-navy/10 pt-8 mt-8">
          <p className="font-serif text-luxury-navy mb-4">
            Entre para a nossa Lista VIP
          </p>
          <p className="text-luxury-charcoal/70 mb-6 max-w-lg mx-auto">
            Receba em primeira mão os mais exclusivos lançamentos e oportunidades antes que cheguem ao mercado.
          </p>
          <a 
            href="https://wa.me/5599999999999?text=Olá,%20gostaria%20de%20entrar%20na%20lista%20VIP." 
            className="whatsapp-button inline-flex items-center gap-2 px-6 py-3 border border-luxury-navy text-luxury-navy font-medium rounded-md hover:bg-luxury-navy hover:text-white transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Entrar para lista VIP</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
