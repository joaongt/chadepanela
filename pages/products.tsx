import React from 'react';
import Image from 'next/image'
import { useState } from 'react'

const Products = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999999);
  
  const products = [
    {
      id: 1,
      name: 'Caixa Organizadora Preta',
      image: '/images/cesto-preto.jpg',
      price: 46.99,
      url:'https://shp.ee/5awwx48'
    },
    {
      id: 2,
      name: 'Cesto Roupa Suja Marrom',
      image: '/images/cesto-marrom.jpg',
      price: 88.00,
      url:'https://shp.ee/r3s88a8'
    },
    {
      id: 3,
      name: 'Almofada branca',
      image: '/images/travesseiro-branco.jpg',
      price: 30.15,
      url:'https://shp.ee/5vm59w8'
    },
  ];

  const filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(event.target.value));
  }
  
  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(event.target.value));
  }
  

  return (
    <div className="bg-white rounded-lg p-8">
      <h1 className="text-2xl font-bold mb-4">Products for the Wedding Pantry Shower</h1>
      <p className="text-lg mb-4">Here are some products that you can buy for the couple:</p>
      <div className="flex justify-between mb-4">
        <div>
          <label htmlFor="min-price">Preço Mínimo<br></br></label>
          <input type="number" id="min-price" name="min-price" value={minPrice} onChange={handleMinPriceChange} className="border border-gray-300 rounded-lg px-4 py-2" />
        </div>
        <div>
          <label htmlFor="max-price">Preço Máximo<br></br></label>
          <input type="number" id="max-price" name="max-price" value={maxPrice} onChange={handleMaxPriceChange} className="border border-gray-300 rounded-lg px-4 py-2" />
        </div>
      </div>
      <ul className="grid grid-cols-3 gap-24 m-20">
        {filteredProducts.map(product => (
          <li key={product.id}>
            <a href={product.url} target="blank_" className="block p-4 border border-gray-300 rounded-lg hover:shadow-md">
              <Image src={product.image} width={600} height={300} alt={product.name} className="mb-2" />
              <p className="font-bold">{product.name}</p>
              <p className="text-gray-500">R$ {product.price.toFixed(2)}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default Products;