
import React from 'react';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

import Header from '../components/Header';
import PropertyList from '../components/PropertyList';
import ClosingSection from '../components/ClosingSection';
import Footer from '../components/Footer';
import { properties } from '../data/properties';

const Index = () => {
  // Get current date range for the week (Monday to Sunday)
  const today = new Date();
  const startOfWeek = new Date(today);
  const dayOfWeek = today.getDay();
  const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Adjust for Sunday
  startOfWeek.setDate(today.getDate() - diff);
  
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  
  const dateRange = `${format(startOfWeek, 'd', { locale: pt })}-${format(endOfWeek, 'd', { locale: pt })} de ${format(endOfWeek, 'MMMM', { locale: pt })}`;

  return (
    <div className="min-h-screen flex flex-col bg-luxury-cream">
      <main className="flex-grow">
        <Header currentDate={dateRange} />
        <PropertyList properties={properties} />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
