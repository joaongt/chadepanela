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
    {
      id: 11,
      name: 'Colcha 3 Peças QUEEN Corttex Milão Azul',
      image: '/images/cama.jpg',
      price: 148.78,
      url:'https://www.todecorando.com.br/colcha-3-pecas-queen-corttex-milao-azul/p',
      mkp:'Tô Decorando'
    },
    {
      id: 12,
      name: '2 Banquetas Estofadas Giratória Preta',
      image: '/images/banco.jpg',
      price: 690.21,
      url:'https://www.submarino.com.br/produto/5473081445',
      mkp:'Submarino'
    },
    {
      id: 13,
      name: 'Ferro de Passar a Vapor Electrolux',
      image: '/images/ferro.jpg',
      price: 92.00,
      url:'https://www.casasbahia.com.br/ferro-de-passar-a-vapor-electrolux-efficient-esi10-com-spray-e-base-antiaderente-azul/p/55058111',
      mkp:'Casas Bahia'
    },
    {
      id: 14,
      name: 'Varal de Parede Recolhível Seca Fácil',
      image: '/images/varal.JPG',
      price: 49.99,
      url:'https://www.amazon.com.br/Varal-Parede-Recolh%C3%ADvel-Seca-F%C3%A1cil/dp/B076QGDVSL/ref=asc_df_B076QGDVSL/?tag=googleshopp06-20&linkCode=df0&hvadid=379755604079&hvpos=&hvnetw=g&hvrand=9949169672966137105&hvpone=&hvptwo=&hvqmt=&hvdev=m&hvdvcmdl=&hvlocint=&hvlocphy=1001566&hvtargid=pla-811912834025&psc=1',
      mkp:'Amazon'
    },
    {
      id: 15,
      name: 'Pote Porta Mantimentos',
      image: '/images/pote.jpg',
      price: 9.90,
      url:'https://shopee.com.br/Pote-Porta-Mantimentos-Modelos-Diversos-Cl%C3%A1ssico-Alimentos-i.350879675.16830805829',
      mkp:'Shopee'
    },
    {
      id: 16,
      name: 'Kit 4 Peças Organizador Pia Banheiro',
      image: '/images/lava.jpg',
      price: 27.90,
      url:'https://shopee.com.br/product/718699235/21525101273?gclid=Cj0KCQjw0tKiBhC6ARIsAAOXutkPKOVNPlRV4HIHS4AZqPbT1o9AkaHvmVZOD1JcmKmhEzfYIR_PCcEaAmZNEALw_wcB',
      mkp:'Shopee'
    },
    {
      id: 17,
      name: 'Jogo De Panelas 8 Peças Ceramic',
      image: '/images/panela.JPG',
      price: 731.83,
      url:'https://www.casasbahia.com.br/jogo-de-panelas-8-pecas-ceramic-life-smart-plus-cinza-brinox/p/1537818723',
      mkp:'Casas Bahia'
    },
    {
      id: 18,
      name: 'Panela de Pressão Tramontina',
      image: '/images/pressao.jpg',
      price: 219.00,
      url:'https://www.tramontina.com.br/panela-de-pressao-tramontina-vancouver-em-aluminio-com-revestimento-interno-e-externo-antiaderente-starflon-max-grafite-20-cm-4-5-l/20582620.html',
      mkp:'Tramontina'
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
  
  <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="bg-white rounded-lg p-8">
        <Link href="/" legacyBehavior>
          <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 mb-8">
            Volte para a página principal
          </a>
        </Link>
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4x1 sm:leading-10">Produtos para o chá de panela do casal</h1>
        <div className="mt-6 max-w-2xl text-xl leading-7 text-gray-500">
          <p className="text-lg">Primeiro observe as instruções abaixo:</p>
          <ol className="mt-4 list-decimal list-inside">
            <li className="mb-4">Coloque o produto desejado no formulário disponível no site. É importante que cada compra seja registrada no formulário para que o casal possa acompanhar o que já foi comprado pelos convidados.</li>
            <li className="mb-4">Os produtos listados no site são apenas exemplos do que o casal gostaria de ganhar. Caso um convidado encontre o mesmo produto em outra loja por um preço mais barato, ele pode realizar a compra, mas é importante que o produto também seja registrado no formulário.</li>
            <li className="mb-4">Se o convidado não quiser dar nenhum desses produtos que estão listados ele poderá realizar a compra do produto que ele achar melhor para o casal, mas é importante lembrar de registrar o produto no formulário. </li>
          </ol>
        </div>
      
      <p className="text-2xl leading-16 text-black-100 sm:text-1x1 sm:leading-8 mb-8 mt-16">Esses produtos estão disponíveis em diversos Marketplaces. Por favor clique no produto que deseja comprar para ser redirecionado a página do produto para completar sua compra. Assim que o produto for comprado não esqueça de fazer o formulário da página principal.</p>

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
          <option value="Amazon">Amazon</option>
          <option value="Tramontina">Tramontina</option>
          <option value="Submarino">Submarino</option>
          <option value="Casas Bahia">Casas Bahia</option>
          <option value="Electrolux">Electrolux</option>
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
  </div>
)
}


export default Products;