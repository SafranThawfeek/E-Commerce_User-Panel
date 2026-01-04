import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const products = [
    {
      id: 1,
      name: "Spread Collar Shirt",
      price: "$48.99",
      rating: 5.0,
      image: "https://picsum.photos/400/400?random=1",
      category: "Shirts",
      color: "Blue",
      brand: "Craft Burrow",
      size: "M"
    },
    {
      id: 2,
      name: "White Solid Formal Shirt",
      price: "$39.00",
      rating: 4.9,
      image: "https://picsum.photos/400/400?random=2",
      category: "Shirts",
      color: "White",
      brand: "Zintchy",
      size: "L"
    },
    {
      id: 3,
      name: "Gray Solid Padded Jacket",
      price: "$32.99",
      rating: 4.7,
      image: "https://picsum.photos/400/400?random=3",
      category: "Jackets",
      color: "Gray",
      brand: "Lit Still",
      size: "M"
    },
    {
      id: 4,
      name: "Shine On Me Blouse",
      price: "$42.99",
      rating: 4.8,
      image: "https://picsum.photos/400/400?random=4",
      category: "Blouses",
      color: "Blue",
      brand: "Simple Flavour",
      size: "S"
    },
    {
      id: 5,
      name: "Printed Loose T-shirt",
      price: "$39.99",
      rating: 5.0,
      image: "https://picsum.photos/400/400?random=5",
      category: "T-Shirt",
      color: "Black",
      brand: "Ann Taylor",
      size: "M"
    },
    {
      id: 6,
      name: "Summer Wind Crop Shirt",
      price: "$39.95",
      rating: 4.7,
      image: "https://picsum.photos/400/400?random=6",
      category: "Tops",
      color: "Blue",
      brand: "Haxland",
      size: "XS"
    },
    {
      id: 7,
      name: "Tailored Jacket",
      price: "$46.00",
      rating: 4.9,
      image: "https://picsum.photos/400/400?random=7",
      category: "Jackets",
      color: "Beige",
      brand: "Spuria",
      size: "L"
    },
    {
      id: 8,
      name: "Solid Round Neck T-shirt",
      price: "$36.00",
      rating: 5.0,
      image: "https://picsum.photos/400/400?random=8",
      category: "T-Shirt",
      color: "Brown",
      brand: "Ly Vy",
      size: "M"
    },
    {
      id: 9,
      name: "Beige Cardigan",
      price: "$55.00",
      rating: 4.9,
      image: "https://picsum.photos/400/400?random=9",
      category: "Tops",
      color: "Beige",
      brand: "Craft Burrow",
      size: "M"
    },
    {
      id: 10,
      name: "Black Crop Tailored Jacket",
      price: "$62.99",
      rating: 4.9,
      image: "https://picsum.photos/400/400?random=10",
      category: "Jackets",
      color: "Black",
      brand: "Zintchy",
      size: "S"
    }
  ];

  const categories = ["T-Shirt", "Tops", "Shirts", "Blouses", "Jackets"];
  const colors = ["Blue", "Black", "Beige", "Brown", "Gray", "Red", "White", "Navy Blue"];
  const brands = ["Craft Burrow", "Zintchy", "Lit Still", "Simple Flavour", "Ann Taylor", "Haxland", "Spuria", "Ly Vy"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];
  const priceRanges = ["$20 - $35", "$35 - $40", "$40 - $45", "$45 - $50"];

  const toggleFilter = (item, selectedArray, setSelectedArray) => {
    if (selectedArray.includes(item)) {
      setSelectedArray(selectedArray.filter(i => i !== item));
    } else {
      setSelectedArray([...selectedArray, item]);
    }
  };

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Be the Best Wear the Best</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6 flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">CATEGORY</h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategory.includes(cat)}
                        onChange={() => toggleFilter(cat, selectedCategory, setSelectedCategory)}
                        className="w-4 h-4 rounded"
                      />
                      <span className="text-sm text-gray-700">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">COLOR</h3>
                <div className="space-y-3">
                  {colors.map((color) => {
                    const colorMap = {
                      Blue: "bg-blue-500",
                      Black: "bg-black",
                      Beige: "bg-yellow-100",
                      Brown: "bg-amber-700",
                      Gray: "bg-gray-500",
                      Red: "bg-red-500",
                      White: "bg-white border-2 border-gray-300",
                      "Navy Blue": "bg-blue-900"
                    };
                    return (
                      <label key={color} className="flex items-center gap-3 cursor-pointer">
                        <div className="flex items-center">
                          <div className={`w-4 h-4 rounded-full ${colorMap[color]}`}></div>
                          <input
                            type="checkbox"
                            checked={selectedColor.includes(color)}
                            onChange={() => toggleFilter(color, selectedColor, setSelectedColor)}
                            className="w-4 h-4 ml-2 rounded"
                          />
                        </div>
                        <span className="text-sm text-gray-700">{color}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Brand Filter */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">BRAND</h3>
                <div className="space-y-3">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedBrand.includes(brand)}
                        onChange={() => toggleFilter(brand, selectedBrand, setSelectedBrand)}
                        className="w-4 h-4 rounded"
                      />
                      <span className="text-sm text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">SIZES</h3>
                <div className="space-y-3">
                  {sizes.map((size) => (
                    <label key={size} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedSize.includes(size)}
                        onChange={() => toggleFilter(size, selectedSize, setSelectedSize)}
                        className="w-4 h-4 rounded"
                      />
                      <span className="text-sm text-gray-700">{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">PRICE</h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <label key={range} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedPrice.includes(range)}
                        onChange={() => toggleFilter(range, selectedPrice, setSelectedPrice)}
                        className="w-4 h-4 rounded"
                      />
                      <span className="text-sm text-gray-700">{range}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  productName={product.name}
                  productPrice={product.price.replace('$', '')} // Remove '$' for consistency if price is a number
                  image={product.image}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <button className="p-2 border border-gray-300 rounded hover:bg-gray-200 transition">
                &lt;
              </button>
              <button className="w-10 h-10 bg-gray-400 text-white rounded flex items-center justify-center">
                {currentPage}
              </button>
              <button className="p-2 border border-gray-300 rounded hover:bg-gray-200 transition">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Social Media</h3>
              <div className="flex gap-4 text-sm">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">f</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">𝕏</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">📷</a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">SHOP</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/products" className="hover:text-blue-400">Products</Link></li>
                <li><Link to="/products" className="hover:text-blue-400">Overview</Link></li>
                <li><Link to="/pricing" className="hover:text-blue-400">Pricing</Link></li>
                <li><Link to="/releases" className="hover:text-blue-400">Releases</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">COMPANY</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
                <li><Link to="/news" className="hover:text-blue-400">News</Link></li>
                <li><Link to="/support" className="hover:text-blue-400">Support</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">STAY UP TO DATE</h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-black text-sm rounded"
                />
                <button className="bg-gray-600 px-4 py-2 font-semibold rounded hover:bg-gray-700 transition">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
