import Navbar from "../components/Navbar";

export default function Payment() {
  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Payment</h2>
        <input className="w-full border px-3 py-2 rounded mb-3" placeholder="Card Number" />
        <button className="w-full bg-green-600 text-white py-2 rounded">Pay Now</button>
      </div>
    </>
  );
}
