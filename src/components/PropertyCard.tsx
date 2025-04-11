
import React from 'react';
import { Home, Bath, BedDouble, Ruler, PoolIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

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
}) => {
  return (
    <Card className="property-card overflow-hidden border-0 shadow-lg mb-16 bg-white">
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full h-1/3">
          <div className="absolute bottom-6 left-6">
            <Badge
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/20 px-4 py-1"
            >
              {location}
            </Badge>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6 md:p-8">
        <h2 className="font-serif text-2xl md:text-3xl text-luxury-navy mb-2">
          {name}
        </h2>
        
        <div className="flex flex-wrap gap-5 my-5">
          <div className="flex items-center gap-2 text-luxury-charcoal/80">
            <Ruler size={18} className="text-luxury-gold" />
            <span>{squareMeters} m²</span>
          </div>
          <div className="flex items-center gap-2 text-luxury-charcoal/80">
            <BedDouble size={18} className="text-luxury-gold" />
            <span>{bedrooms} Suítes</span>
          </div>
          <div className="flex items-center gap-2 text-luxury-charcoal/80">
            <Bath size={18} className="text-luxury-gold" />
            <span>{bathrooms} Banheiros</span>
          </div>
          {hasPool && (
            <div className="flex items-center gap-2 text-luxury-charcoal/80">
              <PoolIcon size={18} className="text-luxury-gold" />
              <span>Piscina</span>
            </div>
          )}
        </div>
        
        <div className="my-6 border-l-4 border-luxury-gold pl-4 py-1 italic text-luxury-charcoal">
          {description}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((feature, index) => (
            <Badge key={index} className="bg-luxury-beige text-luxury-charcoal border-0">
              {feature}
            </Badge>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mt-8">
          <div>
            <p className="text-sm text-luxury-charcoal/60 mb-1">Valor</p>
            <p className="font-serif text-2xl text-luxury-navy font-medium">
              {price}
            </p>
          </div>
          
          <a
            href={`https://wa.me/5599999999999?text=Olá, gostaria de mais informações sobre o imóvel "${name}"`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
          >
            <span>Gostou? Fala comigo no WhatsApp</span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
