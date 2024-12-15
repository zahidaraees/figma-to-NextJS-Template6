import ProductList from "../app/components/ProductList";
import Ourproducts from "../app/components/OurProducts";
import HeroSection from "./components/HeroSection"; // for landing page
import RoomInspiration from "../app/components/RoomInspiration"
import ImageGallery from "./components/ImageGallery";


export default function Home() {
  return (
    <div>
      
      <HeroSection />
      <ProductList />
      <Ourproducts />
      <RoomInspiration />
      <ImageGallery />
      


      

    </div>
  );
}
