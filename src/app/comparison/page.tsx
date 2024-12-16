"use client";

import Image from 'next/image';
import { useState } from 'react';
import Footer from "../components/Footer2";
import HeroSection2 from "../components/Herosection2";

const Comparison = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleRedirect = (url: string) => {
    window.location.href = url;
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection2 title="Product Comparison" breadcrumb="Home > Comparison" />

      <div className="container mx-auto p-6">
        {/* Product Information */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          {/* Product 1 */}
          <div className="p-4">
            <Image
              src="/assets/Sofa01.png"
              alt="Asgaard Sofa"
              width={300}
              height={200}
              className="mx-auto"
            />
            <h2 className="text-xl font-bold mt-4 text-center">Asgaard Sofa</h2>
            <p className="text-center text-gray-600">Rs. 250,000.00</p>
          </div>

          {/* Product 2 */}
          <div className="p-4">
            <Image
              src="/assets/Sofa02.png"
              alt="Outdoor Sofa Set"
              width={300}
              height={200}
              className="mx-auto"
            />
            <h2 className="text-xl font-bold mt-4 text-center">Outdoor Sofa Set</h2>
            <p className="text-center text-gray-600">Rs. 224,000.00</p>
          </div>

          {/* Add a Product - Dropdown Button */}
          <div className="flex flex-col justify-center items-center p-4">
            <h2 className="text-xl font-bold mb-4">Add A Product</h2>
            <div className="relative">
              <button
                onClick={handleDropdownToggle}
                className="bg-yellow-500 text-white py-2 px-4 rounded flex items-center justify-between w-56"
              >
                Choose a Product
                <svg
                  className="w-5 h-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white shadow-lg mt-2 w-full py-2 rounded">
                  <button
                    className="block px-4 py-2 text-gray-800 w-full text-left hover:bg-gray-100"
                    onClick={() => handleRedirect('https://example.com/product1')}
                  >
                    Product 1
                  </button>
                  <button
                    className="block px-4 py-2 text-gray-800 w-full text-left hover:bg-gray-100"
                    onClick={() => handleRedirect('https://example.com/product2')}
                  >
                    Product 2
                  </button>
                  <button
                    className="block px-4 py-2 text-gray-800 w-full text-left hover:bg-gray-100"
                    onClick={() => handleRedirect('https://example.com/product3')}
                  >
                    Product 3
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* General Section */}
        <section className="mt-10 border-t border-gray-300 pt-6">
          <h2 className="text-2xl font-bold mb-4">General</h2>
          <div className="grid grid-cols-3">
            <div className="border-r border-gray-300 p-4">Sales Package</div>
            <div className="border-r border-gray-300 p-4">1 sectional sofa</div>
            <div className="p-4">1 Three Seater, 2 Single Seater</div>

            <div className="border-r border-gray-300 p-4">Model Number</div>
            <div className="border-r border-gray-300 p-4">TFCBLIGRBL6SRHS</div>
            <div className="p-4">DTUBLIGRBL568</div>

            <div className="border-r border-gray-300 p-4">Secondary Material</div>
            <div className="border-r border-gray-300 p-4">Solid Wood</div>
            <div className="p-4">Solid Wood</div>

            <div className="border-r border-gray-300 p-4">Configuration</div>
            <div className="border-r border-gray-300 p-4">L-shaped</div>
            <div className="p-4">L-shaped</div>

            <div className="border-r border-gray-300 p-4">Upholstery Material</div>
            <div className="border-r border-gray-300 p-4">Fabric + Cotton</div>
            <div className="p-4">Fabric + Cotton</div>

            <div className="border-r border-gray-300 p-4">Upholstery Color</div>
            <div className="border-r border-gray-300 p-4">Bright Grey & Lion</div>
            <div className="p-4">Bright Grey & Lion</div>
          </div>
        </section>

        {/* Product Section */}
        <section className="mt-10 pt-6">
          <h2 className="text-2xl font-bold mb-4">Product</h2>
          <div className="grid grid-cols-3">
            <div className="border-r border-gray-300 p-4">Filling Material</div>
            <div className="border-r border-gray-300 p-4">Foam</div>
            <div className="p-4">Matte</div>

            <div className="border-r border-gray-300 p-4">Finish Type</div>
            <div className="border-r border-gray-300 p-4">Bright Grey & Lion</div>
            <div className="p-4">Bright Grey & Lion</div>

            <div className="border-r border-gray-300 p-4">Adjustable Headrest</div>
            <div className="border-r border-gray-300 p-4">No</div>
            <div className="p-4">Yes</div>

            <div className="border-r border-gray-300 p-4">Maximum Load Capacity</div>
            <div className="border-r border-gray-300 p-4">280 KG</div>
            <div className="p-4">300 KG</div>

            <div className="border-r border-gray-300 p-4">Origin of Manufacture</div>
            <div className="border-r border-gray-300 p-4">India</div>
            <div className="p-4">India</div>
          </div>
        </section>

        {/* Dimensions Section */}
        <section className="mt-10 pt-6">
          <h2 className="text-2xl font-bold mb-4">Dimensions</h2>
          <div className="grid grid-cols-3">
            <div className="border-r border-gray-300 p-4">Width</div>
            <div className="border-r border-gray-300 p-4">265.32 cm</div>
            <div className="p-4">265.32 cm</div>

            <div className="border-r border-gray-300 p-4">Height</div>
            <div className="border-r border-gray-300 p-4">75 cm</div>
            <div className="p-4">76 cm</div>

            <div className="border-r border-gray-300 p-4">Depth</div>
            <div className="border-r border-gray-300 p-4">167.76 cm</div>
            <div className="p-4">167.76 cm</div>

            <div className="border-r border-gray-300 p-4">Weight</div>
            <div className="border-r border-gray-300 p-4">45 KG</div>
            <div className="p-4">65 KG</div>

            <div className="border-r border-gray-300 p-4">Seat Height</div>
            <div className="border-r border-gray-300 p-4">41.52 cm</div>
            <div className="p-4">41.52 cm</div>
          </div>
        </section>

        {/* Warranty Section */}
        <section className="mt-10 pt-6">
          <h2 className="text-2xl font-bold mb-4">Warranty</h2>
          <div className="grid grid-cols-3">
            <div className="border-r border-gray-300 p-4">Warranty Summary</div>
            <div className="border-r border-gray-300 p-4">1 Year Manufacturing Warranty</div>
            <div className="p-4">1.2 Year Manufacturing Warranty</div>

            <div className="border-r border-gray-300 p-4">Warranty Service Type</div>
            <div className="border-r border-gray-300 p-4">Email support@furniro.com</div>
            <div className="p-4">Email support@xyz.com</div>

            <div className="border-r border-gray-300 p-4">Covered in Warranty</div>
            <div className="border-r border-gray-300 p-4">Manufacturing Defects</div>
            <div className="p-4">Manufacturing Defects</div>

            <div className="border-r border-gray-300 p-4">Not Covered in Warranty</div>
            <div className="border-r border-gray-300 p-4">Damage Due To Misuse</div>
            <div className="p-4">Damage Due To Misuse</div>

            <div className="border-r border-gray-300 p-4">Domestic Warranty</div>
            <div className="border-r border-gray-300 p-4">1 Year</div>
            <div className="p-4">3 Months</div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div></div>
            <button
              className="bg-yellow-500 text-white py-2 px-4 rounded"
              onClick={() => handleRedirect('https://example.com/product2')}
            >
              Add To Cart
            </button>
            <button
              className="bg-yellow-500 text-white py-2 px-4 rounded"
              onClick={() => handleRedirect('https://example.com/product3')}
            >
              Add To Cart
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Comparison;
