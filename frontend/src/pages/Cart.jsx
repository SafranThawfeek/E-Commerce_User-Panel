import Navbar from "../components/Navbar";

export default function Cart() {
  return (
    <>
      <Navbar />
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Product Name - $120</p>
        <button>Checkout</button>
      </div>
    </>
  );
}
