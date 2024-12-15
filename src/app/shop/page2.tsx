// app/shop/page.tsx

import Footer2 from "../components/Footer2";
import HeroSection2 from "../components/Herosection2";
import OurProducts from "../components/OurProducts";

export default function Page() {
  return (
    <div>
    <HeroSection2 
      title="Shop" 
      breadcrumb="Home > Shop" 
    />
    <OurProducts />
    <Footer2 />
    
    </div>


  );
  
}
