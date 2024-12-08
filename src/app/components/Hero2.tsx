// app/page.tsx
import Image from 'next/image'; // For optimized image loading
import ProductList from '../components/ProductList'; // Your product listing component

export default function Hero2() {
  return (
    <div>
      {/* Hero Section */}
      <section className="Hero2">
      <div className="hero-content relative w-full h-64">
    <Image  src="/assets/header-background.png"  width={1440}  height={716.83} alt="Shop" className="w-full h-full object-cover"></Image>
  <div className="absolute inset-0 flex items-center justify-center">
  <h1 className="text-black text-3xl font-semibold p-2 rounded">SHOP</h1>
  <div>
  <h1 className="text-black text-l font-semibold p-1 rounded">Home {'>'} shop </h1></div>
  
  </div>
  
  
  
        </div>
      </section>

      {/* Product List Section */}
      <ProductList />
    </div>


    

  );
}
