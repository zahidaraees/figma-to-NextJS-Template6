import ProductList from '../components/ProductList';
import Hero2 from '../components/Hero2';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Shop = () => {
  return (
    <div>
      
      <Hero2 />
      <ProductList />
      
      <main className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Repeat ProductCard as necessary */}
        </div>
      </main>
      

    </div>
  );
};

export default Shop;
