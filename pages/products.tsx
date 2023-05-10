import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';

const Products = () => {
  const [priceRange, setPriceRange] = useState('all');
  const [selectedMkp, setSelectedMkp] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Caixa Organizadora Preta',
      image: '/images/cesto-preto.jpg',
      price: 46.99,
      url:'https://shp.ee/5awwx48',
      mkp:'Shopee'
    },
    {
      id: 2,
      name: 'Cesto Roupa Suja Marrom',
      image: '/images/cesto-marrom.jpg',
      price: 88.00,
      url:'https://shp.ee/r3s88a8',
      mkp:'Shopee'
    },
    {
      id: 3,
      name: 'Almofada branca',
      image: '/images/travesseiro-branco.jpg',
      price: 30.15,
      url:'https://shp.ee/5vm59w8',
      mkp:'Shopee'
    },
    {
      id: 4,
      name: 'Kit 2 Capas de almofadas personalizadas',
      image: '/images/travesseiro-personalizado.jpg',
      price: 39.00,
      url:'https://shp.ee/tvnrxb8',
      mkp:'Shopee'
    },
    {
      id: 5,
      name: 'Kit Peseira Casal e 2 Capas de Almofadas',
      image: '/images/roupa-de-cama.jpg',
      price: 89.90,
      url:'https://shp.ee/43ewv58',
      mkp:'Shopee'
    },
    {
      id: 6,
      name: 'Aspirador Vertical 1000W',
      image: '/images/aspirador.jpg',
      price: 185.85,
      url:'https://www.americanas.com.br/produto/3467628803/aspirador-vertical-1000w-1-2l-electrolux-stk12',
      mkp:'Americanas'
    },
    {
      id: 7,
      name: 'Jogo de Petisqueira Coração',
      image: '/images/petisqueira.jpg',
      price: 38.90,
      url:'https://shopee.com.br/product/406093328/16008762736?d_id=5afed&utm_content=3UvRAScNK4R6JKb8wHde1vEBhuo5',
      mkp:'Shopee'
    },
    {
      id: 8,
      name: 'Garrafa Termica Nordica',
      image: '/images/garrafa.jpg',
      price: 99.90,
      url:'https://shopee.com.br/product/405597031/13674322789?d_id=5afed&utm_content=3UvRAScNK4dRH7b3zKSjyQuBuj5q',
      mkp:'Shopee'
    },
    {
      id: 9,
      name: 'Air Fry Philco 4L Preta',
      image: '/images/airfryer.jpg',
      price: 469.90,
      url:'https://www.casasbahia.com.br/fritadeira-eletrica-sem-oleo-air-fry-philco-pfr15pg-gourmet-4l-preta/p/55035451',
      mkp:'Casas Bahia'
    },
    {
      id: 10,
      name: 'Liquidificador Electrolux 700w com Copo de Vidro',
      image: '/images/liquidificador.JPG',
      price: 369.00,
      url:'https://loja.electrolux.com.br/liquidificador-electrolux-700w-com-copo-de-vidro-tecnologia-truflow-experience-ebs30/p',
      mkp:'Electrolux'
    },
  ];
  let filteredProducts = products;

  if (priceRange === 'minToMax') {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (priceRange === 'maxToMin') {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }  

  if (selectedMkp === 'Shopee') {
    filteredProducts = filteredProducts.filter((product) => product.mkp == (selectedMkp === 'Shopee' ? 'Shopee' : 'Shopee'));
  } else if (selectedMkp === 'Americanas') {
    filteredProducts = filteredProducts.filter((product) => product.mkp == (selectedMkp === 'Americanas' ? 'Americanas' : 'Americanas'));
  }

  if (selectedMkp !== 'all') {
    filteredProducts = filteredProducts.filter((product) => product.mkp === selectedMkp);
  }
  

  return (
    <div className="bg-white rounded-lg p-8">
      <Link href="/" legacyBehavior>
        <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707,4.293c0.391-0.391,1.023-0.391,1.414,0l5,5C16.902,9.488,17,9.744,17,10c0,0.256-0.098,0.512-0.293,0.707l-5,5c-0.391,0.391-1.023,0.391-1.414,0c-0.391-0.391-0.391-1.023,0-1.414L13.586,11H3c-0.553,0-1-0.447-1-1s0.447-1,1-1h10.586l-3.293-3.293C9.316,5.316,9.316,4.684,9.707,4.293z"/>
          </svg>
          Back to Home
        </a>
      </Link>
      <h1 className="text-2xl font-bold mb-4">Products for the Wedding Pantry Shower</h1>
      <p className="text-lg">Here are some products that you can buy for the couple:</p>
      <p className="text-lg mb-8">These products are available on various marketplaces. Please click the button below to be redirected to the appropriate website to complete your purchase.</p>
      <div className="flex mb-4">
      <div>
        <label htmlFor="priceRange" className="mr-4">Filtrar preços:</label>
        <select id="priceRange" className="border border-gray-300 rounded-lg p-2" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
          <option value="all">Todos os preços</option>
          <option value="minToMax">Do Menor para o Maior</option>
          <option value="maxToMin">Do Maior para o Menor</option>
        </select>
      </div>
      <div>
        <label htmlFor="selectMkp" className="mr-4 ml-8">Filtrar por marketplace:</label>
        <select id="selectMkp" className="border border-gray-300 rounded-lg p-2" value={selectedMkp} onChange={(e) => setSelectedMkp(e.target.value)}>
          <option value="all">Todos os marketplaces</option>
          <option value="Shopee">Shopee</option>
          <option value="Americanas">Americanas</option>
        </select>
      </div>
      </div>
      <ul className="grid grid-cols-3 gap-24 m-20">
      {filteredProducts.map(product => (
          <li key={product.id}>
            <a href={product.url} target="blank_" className="block p-4 border border-gray-300 rounded-lg hover:shadow-md">
              <Image src={product.image} width={600} height={300} alt={product.name} className="mb-2" />
              <p className="font-bold">{product.name}</p>
              <span className="text-gray-400 font-bold">{product.mkp}</span>
              <p className="text-gray-500">R$ {product.price.toFixed(2)}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default Products;