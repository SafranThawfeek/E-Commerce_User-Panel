import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Checkout() {
  const [activeTab, setActiveTab] = useState("information");
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    address1: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    cvv: "",
    cardName: "",
    expiry: ""
  });

  const orderItems = [
    {
      id: 1,
      name: "Basic Heavy T-Shirt",
      color: "Black",
      size: "L",
      quantity: 1,
      price: 99,
      image: "https://picsum.photos/150/150?random=1"
    },
    {
      id: 2,
      name: "Basic Fit T-Shirt",
      color: "Black",
      size: "L",
      quantity: 1,
      price: 99,
      image: "https://picsum.photos/150/150?random=2"
    }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      <Navbar hideSearch={true} />

      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back Button */}
          <Link
            to="/cart"
            className="inline-flex items-center text-gray-900 hover:text-gray-600 mb-8"
          >
            <span className="text-2xl">←</span>
          </Link>

          {/* Page Title */}
          <h1 className="text-5xl font-black text-gray-900 mb-12">CHECKOUT</h1>

          {/* Tab Navigation */}
          <div className="flex gap-12 mb-12 border-b">
            <button
              onClick={() => setActiveTab("information")}
              className={`pb-4 font-semibold transition ${
                activeTab === "information"
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-400"
              }`}
            >
              INFORMATION
            </button>
            <button
              onClick={() => setActiveTab("payment")}
              className={`pb-4 font-semibold transition ${
                activeTab === "payment"
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-400"
              }`}
            >
              PAYMENT
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Form */}
            <div className="lg:col-span-2">
              {/* INFORMATION TAB */}
              {activeTab === "information" && (
                <div className="space-y-8">
                  {/* Contact Info */}
                  <div>
                    <h2 className="text-sm font-bold text-gray-900 mb-4">
                      CONTACT INFO
                    </h2>
                    <div className="space-y-4">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className="w-full border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-gray-900"
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone"
                        className="w-full border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-gray-900"
                      />
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div>
                    <h2 className="text-sm font-bold text-gray-900 mb-4">
                      SHIPPING ADDRESS
                    </h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="First Name"
                          className="border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-gray-900"
                        />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Last Name"
                          className="border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-gray-900"
                        />
                      </div>

                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-gray-900"
                      >
                        <option value="">Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                      </select>

                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="State / Region"
                        className="w-full border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-gray-900"
                      />

                      <input
                        type="text"
                        name="address1"
                        value={formData.address1}
                        onChange={handleInputChange}
                        placeholder="Line 1"
                        className="w-full border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-gray-900"
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="City"
                          className="border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-gray-900"
                        />
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          placeholder="Postal Code"
                          className="border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-gray-900"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Proceed to Payment */}
                  <button
                    onClick={() => setActiveTab("payment")}
                    className="flex items-center gap-3 bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold px-6 py-3 rounded transition"
                  >
                    Proceed to Payment <span>→</span>
                  </button>
                </div>
              )}

              {/* PAYMENT TAB */}
              {activeTab === "payment" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-sm font-bold text-gray-900 mb-4">
                      ADD CARD
                    </h2>
                    <div className="space-y-4">
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="Card number"
                        className="w-full border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-gray-900"
                      />
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="CVV"
                        className="w-full border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-gray-900"
                      />
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        placeholder="Name on card"
                        className="w-full border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-gray-900"
                      />
                      <input
                        type="text"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleInputChange}
                        placeholder="Expiry"
                        className="w-full border border-gray-300 px-4 py-3 rounded text-sm focus:outline-none focus:border-gray-900"
                      />
                    </div>
                  </div>

                  {/* Complete Payment */}
                  <Link
                    to="/orders"
                    className="flex items-center gap-3 bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold px-6 py-3 rounded transition"
                  >
                    Payment <span>→</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Right Side - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-gray-900">YOUR ORDER</h2>
                  <span className="text-sm text-blue-600 font-semibold">
                    ({orderItems.length})
                  </span>
                </div>

                {/* Order Items */}
                <div className="space-y-6 pb-6 border-b border-gray-200 mb-6">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-600 mb-2">
                          {item.color}/{item.size}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">
                            ({item.quantity})
                          </span>
                          <span className="text-sm font-bold text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <button className="text-sm text-blue-600 hover:text-blue-800 font-semibold">
                        Change
                      </button>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Subtotal</span>
                    <span className="font-semibold text-gray-900">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Shipping</span>
                    <span className="text-xs text-gray-500">
                      Calculated at next step
                    </span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gray-200 text-base font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
