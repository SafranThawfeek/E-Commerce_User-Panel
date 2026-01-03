import Navbar from "../components/Navbar";

export default function ProductDetails() {
  return (
    <>
      <Navbar />
      <div className="product-details">
        <img src="https://via.placeholder.com/300" alt="Product" />
        <div>
          <h2>Product Name</h2>
          <p>Product description here</p>
          <h3>$120</h3>
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
}
