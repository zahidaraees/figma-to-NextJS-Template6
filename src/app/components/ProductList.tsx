// components/ProductList.tsx
export default function ProductList() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
        <div className="border p-4">
          <h2 className="text-xl font-semibold">Product 1</h2>
          <p>Description of product 1</p>
        </div>
        <div className="border p-4">
          <h2 className="text-xl font-semibold">Product 2</h2>
          <p>Description of product 2</p>
        </div>
        <div className="border p-4">
          <h2 className="text-xl font-semibold">Product 3</h2>
          <p>Description of product 3</p>
        </div>
      </div>
    );
  }
  