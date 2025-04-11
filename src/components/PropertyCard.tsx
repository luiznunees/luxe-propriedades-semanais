
import React from 'react';
import { Home, Bath, BedDouble, Ruler, Waves } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export interface PropertyProps {
  id: number;
  name: string;
  location: string;
  price: string;
  description: string;
  squareMeters: number;
  bedrooms: number;
  bathrooms: number;
  hasPool: boolean;
  features: string[];
  imageUrl: string;
  code?: string;
  condoName?: string;
}

const PropertyCard: React.FC<PropertyProps> = ({
  name,
  location,
  price,
  description,
  squareMeters,
  bedrooms,
  bathrooms,
  hasPool,
  features,
  imageUrl,
  code = 'XL2023',
  condoName,
}) => {
  return (
    <Card className="property-card overflow-hidden border-0 rounded-xl mb-16 bg-white flex flex-col md:flex-row">
      {/* Property Image - Left Side (40% width) */}
      <div className="relative md:w-2/5 h-[250px] md:h-auto overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      
      {/* Property Information - Right Side (60% width) */}
      <div className="p-6 md:w-3/5 flex flex-col text-left">
        {/* Property Code */}
        <div className="text-xs font-medium tracking-wider uppercase text-luxury-gray mb-1">
          Código: {code}
        </div>
        
        {/* Property Name/Title */}
        <h3 className="font-bold text-base text-luxury-charcoal">
          {name}
        </h3>
        
        {/* Condominium Name */}
        {condoName && (
          <h4 className="font-medium text-sm text-luxury-red mb-3">
            {condoName}
          </h4>
        )}
        
        {/* Location */}
        <div className="text-sm text-luxury-darkGray mb-3 flex items-center">
          <Home size={14} className="mr-1.5 text-luxury-darkGray" />
          {location}
        </div>
        
        {/* Features Section */}
        <div className="flex flex-wrap gap-5 my-3 text-luxury-darkGray">
          <div className="flex items-center gap-1.5">
            <BedDouble size={16} />
            <span className="text-sm font-medium">{bedrooms} Dormitórios</span>
          </div>
          
          <div className="flex items-center gap-1.5">
            <Bath size={16} />
            <span className="text-sm font-medium">{bathrooms} Banheiros</span>
          </div>
          
          <div className="flex items-center gap-1.5">
            <Ruler size={16} />
            <span className="text-sm font-medium">{squareMeters} m²</span>
          </div>
          
          {hasPool && (
            <div className="flex items-center gap-1.5">
              <Waves size={16} />
              <span className="text-sm font-medium">Piscina</span>
            </div>
          )}
        </div>
        
        {/* Description */}
        <p className="text-sm text-luxury-darkGray my-3 line-clamp-2">
          {description}
        </p>
        
        {/* Features Badges */}
        <div className="flex flex-wrap gap-1.5 my-3">
          {features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="outline" className="bg-white border-luxury-lightGray text-luxury-darkGray text-xs rounded-full px-3 py-0.5">
              {feature}
            </Badge>
          ))}
          {features.length > 3 && (
            <Badge variant="outline" className="bg-white border-luxury-lightGray text-luxury-darkGray text-xs rounded-full px-3 py-0.5">
              +{features.length - 3}
            </Badge>
          )}
        </div>
        
        {/* Divider */}
        <div className="border-t border-luxury-lightGray my-4"></div>
        
        {/* Price and Contact */}
        <div className="mt-auto flex justify-between items-end">
          <div>
            <p className="text-xs font-medium text-luxury-darkGray">Valor</p>
            <p className="font-bold text-xl text-luxury-red">
              {price}
            </p>
          </div>
          
          <a
            href={`https://wa.me/5599999999999?text=Olá, gostaria de mais informações sobre o imóvel "${name}"`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button bg-green-600 text-white px-5 py-2.5 text-sm hover:bg-green-700 flex items-center gap-1.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M20.4054 3.5875C18.1607 1.3425 15.1714 0.0675 11.9946 0.0675C5.4375 0.0675 0.0964 5.40804 0.0964 12.0089C0.0964 14.1089 0.6675 16.1554 1.725 17.9554L0 24.0675L6.3 22.3875C8.03036 23.3411 9.99107 23.8393 11.9893 23.8393H11.9946C18.5464 23.8393 23.9946 18.4989 23.9946 11.9036C23.9946 8.72679 22.65 5.8325 20.4054 3.5875ZM11.9946 21.8357C10.215 21.8357 8.475 21.3589 6.9375 20.4589L6.5625 20.2339L2.8125 21.2411L3.84107 17.6036L3.58929 17.2125C2.58214 15.6054 2.05714 13.8375 2.05714 12.0089C2.05714 6.50893 6.49286 2.07679 12 2.07679C14.6411 2.07679 17.1214 3.13929 18.9911 5.01429C20.8607 6.88929 21.9964 9.36964 21.9911 12.0089C21.9911 17.5143 17.4911 21.8357 11.9946 21.8357ZM17.4214 14.5179C17.1214 14.3679 15.6536 13.6446 15.375 13.5482C15.0964 13.4464 14.8929 13.3982 14.6839 13.7036C14.475 14.0089 13.9018 14.6786 13.725 14.8875C13.5536 15.0911 13.3768 15.1179 13.0768 14.9679C11.4696 14.1696 10.425 13.5429 9.37499 11.7268C9.10714 11.2768 9.74464 11.3089 10.3393 10.1196C10.4357 9.91607 10.3875 9.74464 10.3125 9.59464C10.2375 9.44464 9.61607 7.97679 9.36429 7.37143C9.12321 6.78214 8.87678 6.86786 8.69464 6.85714C8.52321 6.84643 8.31964 6.84643 8.11607 6.84643C7.9125 6.84643 7.5857 6.92143 7.30714 7.22143C7.02857 7.52679 6.24643 8.25 6.24643 9.71786C6.24643 11.1857 7.33929 12.6054 7.48393 12.8089C7.63393 13.0125 9.60535 16.0768 12.6429 17.3625C14.6143 18.1929 15.3804 18.2518 16.3446 18.1018C16.9339 18.0107 18.1125 17.3732 18.3643 16.6714C18.6161 15.9696 18.6161 15.3643 18.5411 15.2357C18.4714 15.0964 18.2625 15.0214 17.9625 14.8714L17.4214 14.5179Z" fill="currentColor"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;
