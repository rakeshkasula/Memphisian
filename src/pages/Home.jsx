import Hero from "../components/Hero";
import CategoryGrid from "../components/CategoryGrid";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import api from "../utils/api";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
       .then(res => setProducts(res.data));
  }, []);

  return (
    <div className="bg-white">
      <Hero />

      <section className="max-w-7xl mx-auto px-6 pt-12">
        <h2 className="text-3xl font-playfair text-gray-900 mb-4">
          Featured Collection
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.slice(0, 8).map(product => (
            <ProductCard key={product._id} data={product} />
          ))}
        </div>
      </section>

      <CategoryGrid />
    </div>
  );
}
