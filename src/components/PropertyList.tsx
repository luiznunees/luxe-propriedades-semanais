
import React from 'react';
import PropertyCard, { PropertyProps } from './PropertyCard';

interface PropertyListProps {
  properties: PropertyProps[];
}

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))
        ) : (
          <div className="text-center p-8 border-2 border-dashed border-luxury-lightGray rounded-lg">
            <p className="text-luxury-gray">Nenhum imóvel encontrado</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
