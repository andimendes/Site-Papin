import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  {
    name: 'Mês 1',
    Tradicional: 5,
    Papin: 8,
  },
  {
    name: 'Mês 3',
    Tradicional: 6,
    Papin: 15,
  },
  {
    name: 'Mês 6',
    Tradicional: 5,
    Papin: 22,
  },
  {
    name: 'Mês 12',
    Tradicional: 7,
    Papin: 30,
  },
];

const ProfitChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
        <XAxis dataKey="name" tick={{fontSize: 12}} />
        <YAxis unit="%" tick={{fontSize: 12}} label={{ value: 'Margem de Lucro (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }} />
        <Tooltip 
          cursor={{fill: 'transparent'}}
          contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
        />
        <Legend wrapperStyle={{paddingTop: '20px'}} />
        <Bar dataKey="Tradicional" fill="#94a3b8" radius={[4, 4, 0, 0]} name="Contabilidade Comum" />
        <Bar dataKey="Papin" fill="#ea580c" radius={[4, 4, 0, 0]} name="Gestão Papin" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ProfitChart;