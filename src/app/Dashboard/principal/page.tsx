"use client"; // Asegúrate de que el componente raíz también sea un Client Component si es necesario

import React from 'react';
import Cards from '../../../components/cards';
import { ProgressCircle } from '@tremor/react';
import { LineChartHero } from '@/components/LineChartHero';

import { CardUsageExample } from '@/components/Cardv2'

const App: React.FC = () => {
  return (    
    <div className='dashboard rounded-lg'>
        <h1 className='text-center text-2xl font-bold'>Stadistics</h1>
        <Cards />
        <div className="mx-auto grid grid-cols-1 gap-12">
          <div className="flex justify-center">
            <ProgressCircle value={72} size="lg" />
          </div>
        </div>

        <div>
          <LineChartHero/>
        </div>
        <div>
          <CardUsageExample/>
        </div>

    </div>
  );
};

export default App;
