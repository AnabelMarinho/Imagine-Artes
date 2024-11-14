import React from 'react';
import AnimatedSection from '../Animacao';

const CardGrid: React.FC = () => {
  const cards = [
    {
      imagem: '/img/tela.jpg',
      tamanho: '20x20',
      preco: 'R$ 77,00'
    },
    {
      imagem: '/img/tela.jpg',
      tamanho: '24x40',
      preco: 'R$ 112,00'
    },
    {
      imagem: '/img/tela.jpg',
      tamanho: '30x40',
      preco: 'R$ 152,00'
    },
    {
      imagem: '/img/tela.jpg',
      tamanho: '40x40',
      preco: 'R$ 117,00'
    },
    {
      imagem: '/img/tela.jpg',
      tamanho: '50x60',
      preco: 'R$ 250,00'
    },
    {
      imagem: '/img/tela.jpg',
      tamanho: '60x80',
      preco: 'R$ 300,00'
    }
  ];

  return (
    <div className="grid xs:grid-cols-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl  xl:max-w-none  mx-auto ">
      {cards.map((card, index) => (
        <AnimatedSection key={index}>
          <div className="relative flex flex-col items-center border bg-branco border-gray-300 shadow-md w-full max-w-[250px] h-[300px] overflow-hidden mx-auto">
           
            <img
              src={card.imagem}
              className="w-full h-1/2 object-cover"
              alt={`Imagem ${index + 1}`}
            />
            <div className="flex flex-col items-center p-4 w-full">
              <p className="text-center text-sm font-medium text-[#ec4899]">Tamanho da Tela</p>
              <p className="text-center text-lg font-semibold text-[#050100]">{card.tamanho}</p>
              <p className="text-center text-sm text-gray-700">{card.preco}</p>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-5 bg-custom-gradient"></div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default CardGrid;
