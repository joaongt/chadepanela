import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
import React from 'react'

 const Home = () => {
  
  const [showForm, setShowForm] = useState(false);
  function handleShowForm() {
    setShowForm(true);
  }
    function handleCloseForm() {
    setShowForm(false);
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add code to handle the form submission and remove the product from the list of products to buy
  };


  return (
      <div className="flex items-center justify-center h-full">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center h-screen">
          <Image
            className="rounded shadow-md mb-6"
            src="/images/main.jpg"
            width="200"
            height="200"
            alt="Wedding Photo"
          />
          <h1 className="text-4xl font-extrabold text-gray-900">Chá de panela do casal</h1>
          <p className="mt-3 text-xl text-gray-500 max-w-lg text-center">
            Clique no botão abaixo para olhar nossa lista de produtos para dar de presente. Por favor, leiam as instruções primeiro antes de comprar.
          </p>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 absolute top-4 right-3 text-2xl cursor-pointer hover:bg-pink-700" onClick={handleShowForm}>Formulário</button>
          {showForm ? (
            <div className="rounded-3xl absolute sm:px-24 sm:py-14 bg-pink-200 flex justify-center items-center">
            <><React.Fragment>
              
              <button className="absolute top-4 right-3 text-2xl cursor-pointer" onClick={handleCloseForm}>
                <a >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M16.707,16.293c0.391,0.391,0.391,1.023,0,1.414c-0.391,0.391-1.023,0.391-1.414,0L10,11.414l-5.293,5.293c-0.391,0.391-1.023,0.391-1.414,0c-0.391-0.391-0.391-1.023,0-1.414L8.586,10L3.293,4.707c-0.391-0.391-0.391-1.023,0-1.414c0.391-0.391,1.023-0.391,1.414,0L10,8.586l5.293-5.293c0.391-0.391,1.023-0.391,1.414,0c0.391,0.391,0.391,1.023,0,1.414L11.414,10l5.293,5.293C17.098,15.27,17.098,15.902,16.707,16.293z" />
                  </svg>
                </a>
              </button>
              
            </React.Fragment><div className="relative">
                <form onSubmit={handleFormSubmit} className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="product">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="product"
                    id="product"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />
                  <button
                    type="submit"
                    className="flex items-center w-full justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-200"
                  >Enviar</button>
                </form>

              </div></></div>
               ) : (
                <div className="mb-4"></div>
                  // other content to display if showForm is false
              )}
          <div className="mt-6">
            <Link href="/products" legacyBehavior>
              <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700">
                Compre um presente!
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;