import Footer2 from "../components/Footer2";
import HeroSection2 from "../components/Herosection2";
import OurProducts from "../components/OurProducts";


export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection2 title="Shop" breadcrumb="Home > Shop" />

      {/* Filter & Sorting Section */}
      <section className="filter-section py-6 px-4 border-b" style={{ backgroundColor: "#FAF3EA" }}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Filter Button with Icons */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
             {/* Left Filter Icon */}
              <span className="font-semibold">Filter</span>
            {/* Small Circle Icon */}
            </button>
            <span className="text-gray-600">Showing 1–16 of 32 results</span>
          </div>

          {/* Show Textbox and Sort Dropdown */}
          <div className="flex items-center space-x-4">
            {/* Show Section */}
            <div className="flex items-center space-x-2">
              <label htmlFor="show" className="text-gray-600">Show</label>
              <input
                type="text"
                id="show"
                defaultValue="16"
                className="w-14 border border-gray-300 rounded-md px-2 py-1 text-center"
              />
            </div>

            {/* Sort By Section */}
            <div className="flex items-center space-x-2">
              <label htmlFor="sorting" className="text-gray-600">Short by</label>
              <select
                id="sorting"
                className="border border-gray-300 rounded-md px-2 py-1"
              >
                <option value="default">Default</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <OurProducts />

      {/* Pagination Section */}
      <section className="pagination-section text-center my-8">
        <button className="mx-1 px-4 py-2 bg-gold rounded text-white">1</button>
        <button className="mx-1 px-4 py-2 bg-gray-200 rounded">2</button>
        <button className="mx-1 px-4 py-2 bg-gray-200 rounded">3</button>
        <button className="mx-1 px-4 py-2 bg-gray-200 rounded">Next</button>
      </section>


      {/* Footer */}
      <Footer2 />
    </div>
  );
}
