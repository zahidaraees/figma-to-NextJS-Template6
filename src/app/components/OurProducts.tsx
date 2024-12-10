// components/ProductList.tsx it will display list of product items. 
import Image from "next/image";
export default function Ourproducts() {
  return (
    <div>
    

      <div className="font-[sans-serif] bg-gray-100 ">
        <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full ">
          
          <h2 className="flex justify-center text-4xl font-extrabold text-gray-800">
            Our Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
            <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img
                  src="../assets/Item01.png"
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-gray-800">
                  Syltherine
                </h3>
                <p className="text-gray-600 text-sm mt-2">Stylish cafe chair</p>
                <h4 className="text-lg text-gray-800 font-bold mt-4">
                  Rp 2,500,000 <s>Rp 3500,000</s>
                </h4>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img
                  src="../assets/product02.png"
                  alt="Product 2"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-gray-800">
                  Leviosa
                </h3>
                <p className="text-gray-600 text-sm mt-2">Stylish cafe chair</p>
                <h4 className="text-lg text-gray-800 font-bold mt-4">
                  Rp 2,500,000
                </h4>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img
                  src="../assets/product03.png"
                  alt="Product 3"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-gray-800">Lolito</h3>
                <p className="text-gray-600 text-sm mt-2">Luxury big sofa</p>
                <h4 className="text-lg text-gray-800 font-bold mt-4">
                  Rp 7,000,000 <s>Rp 14,000.000</s>
                </h4>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
              <div ></div>

              <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img
                  src="../assets/product04a.png"
                  alt="Product 4"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-gray-800">
                  Respira
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Outdoor bar table and stool
                </p>
                <h4 className="text-lg text-gray-800 font-bold mt-4">
                  Rp 500,000
                </h4>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img
                  src="../assets/product04.png"
                  alt="Product 3"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-gray-800">
                  Grifo
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Night Lamp
                </p>
                <h4 className="text-lg text-gray-800 font-bold mt-4">Rp 1,500,000</h4>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img
                  src="../assets/product05.png"
                  alt="Product 3"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-gray-800">
                  Muggo
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Small Mug
                </p>
                <h4 className="text-lg text-gray-800 font-bold mt-4">Rp 150,000</h4>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img
                  src="../assets/product07.png"
                  alt="Product 3"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-gray-800">Pingky</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Cute bed set
                </p>
                <h4 className="text-lg text-gray-800 font-bold mt-4">Rp 7,000,000</h4>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img
                  src="../assets/product08.png"
                  alt="Product 3"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-gray-800">
                  Potty
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Minimal Flower Pot
                </p>
                <h4 className="text-lg text-gray-800 font-bold mt-4">Rp 500,000</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
