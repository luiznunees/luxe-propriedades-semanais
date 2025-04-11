import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Plus, Download, Eye, ArrowUp, ArrowDown, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetDescription
} from '@/components/ui/sheet';
import PropertyForm from '@/components/PropertyForm';
import CatalogPreview from '@/components/CatalogPreview';
import { PropertyProps } from '@/components/PropertyCard';

export interface CatalogProperty extends Omit<PropertyProps, 'id'> {
  id: string;
  code?: string;
  condoName?: string;
}

const initialCatalogData = {
  title: "Seleção Exclusiva | Semana",
  subtitle: "Casas que falam por si. Imóveis selecionados pessoalmente por Anderson Nunes.",
  date: new Date().toLocaleDateString('pt-BR', { 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric' 
  }),
  properties: [] as CatalogProperty[],
  closingText: "Não encontrou o que procura? Entre em contato comigo pelo WhatsApp para uma consulta personalizada.",
  whatsappNumber: "5599999999999",
  footerText: "Anderson Nunes | @andersonnunesimoveis"
};

const Dashboard = () => {
  const [catalogData, setCatalogData] = useState(initialCatalogData);
  const [selectedProperty, setSelectedProperty] = useState<CatalogProperty | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const addNewProperty = () => {
    const newProperty: CatalogProperty = {
      id: Date.now().toString(),
      name: "Novo Imóvel",
      location: "Xangri-lá, RS",
      price: "Sob Consulta",
      description: "Uma casa que te abraça ao entrar. Feita pra quem exige o melhor.",
      squareMeters: 250,
      bedrooms: 4,
      bathrooms: 3,
      hasPool: true,
      features: ["Mobiliado", "Vista para o mar", "Condomínio fechado"],
      imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000"
    };

    setCatalogData(prev => ({
      ...prev,
      properties: [...prev.properties, newProperty]
    }));
  };

  const updateProperty = (updatedProperty: CatalogProperty) => {
    setCatalogData(prev => ({
      ...prev,
      properties: prev.properties.map(prop => 
        prop.id === updatedProperty.id ? updatedProperty : prop
      )
    }));
    setSelectedProperty(null);
  };

  const removeProperty = (id: string) => {
    setCatalogData(prev => ({
      ...prev,
      properties: prev.properties.filter(prop => prop.id !== id)
    }));
  };

  const moveProperty = (index: number, direction: 'up' | 'down') => {
    const newPosition = direction === 'up' ? index - 1 : index + 1;
    
    if (newPosition < 0 || newPosition >= catalogData.properties.length) {
      return;
    }
    
    const newProperties = [...catalogData.properties];
    [newProperties[index], newProperties[newPosition]] = [newProperties[newPosition], newProperties[index]];
    
    setCatalogData(prev => ({
      ...prev,
      properties: newProperties
    }));
  };

  const updateCatalogField = (field: string, value: string) => {
    setCatalogData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generatePDF = async () => {
    const previewElement = document.getElementById('catalog-preview');
    if (!previewElement) {
      console.error("Preview element not found");
      return;
    }

    setIsGeneratingPDF(true);

    try {
      const originalWidth = previewElement.style.width;
      previewElement.style.width = '794px';

      const images = Array.from(previewElement.querySelectorAll('img'));
      await Promise.all(
        images.map(img => {
          if (img.complete) return Promise.resolve();
          return new Promise(resolve => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );

      const canvas = await html2canvas(previewElement, {
        scale: 2,
        useCORS: true,
        logging: true,
        allowTaint: true,
        backgroundColor: "#ffffff"
      });
      
      previewElement.style.width = originalWidth;
      
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      pdf.save(`catalogo-anderson-nunes-${catalogData.date.replace(/\//g, '-')}.pdf`);

      console.log("PDF generated successfully");
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="min-h-screen bg-luxury-cream">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-luxury-navy mb-2">
            Dashboard do Catálogo
          </h1>
          <p className="text-luxury-charcoal/80">
            Crie e personalize seu catálogo semanal de imóveis de alto padrão.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="font-serif text-xl text-luxury-navy mb-4">Informações do Catálogo</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Título</label>
                  <Input 
                    value={catalogData.title} 
                    onChange={(e) => updateCatalogField('title', e.target.value)}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Subtítulo</label>
                  <Input 
                    value={catalogData.subtitle} 
                    onChange={(e) => updateCatalogField('subtitle', e.target.value)}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Data</label>
                  <Input 
                    value={catalogData.date} 
                    onChange={(e) => updateCatalogField('date', e.target.value)}
                    className="w-full"
                    placeholder="DD/MM/YYYY"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Texto de Encerramento</label>
                  <Textarea 
                    value={catalogData.closingText} 
                    onChange={(e) => updateCatalogField('closingText', e.target.value)}
                    className="w-full"
                    rows={3}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Número do WhatsApp</label>
                  <Input 
                    value={catalogData.whatsappNumber} 
                    onChange={(e) => updateCatalogField('whatsappNumber', e.target.value)}
                    className="w-full"
                    placeholder="5599999999999"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Texto do Rodapé</label>
                  <Input 
                    value={catalogData.footerText} 
                    onChange={(e) => updateCatalogField('footerText', e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="font-serif text-xl text-luxury-navy mb-4">Ações</h2>
              
              <div className="flex flex-col space-y-3">
                <Button onClick={addNewProperty} className="w-full justify-start">
                  <Plus size={18} className="mr-2" /> Adicionar Imóvel
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={() => setIsPreviewOpen(true)} 
                  className="w-full justify-start"
                >
                  <Eye size={18} className="mr-2" /> Visualizar Prévia
                </Button>
                
                <Button 
                  onClick={generatePDF} 
                  className="w-full justify-start bg-luxury-navy hover:bg-luxury-navy/80"
                  disabled={isGeneratingPDF}
                >
                  <Download size={18} className="mr-2" /> 
                  {isGeneratingPDF ? 'Gerando PDF...' : 'Exportar PDF'}
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="font-serif text-xl text-luxury-navy mb-4">Imóveis</h2>
              
              {catalogData.properties.length === 0 ? (
                <div className="text-center py-8 border-2 border-dashed border-luxury-beige rounded-lg">
                  <p className="text-luxury-charcoal/70 mb-3">Nenhum imóvel adicionado</p>
                  <Button onClick={addNewProperty} variant="outline">
                    <Plus size={18} className="mr-2" /> Adicionar Imóvel
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {catalogData.properties.map((property, index) => (
                    <div 
                      key={property.id} 
                      className="border border-luxury-beige p-4 rounded-lg flex justify-between items-center"
                    >
                      <div className="flex items-center gap-4">
                        <img 
                          src={property.imageUrl} 
                          alt={property.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div>
                          <h3 className="font-medium">{property.name}</h3>
                          <p className="text-sm text-luxury-charcoal/70">{property.location}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => moveProperty(index, 'up')}
                          disabled={index === 0}
                        >
                          <ArrowUp size={18} />
                        </Button>
                        
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => moveProperty(index, 'down')}
                          disabled={index === catalogData.properties.length - 1}
                        >
                          <ArrowDown size={18} />
                        </Button>
                        
                        <Sheet>
                          <SheetTrigger asChild>
                            <Button 
                              variant="outline" 
                              onClick={() => setSelectedProperty(property)}
                            >
                              Editar
                            </Button>
                          </SheetTrigger>
                          <SheetContent className="overflow-y-auto">
                            <SheetHeader>
                              <SheetTitle>Editar Imóvel</SheetTitle>
                            </SheetHeader>
                            {selectedProperty && (
                              <PropertyForm
                                property={selectedProperty}
                                onSave={updateProperty}
                              />
                            )}
                          </SheetContent>
                        </Sheet>
                        
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => removeProperty(property.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 size={18} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Sheet open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <SheetContent side="bottom" className="h-[90vh] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Prévia do Catálogo</SheetTitle>
            <SheetDescription>Visualize como seu catálogo ficará após exportar para PDF</SheetDescription>
          </SheetHeader>
          <div className="py-6">
            <CatalogPreview catalogData={catalogData} />
            <div className="flex justify-end mt-6">
              <Button 
                onClick={generatePDF} 
                className="bg-luxury-navy hover:bg-luxury-navy/80"
                disabled={isGeneratingPDF}
              >
                <Download size={18} className="mr-2" /> 
                {isGeneratingPDF ? 'Gerando PDF...' : 'Exportar PDF'}
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Dashboard;
