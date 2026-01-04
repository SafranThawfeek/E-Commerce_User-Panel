import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Full Sleeve Zipper",
      category: "Cotton T Shirt",
      price: 99,
      size: "L",
      color: "Black",
      quantity: 1,
      image: "https://images.unsplash.com/photo-1503342394128-c104cbb9810d?w=300&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Basic Slim Fit T-Shirt",
      category: "Cotton T Shirt",
      price: 99,
      size: "L",
      color: "Black",
      quantity: 1,
      image: "https://images.unsplash.com/photo-1516834611649-78defb549629?w=300&h=400&fit=crop"
    }
  ]);

  const [agreeTerms, setAgreeTerms] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  const updateQuantity = (id, quantity) => {
    if (quantity > 0) {
      setCartItems(
        cartItems.map(item => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Shopping Bag Header */}
          <h1 className="text-2xl font-bold text-gray-900 mb-8">SHOPPING BAG</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items - Left Side */}
            <div className="lg:col-span-2">
              {cartItems.length > 0 ? (
                <div className="space-y-6 border-b pb-8">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-6 bg-white p-6 rounded-lg"
                    >
                      {/* Product Image */}
                      <div className="w-32 h-48 flex-shrink-0 overflow-hidden rounded border border-gray-200">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop'; }}
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="text-sm text-gray-600">{item.category}</p>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {item.name}
                            </h3>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-gray-600 text-xl"
                          >
                            ✕
                          </button>
                        </div>

                        {/* Color and Size */}
                        <div className="flex gap-6 mb-4">
                          <div>
                            <p className="text-xs text-gray-600 mb-2">Color</p>
                            <div
                              className="w-6 h-6 rounded border border-gray-300"
                              style={{
                                backgroundColor:
                                  item.color === "Black"
                                    ? "#000000"
                                    : item.color === "White"
                                    ? "#FFFFFF"
                                    : "#D3D3D3"
                              }}
                            />
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-2">Size</p>
                            <p className="text-sm font-semibold text-gray-900">
                              {item.size}
                            </p>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="mb-4">
                          <p className="text-xs text-gray-600 mb-2">Quantity</p>
                          <div className="flex items-center border border-gray-300 rounded w-fit">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              −
                            </button>
                            <span className="px-4 py-1 text-sm font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="mt-auto">
                          <p className="text-lg font-bold text-gray-900">
                            $ {(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-12 rounded-lg text-center">
                  <p className="text-gray-600 text-lg mb-6">Your shopping bag is empty</p>
                  <Link
                    to="/products"
                    className="inline-block bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800 transition"
                  >
                    Continue Shopping
                  </Link>
                </div>
              )}
            </div>

            {/* Order Summary - Right Side */}
            {cartItems.length > 0 && (
              <div className="lg:col-span-1">
                <div className="bg-white p-8 rounded-lg sticky top-24">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    ORDER SUMMARY
                  </h2>

                  {/* Subtotal */}
                  <div className="flex justify-between mb-3 pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Subtotal</span>
                    <span className="font-semibold text-gray-900">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  {/* Shipping */}
                  <div className="flex justify-between mb-6 pb-6 border-b border-gray-200">
                    <span className="text-gray-700">Shipping</span>
                    <span className="font-semibold text-gray-900">
                      ${shipping.toFixed(2)}
                    </span>
                  </div>

                  {/* Total */}
                  <div className="flex justify-between mb-6">
                    <span className="text-gray-900 font-semibold">
                      TOTAL <span className="text-xs text-gray-600">(TAX INCL.)</span>
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  {/* Terms Checkbox */}
                  <label className="flex items-start gap-3 mb-6 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="w-4 h-4 mt-1 rounded border-gray-300"
                    />
                    <span className="text-xs text-gray-700">
                      I agree to the Terms and Conditions
                    </span>
                  </label>

                  {/* Continue Button */}
                  <Link
                    to="/checkout"
                    className={`w-full py-3 rounded font-bold text-center transition ${
                      agreeTerms
                        ? "bg-gray-400 hover:bg-gray-500 text-gray-900 cursor-pointer"
                        : "bg-gray-200 text-gray-600 cursor-not-allowed"
                    }`}
                  >
                    CONTINUE
                  </Link>

                  {/* Continue Shopping Link */}
                  <Link
                    to="/products"
                    className="block text-center text-sm text-gray-600 hover:text-gray-900 mt-4 transition"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
