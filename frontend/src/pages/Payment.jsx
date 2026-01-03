export default function Payment() {
  return (
    <div className="payment">
      <h2>Payment</h2>
      <input placeholder="Card Number" />
      <input placeholder="Expiry Date" />
      <input placeholder="CVV" />
      <button>Pay Now</button>
    </div>
  );
}
