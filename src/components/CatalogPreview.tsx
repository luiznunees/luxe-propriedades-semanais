
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
    <div id="catalog-preview" className="bg-white max-w-3xl mx-auto overflow-hidden shadow-lg rounded-2xl">
      {/* Cover Page */}
      <div className="relative h-[40vh] bg-gradient-to-br from-luxury-charcoal to-black flex flex-col justify-center items-center text-white text-center p-8">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        <div className="relative z-10 max-w-xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
            <span className="block text-luxury-red text-lg mt-3 font-medium">{date}</span>
          </h1>
          <p className="text-lg opacity-90 mb-8 font-light">{subtitle}</p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Olá, gostaria de receber a seleção semanal de imóveis`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 mx-auto justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M20.4054 3.5875C18.1607 1.3425 15.1714 0.0675 11.9946 0.0675C5.4375 0.0675 0.0964 5.40804 0.0964 12.0089C0.0964 14.1089 0.6675 16.1554 1.725 17.9554L0 24.0675L6.3 22.3875C8.03036 23.3411 9.99107 23.8393 11.9893 23.8393H11.9946C18.5464 23.8393 23.9946 18.4989 23.9946 11.9036C23.9946 8.72679 22.65 5.8325 20.4054 3.5875ZM11.9946 21.8357C10.215 21.8357 8.475 21.3589 6.9375 20.4589L6.5625 20.2339L2.8125 21.2411L3.84107 17.6036L3.58929 17.2125C2.58214 15.6054 2.05714 13.8375 2.05714 12.0089C2.05714 6.50893 6.49286 2.07679 12 2.07679C14.6411 2.07679 17.1214 3.13929 18.9911 5.01429C20.8607 6.88929 21.9964 9.36964 21.9911 12.0089C21.9911 17.5143 17.4911 21.8357 11.9946 21.8357ZM17.4214 14.5179C17.1214 14.3679 15.6536 13.6446 15.375 13.5482C15.0964 13.4464 14.8929 13.3982 14.6839 13.7036C14.475 14.0089 13.9018 14.6786 13.725 14.8875C13.5536 15.0911 13.3768 15.1179 13.0768 14.9679C11.4696 14.1696 10.425 13.5429 9.37499 11.7268C9.10714 11.2768 9.74464 11.3089 10.3393 10.1196C10.4357 9.91607 10.3875 9.74464 10.3125 9.59464C10.2375 9.44464 9.61607 7.97679 9.36429 7.37143C9.12321 6.78214 8.87678 6.86786 8.69464 6.85714C8.52321 6.84643 8.31964 6.84643 8.11607 6.84643C7.9125 6.84643 7.5857 6.92143 7.30714 7.22143C7.02857 7.52679 6.24643 8.25 6.24643 9.71786C6.24643 11.1857 7.33929 12.6054 7.48393 12.8089C7.63393 13.0125 9.60535 16.0768 12.6429 17.3625C14.6143 18.1929 15.3804 18.2518 16.3446 18.1018C16.9339 18.0107 18.1125 17.3732 18.3643 16.6714C18.6161 15.9696 18.6161 15.3643 18.5411 15.2357C18.4714 15.0964 18.2625 15.0214 17.9625 14.8714L17.4214 14.5179Z" fill="currentColor"/>
            </svg>
            Receba essa seleção toda semana no WhatsApp
          </a>
        </div>
      </div>

      {/* Properties */}
      <div className="p-8">
        {properties.map((property) => (
          <PropertyCard 
            key={property.id} 
            id={Number(property.id)}
            name={property.name}
            location={property.location}
            price={property.price}
            description={property.description}
            squareMeters={property.squareMeters}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            hasPool={property.hasPool}
            features={property.features}
            imageUrl={property.imageUrl}
            code={property.code || `XL-${property.id.substring(0, 4)}`}
            condoName={property.condoName}
          />
        ))}
      </div>

      {/* Closing Section */}
      {properties.length > 0 && (
        <div className="bg-luxury-cream p-10 text-center">
          <p className="text-xl text-luxury-charcoal mb-5 font-medium">{closingText}</p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 mx-auto justify-center w-auto max-w-xs"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M20.4054 3.5875C18.1607 1.3425 15.1714 0.0675 11.9946 0.0675C5.4375 0.0675 0.0964 5.40804 0.0964 12.0089C0.0964 14.1089 0.6675 16.1554 1.725 17.9554L0 24.0675L6.3 22.3875C8.03036 23.3411 9.99107 23.8393 11.9893 23.8393H11.9946C18.5464 23.8393 23.9946 18.4989 23.9946 11.9036C23.9946 8.72679 22.65 5.8325 20.4054 3.5875ZM11.9946 21.8357C10.215 21.8357 8.475 21.3589 6.9375 20.4589L6.5625 20.2339L2.8125 21.2411L3.84107 17.6036L3.58929 17.2125C2.58214 15.6054 2.05714 13.8375 2.05714 12.0089C2.05714 6.50893 6.49286 2.07679 12 2.07679C14.6411 2.07679 17.1214 3.13929 18.9911 5.01429C20.8607 6.88929 21.9964 9.36964 21.9911 12.0089C21.9911 17.5143 17.4911 21.8357 11.9946 21.8357ZM17.4214 14.5179C17.1214 14.3679 15.6536 13.6446 15.375 13.5482C15.0964 13.4464 14.8929 13.3982 14.6839 13.7036C14.475 14.0089 13.9018 14.6786 13.725 14.8875C13.5536 15.0911 13.3768 15.1179 13.0768 14.9679C11.4696 14.1696 10.425 13.5429 9.37499 11.7268C9.10714 11.2768 9.74464 11.3089 10.3393 10.1196C10.4357 9.91607 10.3875 9.74464 10.3125 9.59464C10.2375 9.44464 9.61607 7.97679 9.36429 7.37143C9.12321 6.78214 8.87678 6.86786 8.69464 6.85714C8.52321 6.84643 8.31964 6.84643 8.11607 6.84643C7.9125 6.84643 7.5857 6.92143 7.30714 7.22143C7.02857 7.52679 6.24643 8.25 6.24643 9.71786C6.24643 11.1857 7.33929 12.6054 7.48393 12.8089C7.63393 13.0125 9.60535 16.0768 12.6429 17.3625C14.6143 18.1929 15.3804 18.2518 16.3446 18.1018C16.9339 18.0107 18.1125 17.3732 18.3643 16.6714C18.6161 15.9696 18.6161 15.3643 18.5411 15.2357C18.4714 15.0964 18.2625 15.0214 17.9625 14.8714L17.4214 14.5179Z" fill="currentColor"/>
            </svg>
            Entre para a lista VIP de clientes
          </a>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-luxury-charcoal text-white p-8 text-center">
        <p className="opacity-90 font-light">{footerText}</p>
        <div className="mt-3 flex justify-center items-center">
          <a 
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white opacity-90 hover:opacity-100 font-light"
          >
            WhatsApp: {whatsappNumber.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4')}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default CatalogPreview;
