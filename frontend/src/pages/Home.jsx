import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  const bestSellingProducts = [
    {
      id: 1,
      name: "Regular Fit Long Sleeve Top",
      price: "$38.99",
      rating: 5.0,
      image: "https://picsum.photos/300/300?random=11"
    },
    {
      id: 2,
      name: "Black Crop Tailored Jacket",
      price: "$62.99",
      rating: 4.9,
      image: "https://picsum.photos/300/300?random=12"
    },
    {
      id: 3,
      name: "Casual Beige Pants",
      price: "$45.99",
      rating: 4.8,
      image: "https://picsum.photos/300/300?random=13"
    }
  ];

  const allProducts = [
    {
      id: 1,
      name: "Spread Collar Shirt",
      price: "$48.99",
      rating: 5.0,
      image: "https://picsum.photos/300/300?random=21"
    },
    {
      id: 2,
      name: "White Solid Formal Shirt",
      price: "$39.99",
      rating: 4.9,
      image: "https://picsum.photos/300/300?random=22"
    },
    {
      id: 3,
      name: "Shine On Me Blouse",
      price: "$42.99",
      rating: 4.8,
      image: "https://picsum.photos/300/300?random=23"
    },
    {
      id: 4,
      name: "Gray Solid Padded Jacket",
      price: "$32.99",
      rating: 4.7,
      image: "https://picsum.photos/300/300?random=24"
    },
    {
      id: 5,
      name: "Printed Loose T-shirt",
      price: "$39.99",
      rating: 5.0,
      image: "https://picsum.photos/300/300?random=25"
    },
    {
      id: 6,
      name: "Summer Wind Crop Shirt",
      price: "$39.95",
      rating: 4.7,
      image: "https://picsum.photos/300/300?random=26"
    },
    {
      id: 7,
      name: "Beige Cardigan",
      price: "$55.00",
      rating: 4.9,
      image: "https://picsum.photos/300/300?random=27"
    },
    {
      id: 8,
      name: "Solid Round Neck T-shirt",
      price: "$35.00",
      rating: 5.0,
      image: "https://picsum.photos/300/300?random=28"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Emily Wilson",
      feedback: "The customer experience was exceptional, from start to finish. The team was incredibly friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. Highly satisfied!"
    },
    {
      id: 2,
      name: "Sarah Thompson",
      feedback: "I absolutely love the quality and style of the clothing I purchased from this website. Customer service was outstanding, and I received my order quickly. Highly recommend!"
    },
    {
      id: 3,
      name: "Olivia Martinez",
      feedback: "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable, highly satisfied!"
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              NEW <br /> COLLECTION <br /> <span className="text-sm text-gray-600">2025</span>
            </h2>
            <Link to="/products" className="inline-flex items-center gap-2 text-black font-semibold mt-6 hover:text-blue-600 transition">
              Go To Shop <span>→</span>
            </Link>
          </div>

          <div className="flex-1 flex gap-6">
            <img
              src="https://images.unsplash.com/photo-1556821552-5f6fb34caf0f?w=300&h=400&fit=crop"
              alt="Gray Hoodie"
              className="w-40 h-56 object-cover rounded-lg"
              onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop'; }}
            />
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop"
              alt="Black T-shirt"
              className="w-40 h-56 object-cover rounded-lg"
              onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop'; }}
            />
          </div>
        </div>
      </div>

      {/* Best Selling Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-2">Best selling</h2>
          <p className="text-center text-gray-600 mb-12">
            Get in on the trend with our curated selection of best-selling styles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {bestSellingProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-green-400 rounded-lg overflow-hidden h-64 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop'; }}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 font-bold">{product.price}</span>
                  <span className="text-yellow-500 text-sm">⭐ {product.rating}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/products" className="inline-block border-2 border-black px-8 py-2 font-semibold hover:bg-black hover:text-white transition">
              See all →
            </Link>
          </div>
        </div>
      </div>

      {/* Our Products Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {allProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
                <div className="bg-gray-200 h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop'; }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-bold text-sm">{product.price}</span>
                    <span className="text-yellow-500 text-xs">⭐ {product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/products" className="inline-block border-2 border-black px-8 py-2 font-semibold hover:bg-black hover:text-white transition">
              See all →
            </Link>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Feedback Corner</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="p-6 border-l-4 border-gray-400">
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">"{testimonial.feedback}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Social Media</h3>
              <div className="flex gap-4">
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
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-sm text-gray-400">
              © 2025 E-Shop. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
