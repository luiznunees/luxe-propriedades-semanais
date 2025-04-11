
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
    <Card className="property-card overflow-hidden border-0 rounded-xl shadow-md mb-16 bg-white flex flex-col md:flex-row">
      {/* Property Image - Left Side (40% width) */}
      <div className="relative md:w-2/5 h-[250px] md:h-auto overflow-hidden md:rounded-l-xl">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Property Information - Right Side (60% width) */}
      <div className="p-4 md:w-3/5 flex flex-col text-left">
        {/* Property Code */}
        <div className="text-xs uppercase text-[#888888] mb-1">
          Código: {code}
        </div>
        
        {/* Property Name/Title */}
        <h3 className="font-bold text-base text-[#333333]">
          {name}
        </h3>
        
        {/* Condominium Name */}
        {condoName && (
          <h4 className="font-bold text-sm text-[#c40000] mb-2">
            {condoName}
          </h4>
        )}
        
        {/* Location */}
        <div className="text-sm text-[#555555] mb-2 flex items-center">
          <Home size={14} className="mr-1 text-[#555555]" />
          {location}
        </div>
        
        {/* Features Section */}
        <div className="flex flex-wrap gap-4 my-3 text-[#555555]">
          <div className="flex items-center gap-1">
            <BedDouble size={16} />
            <span className="text-sm">{bedrooms} Dormitórios</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Bath size={16} />
            <span className="text-sm">{bathrooms} Banheiros</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Ruler size={16} />
            <span className="text-sm">{squareMeters} m²</span>
          </div>
          
          {hasPool && (
            <div className="flex items-center gap-1">
              <Waves size={16} />
              <span className="text-sm">Piscina</span>
            </div>
          )}
        </div>
        
        {/* Description */}
        <p className="text-sm text-[#555555] my-2 line-clamp-2">
          {description}
        </p>
        
        {/* Features Badges */}
        <div className="flex flex-wrap gap-1 my-2">
          {features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="outline" className="bg-white text-[#555555] text-xs">
              {feature}
            </Badge>
          ))}
          {features.length > 3 && (
            <Badge variant="outline" className="bg-white text-[#555555] text-xs">
              +{features.length - 3}
            </Badge>
          )}
        </div>
        
        {/* Divider */}
        <div className="border-t border-[#e0e0e0] my-3"></div>
        
        {/* Price and Contact */}
        <div className="mt-auto flex justify-between items-end">
          <div>
            <p className="text-xs text-[#555555]">Valor</p>
            <p className="font-bold text-xl text-[#c40000]">
              {price}
            </p>
          </div>
          
          <a
            href={`https://wa.me/5599999999999?text=Olá, gostaria de mais informações sobre o imóvel "${name}"`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;
