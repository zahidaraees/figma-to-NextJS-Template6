// Page of Cart 
"use client";
import Footer2 from '../components/Footer2';
import Image from 'next/image';
import { useState } from 'react';
import HeroSection2 from '../components/Herosection2';

export default function Cart() {
  

  
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Asgaard sofa',
      price: 250000,
      quantity: 1,
      image: '/assets/asgaard-sofa.png', // Ensure this file exists in the public/assets folder
    },
  ]);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleQuantityChange = (id:number, quantity:number) => {
    
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <div> 

      <div> 
          <HeroSection2 
              title="Cart" 
              breadcrumb="Home > Cart" 
            />

      </div>
    <div className="font-sans bg-gray-50">
      

      <main className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-4">Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <div
              className="hidden md:grid grid-cols-5 font-bold text-gray-700 mb-2"
              style={{ backgroundColor: '#FAF3EA' }}
            >
              <span></span>

              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-5 items-center p-4 bg-white shadow-md rounded-lg mb-4"
              >
                {/* Product Image with Background Color */}
                <div
                  className="flex justify-center p-2 rounded-md"
                  style={{ backgroundColor: '#FAF3EA' }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                </div>
                {/* Product Name */}
                <div className="ml-4">
                  <h2 className="text-lg font-semibold md:text-left text-center">
                    {item.name}
                  </h2>
                </div>
                {/* Product Price */}
                <div className="text-center md:text-left">
                  <p className="text-gray-600">
                    Rs. {item.price.toLocaleString()}
                  </p>
                </div>
                {/* Product Quantity */}
                <div className="flex justify-center">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value, 10))
                    }
                    className="w-16 border rounded-md text-center"
                    min="1"
                  />
                </div>
                {/* Subtotal */}
                <div className="text-center md:text-left font-bold">
                  <p>Rs. {(item.price * item.quantity).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Total Section */}
          <div
            className="p-4 shadow-md rounded-lg"
            style={{ backgroundColor: '#FAF3EA' }}
          >
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>
            <button className="w-full text-black border-2 py-2 rounded-md hover:bg-yellow-100">
              Check Out
            </button>
          </div>
        </div>
        
      </main>

      <Footer2 />
    </div>
    </div>    
  );
}
