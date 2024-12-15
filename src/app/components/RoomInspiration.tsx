// pages/index.tsx

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F5F0]">

      <main className="container mx-auto  px-4 py-10">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center width:1160 height:670 ">
          {/* Left Section */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
              50+ Beautiful rooms inspiration
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Our designer already made a lot of beautiful prototypes of rooms that inspire you.
            </p>
            <button className="mt-6 px-6 py-3 bg-[#B8925E] text-white font-semibold rounded-lg shadow-lg hover:bg-[#997041]">
              Explore More
            </button>
          </div>

          {/* Right Section */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-2">
            {/* First Image with Bottom Overlay */}
            <div className="relative w-full h-full">
              <Image
                src="/assets/Rectangle24.png" 
                alt="Room Inspiration 1"
                width={404}
                height={582}
                className=" object-cover lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 p-4 flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">01 — Bed Room</h2>
                  <p className="text-gray-600">Inner Peace</p>
                </div>
                <button className="px-4 py-2 bg-[#B8925E] text-white font-medium rounded shadow-lg hover:bg-[#997041]">
                  Discover More
                </button>
              </div>
            </div>

            {/* Second Image with Dots Below */}
            <div className="relative">
              <Image
                src="/assets/Rectangle02.png" 
                alt="Room Inspiration 2"
                width={372}
                height={486}
                className="w-full h-60 object-cover rounded-lg shadow-lg"
              />
              <div className="flex justify-center mt-2 space-x-2">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              </div>
            </div>

            {/* Third Image Pixel-Perfect */}
            <div className="relative">
              <Image
                src="/assets/Rectangle03.png" 
                alt="Room Inspiration 3"
                width={372}
                height={486}
                className="w-full h-60 object-cover rounded-lg shadow-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">03 — Dining Room</h2>
                <p className="text-gray-600 mt-2">Elegant Dining</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
