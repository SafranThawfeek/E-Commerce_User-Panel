import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: "ABSTRACT PRINT SHIRT",
    price: 99,
    description: "Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.",
    mainImage: "https://picsum.photos/600/700?random=1",
    images: [
      "https://picsum.photos/200/250?random=1",
      "https://picsum.photos/200/250?random=2",
      "https://picsum.photos/200/250?random=3",
      "https://picsum.photos/200/250?random=4",
      "https://picsum.photos/200/250?random=5",
      "https://picsum.photos/200/250?random=6"
    ],
    colors: [
      { name: "Gray", hex: "#D3D3D3" },
      { name: "Dark Gray", hex: "#808080" },
      { name: "Black", hex: "#000000" },
      { name: "Mint", hex: "#98FF98" },
      { name: "Lavender", hex: "#B19CD9" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2X"],
    rating: 4.8,
    reviews: 124
  };

  return (
    <>
      <Navbar hideSearch={true} />

      {/* Page Content */}
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Product Images */}
            <div className="flex gap-6">
              {/* Thumbnail Images */}
              <div className="flex flex-col gap-4">
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="w-24 h-32 bg-white rounded border-2 border-gray-300 overflow-hidden cursor-pointer hover:border-gray-500 transition"
                  >
                    <img
                      src={img}
                      alt={`View ${idx + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1503342394128-c104cbb9810d?w=200&h=250&fit=crop";
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 bg-white rounded-lg overflow-hidden">
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1503342394128-c104cbb9810d?w=600&h=700&fit=crop";
                  }}
                />
              </div>
            </div>

            {/* Right - Product Details */}
            <div className="bg-white p-8 rounded-lg">
              {/* Wishlist Icon */}
              <div className="flex justify-end mb-4">
                <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition">
                  ♡
                </button>
              </div>

              {/* Product Title */}
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

              {/* Price */}
              <div className="mb-6">
                <p className="text-2xl font-bold text-gray-900 mb-1">${product.price}</p>
                <p className="text-sm text-gray-600">MRP incl. of all taxes</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Color</h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full border-2 transition ${
                        selectedColor === color.name
                          ? "border-gray-900"
                          : "border-gray-300"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Size</h3>
                <div className="flex gap-3 mb-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border-2 rounded font-semibold transition ${
                        selectedSize === size
                          ? "border-gray-900 bg-gray-900 text-white"
                          : "border-gray-300 text-gray-900 hover:border-gray-900"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2 text-xs text-gray-600">
                  <Link to="/size" className="underline hover:text-gray-900">FIND YOUR SIZE</Link>
                  <span>|</span>
                  <Link to="/measurement-guide" className="underline hover:text-gray-900">MEASUREMENT GUIDE</Link>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center border border-gray-300 rounded w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold py-3 rounded transition mb-4">
                ADD
              </button>

              {/* Additional Info */}
              <div className="border-t pt-6 mt-6 space-y-4 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex justify-between">
                  <span>Returns</span>
                  <span>30-day return policy</span>
                </div>
                <div className="flex justify-between">
                  <span>Care</span>
                  <span>Machine wash cold</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((idx) => (
                <Link
                  key={idx}
                  to="/products"
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group"
                >
                  <div className="bg-gray-200 h-48 overflow-hidden">
                    <img
                      src={`https://picsum.photos/300/300?random=${idx + 10}`}
                      alt={`Related ${idx}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      onError={(e) => { e.currentTarget.src = 'https://picsum.photos/300/300?random=999'; }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm mb-2">
                      Related Product {idx}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900">${79 + idx * 5}</span>
                      <span className="text-yellow-500 text-xs">⭐ 4.{7 + idx}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
