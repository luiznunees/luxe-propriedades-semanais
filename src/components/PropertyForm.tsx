
import React, { useState } from 'react';
import { CatalogProperty } from '@/pages/Dashboard';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { X, Plus } from 'lucide-react';

interface PropertyFormProps {
  property: CatalogProperty;
  onSave: (property: CatalogProperty) => void;
}

const PropertyForm: React.FC<PropertyFormProps> = ({ property, onSave }) => {
  const [formData, setFormData] = useState<CatalogProperty>({ ...property });
  const [newFeature, setNewFeature] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: Number(value) }));
  };

  const togglePool = (checked: boolean) => {
    setFormData(prev => ({ ...prev, hasPool: checked }));
  };

  const addFeature = () => {
    if (newFeature.trim() && !formData.features.includes(newFeature.trim())) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, newFeature.trim()]
      }));
      setNewFeature('');
    }
  };

  const removeFeature = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter(f => f !== feature)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="py-4 space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="imageUrl">URL da Imagem</Label>
          <Input
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            placeholder="https://exemplo.com/imagem.jpg"
            className="w-full"
          />
          {formData.imageUrl && (
            <div className="mt-2">
              <img 
                src={formData.imageUrl} 
                alt="Preview" 
                className="rounded-md h-40 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=Imagem+não+encontrada';
                }}
              />
            </div>
          )}
        </div>

        <div>
          <Label htmlFor="name">Nome do Imóvel</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Casa na Praia"
            className="w-full"
          />
        </div>

        <div>
          <Label htmlFor="location">Localização</Label>
          <Input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Xangri-lá, RS"
            className="w-full"
          />
        </div>

        <div>
          <Label htmlFor="price">Preço</Label>
          <Input
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="R$ 1.000.000"
            className="w-full"
          />
        </div>

        <div>
          <Label htmlFor="description">Descrição</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Uma descrição envolvente do imóvel..."
            className="w-full"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="squareMeters">Área (m²)</Label>
            <Input
              id="squareMeters"
              name="squareMeters"
              type="number"
              value={formData.squareMeters}
              onChange={handleNumberChange}
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="bedrooms">Quartos</Label>
            <Input
              id="bedrooms"
              name="bedrooms"
              type="number"
              value={formData.bedrooms}
              onChange={handleNumberChange}
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="bathrooms">Banheiros</Label>
            <Input
              id="bathrooms"
              name="bathrooms"
              type="number"
              value={formData.bathrooms}
              onChange={handleNumberChange}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="hasPool"
            checked={formData.hasPool}
            onCheckedChange={togglePool}
          />
          <Label htmlFor="hasPool">Possui Piscina</Label>
        </div>

        <div>
          <Label>Características</Label>
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.features.map((feature) => (
              <Badge key={feature} className="bg-luxury-beige text-luxury-charcoal flex items-center gap-1">
                {feature}
                <button 
                  type="button" 
                  onClick={() => removeFeature(feature)}
                  className="ml-1 hover:text-red-500"
                >
                  <X size={14} />
                </button>
              </Badge>
            ))}
          </div>
          <div className="flex mt-2">
            <Input
              value={newFeature}
              onChange={(e) => setNewFeature(e.target.value)}
              placeholder="Nova característica"
              className="w-full"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addFeature();
                }
              }}
            />
            <Button 
              type="button" 
              onClick={addFeature} 
              variant="outline" 
              className="ml-2"
            >
              <Plus size={16} />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" className="bg-luxury-navy hover:bg-luxury-navy/80">
          Salvar Alterações
        </Button>
      </div>
    </form>
  );
};

export default PropertyForm;
