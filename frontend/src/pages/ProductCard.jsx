import { Link } from "react-router-dom";

export default function ProductCard() {
  return (
    <div className="product-card">
      <img src="https://via.placeholder.com/200" alt="Product" />
      <h3>Product Name</h3>
      <p>$120</p>
      <Link to="/product/1">
        <button>View Details</button>
      </Link>
    </div>
  );
}
