import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function OrderDetails() {
  const { id } = useParams();
  const [expandedItems, setExpandedItems] = useState(null);

  // Mock order detail data
  const orderDetail = {
    id: "234567AB12",
    date: "2025.08.01",
    total: 450,
    status: "Processing",
    statusColor: "bg-yellow-200 text-yellow-800",
    shippingAddress: {
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 234 567 8900",
      address: "123 Main Street, Apartment 4B",
      city: "New York",
      state: "NY",
      postalCode: "10001",
      country: "United States"
    },
    items: [
      {
        id: 1,
        name: "White Solid Formal Shirt",
        price: 25,
        quantity: 5,
        size: "M",
        color: "White",
        image: "https://images.unsplash.com/photo-1589985643453-0cf4663a4c52?w=150&h=150&fit=crop"
      },
      {
        id: 2,
        name: "Tailored Jacket",
        price: 250,
        quantity: 5,
        size: "L",
        color: "Black",
        image: "https://images.unsplash.com/photo-1539533057440-7da542b84cb7?w=150&h=150&fit=crop"
      }
    ],
    timeline: [
      { status: "Order Placed", date: "2025.08.01", completed: true },
      { status: "Processing", date: "2025.08.01", completed: true },
      { status: "Ready to Ship", date: "2025.08.02", completed: false },
      { status: "Shipped", date: "TBD", completed: false },
      { status: "Delivered", date: "TBD", completed: false }
    ]
  };

  const getStatusColor = (status) => {
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
          {/* Back Button */}
          <Link
            to="/orders"
            className="inline-flex items-center text-gray-900 hover:text-gray-600 mb-8"
          >
            <span className="text-2xl">←</span>
          </Link>

          {/* Order Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  Order #{orderDetail.id}
                </h1>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Order Date</p>
                    <p className="font-semibold text-gray-900">
                      {orderDetail.date}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Total Amount</p>
                    <p className="text-2xl font-bold text-gray-900">
                      ${orderDetail.total}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Status</p>
                    <span
                      className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                        getStatusColor(orderDetail.status)
                      }`}
                    >
                      {orderDetail.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-gray-50 p-6 rounded">
                <h2 className="font-bold text-gray-900 mb-4">
                  Shipping Address
                </h2>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="font-semibold">{orderDetail.shippingAddress.name}</p>
                  <p>{orderDetail.shippingAddress.address}</p>
                  <p>
                    {orderDetail.shippingAddress.city},{" "}
                    {orderDetail.shippingAddress.state}{" "}
                    {orderDetail.shippingAddress.postalCode}
                  </p>
                  <p>{orderDetail.shippingAddress.country}</p>
                  <p className="mt-2">{orderDetail.shippingAddress.email}</p>
                  <p>{orderDetail.shippingAddress.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Order Items
            </h2>
            <div className="space-y-6">
              {orderDetail.items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 pb-6 border-b border-gray-200 last:border-b-0 last:pb-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">
                      {item.name}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
                      <div>
                        <p className="text-xs text-gray-500">Size</p>
                        <p className="font-semibold text-gray-900">{item.size}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Color</p>
                        <p className="font-semibold text-gray-900">
                          {item.color}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Quantity</p>
                        <p className="font-semibold text-gray-900">
                          {item.quantity}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Price</p>
                        <p className="font-semibold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Timeline */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Order Timeline
            </h2>
            <div className="space-y-4">
              {orderDetail.timeline.map((event, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div
                    className={`w-4 h-4 rounded-full mt-1.5 flex-shrink-0 ${
                      event.completed ? "bg-green-500" : "bg-gray-300"
                    }`}
                  />
                  <div className="flex-1">
                    <p
                      className={`font-semibold ${
                        event.completed
                          ? "text-green-600"
                          : "text-gray-600"
                      }`}
                    >
                      {event.status}
                    </p>
                    <p className="text-sm text-gray-600">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
