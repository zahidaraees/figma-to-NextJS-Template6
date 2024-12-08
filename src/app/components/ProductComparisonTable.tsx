// components/ProductComparisonTable.tsx
import Image from 'next/image';

const ProductComparisonTable = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-4 text-left">Product</th>
            <th className="py-2 px-4 text-left">Feature 1</th>
            <th className="py-2 px-4 text-left">Feature 2</th>
            <th className="py-2 px-4 text-left">Feature 3</th>
            <th className="py-2 px-4 text-left">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-4 px-4 flex items-center">
              <Image src="/product1.jpg" alt="Product 1" width={50} height={50} />
              <span className="ml-4">Product 1</span>
            </td>
            <td className="py-4 px-4">Feature 1 description</td>
            <td className="py-4 px-4">Feature 2 description</td>
            <td className="py-4 px-4">Feature 3 description</td>
            <td className="py-4 px-4">$199.99</td>
          </tr>
          <tr>
            <td className="py-4 px-4 flex items-center">
              <Image src="/product2.jpg" alt="Product 2" width={50} height={50} />
              <span className="ml-4">Product 2</span>
            </td>
            <td className="py-4 px-4">Feature 1 description</td>
            <td className="py-4 px-4">Feature 2 description</td>
            <td className="py-4 px-4">Feature 3 description</td>
            <td className="py-4 px-4">$249.99</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductComparisonTable;
