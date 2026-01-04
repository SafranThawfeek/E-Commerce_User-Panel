import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ hideSearch = false }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // You can add navigation to search results page or filter products here
    }
  };

  return (
    <nav className="bg-slate-900 text-white px-8 py-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">E-Shop</h1>
        
        {/* Search Bar - Hidden if hideSearch prop is true */}
        {!hideSearch && (
          <form onSubmit={handleSearch} className="flex-1 mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg text-gray-900 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              >
                🔍
              </button>
            </div>
          </form>
        )}

        {/* Icons */}
        <div className="flex gap-4 ml-8">
          <Link to="/cart" title="Cart" className="text-xl hover:text-blue-400">🛒</Link>
          <Link to="/profile" title="Profile" className="text-xl hover:text-blue-400">👤</Link>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6 text-sm">
        <li><Link to="/home" className="hover:text-blue-400">Home</Link></li>
        <li><Link to="/products" className="hover:text-blue-400">Products</Link></li>
        <li><Link to="/cart" className="hover:text-blue-400">Cart</Link></li>
        <li><Link to="/orders" className="hover:text-blue-400">Orders</Link></li>
        <li><Link to="/profile" className="hover:text-blue-400">Profile</Link></li>
        <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
      </ul>
    </nav>
  );
}
