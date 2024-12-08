// app/page.tsx
import Image from 'next/image'; // For optimized image loading
import ProductList from '../components/ProductList'; // Your product listing component

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
      <div className="hero-content relative w-full h-64">
    <Image  src="/assets/hero.png"  width={1440}  height={716.83} alt="Discover Our New Collection" className="w-full h-full object-cover"></Image>
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-white text-xl font-bold bg-black/50 p-2 rounded" >Discover Our New Collection</h1></div>
        </div>
        
        
      </section>

      {/* Product List Section */}
      <ProductList />
    </div>


    

  );
}
