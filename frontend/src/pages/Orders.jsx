import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Orders() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedOrder, setExpandedOrder] = useState(null);

  const orders = [
    {
      id: "234567AB12",
      date: "2025.08.01",
      total: 450,
      status: "Processing",
      statusColor: "bg-yellow-200 text-yellow-800",
      items: [
        {
          name: "White Solid Formal Shirt",
          price: 25,
          quantity: 5,
          image: "https://images.unsplash.com/photo-1589985643453-0cf4663a4c52?w=100&h=100&fit=crop"
        },
        {
          name: "Tailored Jacket",
          price: 250,
          quantity: 5,
          image: "https://images.unsplash.com/photo-1539533057440-7da542b84cb7?w=100&h=100&fit=crop"
        }
      ]
    },
    {
      id: "234567AB12",
      date: "2025.08.01",
      total: 4500,
      status: "Cancelled",
      statusColor: "bg-red-200 text-red-800",
      items: [
        {
          name: "Premium T-Shirt",
          price: 99,
          quantity: 10,
          image: "https://images.unsplash.com/photo-1503342394128-c104cbb9810d?w=100&h=100&fit=crop"
        }
      ]
    },
    {
      id: "234567AB14",
      date: "2025.08.03",
      total: 450,
      status: "Delivered",
      statusColor: "bg-green-200 text-green-800",
      items: [
        {
          name: "Basic Slim Fit T-Shirt",
          price: 99,
          quantity: 5,
          image: "https://images.unsplash.com/photo-1516834611649-78defb549629?w=100&h=100&fit=crop"
        }
      ]
    },
    {
      id: "234567AB12",
      date: "2025.08.01",
      total: 450,
      status: "Shipped",
      statusColor: "bg-blue-200 text-blue-800",
      items: [
        {
          name: "Casual Shirt",
          price: 79,
          quantity: 6,
          image: "https://images.unsplash.com/photo-1596777684687-d990588326d0?w=100&h=100&fit=crop"
        }
      ]
    }
  ];

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "Processing":
        return "bg-yellow-200 text-yellow-800";
      case "Shipped":
        return "bg-blue-200 text-blue-800";
      case "Delivered":
        return "bg-green-200 text-green-800";
      case "Cancelled":
        return "bg-red-200 text-red-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Search Bar */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search order id"
                className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-gray-900 text-sm"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900">
                🔍
              </button>
            </div>
          </div>

          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Your Order History
          </h1>

          {/* Orders List */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm">
                  {/* Order Header */}
                  <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Order Id:</p>
                        <p className="font-bold text-gray-900">ID:</p>
                        <p className="font-bold text-gray-900">{order.id}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Order Date:</p>
                        <p className="font-bold text-gray-900">{order.date}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Total:</p>
                        <p className="font-bold text-gray-900">${order.total}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Status:</p>
                        <span
                          className={`inline-block px-4 py-1 rounded-full text-xs font-semibold ${getStatusBadgeColor(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() =>
                          setExpandedOrder(expandedOrder === idx ? null : idx)
                        }
                        className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded font-semibold transition flex items-center gap-2"
                      >
                        View Details
                        <span
                          className={`transition-transform ${
                            expandedOrder === idx ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Order Items - Expandable */}
                  {expandedOrder === idx && (
                    <div className="border-t border-gray-200 p-6 bg-gray-50">
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Items in this order:
                      </h3>
                      <div className="space-y-4">
                        {order.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex gap-4 items-start">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                              onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200&h=200&fit=crop'; }}
                            />
                            <div>
                              <p className="font-semibold text-gray-900">
                                {item.name}
                              </p>
                              <p className="text-sm text-gray-600">
                                ${item.price} x {item.quantity}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <p className="text-gray-600 text-lg">No orders found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
