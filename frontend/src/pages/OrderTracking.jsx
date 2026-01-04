import { useState } from "react";
import Navbar from "../components/Navbar";

export default function OrderTracking() {
  const [searchOrderId, setSearchOrderId] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Mock order tracking data
  const orderData = {
    id: "3354654654526",
    date: "Feb 16, 2022",
    estimatedDelivery: "May 16, 2022",
    timeline: [
      {
        status: "Order Confirmed",
        date: "Wed, 1 th Jan",
        completed: true,
        current: false
      },
      {
        status: "Shipped",
        date: "Wed, 1 tth Jan",
        completed: true,
        current: true
      },
      {
        status: "Out For Delivery",
        date: "Wed, 1 th Jan",
        completed: false,
        current: false
      },
      {
        status: "Delivered",
        date: "Expected by, Mon 16th",
        completed: false,
        current: false
      }
    ]
  };

  const handleSearch = () => {
    if (searchOrderId) {
      setSelectedOrder(orderData);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-b from-purple-50 to-gray-50 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-6">
          {!selectedOrder ? (
            // Search Interface
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Track Your Order
              </h1>
              <p className="text-gray-600 mb-8">
                Enter your order ID to track your shipment
              </p>

              <div className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={searchOrderId}
                    onChange={(e) => setSearchOrderId(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter Order ID"
                    className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition"
                  />
                  <button
                    onClick={handleSearch}
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition"
                  >
                    Track
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // Order Tracking Details
            <div>
              {/* Header */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      Order ID: {selectedOrder.id}
                    </h1>
                    <div className="flex gap-6 text-sm">
                      <div>
                        <span className="text-gray-600">Order date:</span>
                        <span className="font-semibold text-gray-900 ml-2">
                          {selectedOrder.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">📦</span>
                        <span className="text-gray-600">Estimated delivery:</span>
                        <span className="font-semibold text-green-600">
                          {selectedOrder.estimatedDelivery}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedOrder(null)}
                    className="text-gray-600 hover:text-gray-900 text-2xl"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute top-8 left-0 right-0 h-1 bg-gray-300 -z-10">
                    <div
                      className="h-full bg-green-500 transition-all duration-500"
                      style={{
                        width: `${
                          (selectedOrder.timeline.filter((t) => t.completed).length /
                            selectedOrder.timeline.length) *
                          100
                        }%`
                      }}
                    />
                  </div>

                  {/* Timeline Items */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {selectedOrder.timeline.map((item, idx) => (
                      <div key={idx} className="relative">
                        {/* Circle */}
                        <div className="flex justify-center mb-4">
                          <div
                            className={`w-6 h-6 rounded-full border-4 transition-all ${
                              item.completed
                                ? "bg-green-500 border-green-500"
                                : item.current
                                ? "bg-gray-400 border-gray-400 animate-pulse"
                                : "bg-white border-gray-300"
                            }`}
                          />
                        </div>

                        {/* Content */}
                        <div className="text-center">
                          <h3
                            className={`font-bold text-sm mb-2 transition ${
                              item.completed || item.current
                                ? "text-green-600"
                                : "text-gray-600"
                            }`}
                          >
                            {item.status}
                          </h3>
                          <p className="text-xs text-gray-500">
                            {item.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Current Status Message */}
                <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    📍 Current Status
                  </h3>
                  <p className="text-gray-700">
                    Your order is currently <span className="font-bold text-blue-600">Shipped</span> and is on its way to you. 
                    You can expect to receive it by <span className="font-bold">{selectedOrder.estimatedDelivery}</span>.
                  </p>
                </div>

                {/* Additional Info */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      📦 Package Details
                    </h4>
                    <p className="text-sm text-gray-600">
                      Tracking Number: <span className="font-mono font-semibold">{selectedOrder.id}</span>
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      🚚 Carrier
                    </h4>
                    <p className="text-sm text-gray-600">
                      FastShip Express
                    </p>
                  </div>
                </div>

                {/* Back Button */}
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="w-full mt-8 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition"
                >
                  Track Another Order
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
