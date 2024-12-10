// components/ProductList.tsx
import Image from "next/image";
export default function ProductList() {
  return (
    <div>
      <h1>Browse the Range</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 p-6">
        <div className="border p-4">
          <img src="../assets/dining.png" className="w-full" />
          <h2 className="text-xl font-semibold">Dining</h2>
        </div>
        <div className="border p-4">
          <img src="../assets/Image-living room.png" className="w-full" />
          <h2 className="text-xl font-semibold">Living</h2>
        </div>

        <div className="border p-4">
          <img src="../assets/bedroom.png" className="w-full" />
          <h2 className="text-xl font-semibold">Bedroom</h2>
        </div>

        <h1>Our Products</h1>
      <div className="border p-4">
          <img src="../assets/dining.png" className="w-full" />
          <h2 className="text-xl font-semibold">Dining</h2>
        </div>
        <div className="border p-4">
          <img src="../assets/Image-living room.png" className="w-full" />
          <h2 className="text-xl font-semibold">Living</h2>
        </div>

        <div className="border p-4">
          <img src="../assets/bedroom.png" className="w-full" />
          <h2 className="text-xl font-semibold">Bedroom</h2>
        </div>
        
      </div>
      
    </div>

  );
}
