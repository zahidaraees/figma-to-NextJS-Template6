// components/ProductCard.tsx
import Image from 'next/image';

type ProductCardProps = {
  image: string;
  title: string;
  price: string;
};

const ProductCard = ({ image, title, price }: ProductCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image src={image} alt={title} width={300} height={300} className="object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-xl font-bold text-blue-600">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
