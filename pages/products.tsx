import React from 'react';
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link';

const Products = () => {
  const [minPrice, setMinPrice] = useState("00.00");
  const [maxPrice, setMaxPrice] = useState("99.99");
  
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
    let numberValue = event.target.value.replace(/\D/g, ''); // removes all non-numeric characters
    numberValue = numberValue.slice(0, 4); // limits the string to 4 characters
  
    if (numberValue.length > 2) {
      numberValue = numberValue.slice(0, 2) + "." + numberValue.slice(2); // adds a dot after the first 2 digits
    }
  
    event.target.value = numberValue;
    setMinPrice(Number(numberValue));
  };
  
  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let numberValue = event.target.value.replace(/\D/g, ''); // removes all non-numeric characters
    numberValue = numberValue.slice(0, 4); // limits the string to 4 characters
  
    if (numberValue.length > 2) {
      numberValue = numberValue.slice(0, 2) + "." + numberValue.slice(2); // adds a dot after the first 2 digits
    }
  
    event.target.value = numberValue;
    setMaxPrice(Number(numberValue));
  };
  
  

  return (
    <div className="bg-white rounded-lg p-8">
      <Link href="/" legacyBehavior>
              <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700">
                Back to Home
              </a>
      </Link>
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