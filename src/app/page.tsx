import Image from "next/image";
import Header from '../app/components/Header';
import Hero from '../app/components/Hero';
import ProductList from '../app/components/ProductList';
import Footer from '../app/components/Footer';


export default function Home() {
  return (
    <div>
      
      <Hero />
      <ProductList />
      
    </div>
  );
}


