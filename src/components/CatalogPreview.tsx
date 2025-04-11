
import React from 'react';
import { CatalogProperty } from '@/pages/Dashboard';
import PropertyCard from './PropertyCard';

interface CatalogPreviewProps {
  catalogData: {
    title: string;
    subtitle: string;
    date: string;
    properties: CatalogProperty[];
    closingText: string;
    whatsappNumber: string;
    footerText: string;
  };
}

const CatalogPreview: React.FC<CatalogPreviewProps> = ({ catalogData }) => {
  const { title, subtitle, date, properties, closingText, whatsappNumber, footerText } = catalogData;

  return (
    <div id="catalog-preview" className="bg-white max-w-3xl mx-auto overflow-hidden shadow-lg">
      {/* Cover Page */}
      <div className="relative h-[40vh] bg-luxury-navy flex flex-col justify-center items-center text-white text-center p-8">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-xl">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
            {title}
            <span className="block text-luxury-gold text-lg mt-2">{date}</span>
          </h1>
          <p className="text-lg italic opacity-90 mb-8">{subtitle}</p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Olá, gostaria de receber a seleção semanal de imóveis`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
          >
            Quer receber essa seleção toda semana no WhatsApp? → Clique aqui
          </a>
        </div>
      </div>

      {/* Properties */}
      <div className="p-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>

      {/* Closing Section */}
      {properties.length > 0 && (
        <div className="bg-luxury-beige p-8 text-center">
          <p className="font-serif text-xl text-luxury-navy mb-4">{closingText}</p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
          >
            Entre para a lista VIP de clientes
          </a>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-luxury-navy text-white p-6 text-center">
        <p className="opacity-90">{footerText}</p>
        <div className="mt-2 flex justify-center items-center">
          <a 
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white opacity-90 hover:opacity-100"
          >
            WhatsApp: {whatsappNumber.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4')}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default CatalogPreview;
