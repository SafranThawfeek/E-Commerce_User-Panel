import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  return (
    <>
      <Navbar />
      <div className="product-grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}
