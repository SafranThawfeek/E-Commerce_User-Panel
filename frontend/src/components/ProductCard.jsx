import { Link } from "react-router-dom";

export default function ProductCard({ productName, productPrice, image }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <img
        src={image}
        alt={productName}
        className="rounded mb-3"
        onError={(e) => {
          e.currentTarget.src = "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop";
        }}
      />
      <h3 className="font-semibold">{productName}</h3>
      <p className="text-gray-600 mb-2">${productPrice}</p>
      <Link to="/product/1">
        <button className="w-full bg-green-600 text-white py-1 rounded">View</button>
      </Link>
    </div>
  );
}
