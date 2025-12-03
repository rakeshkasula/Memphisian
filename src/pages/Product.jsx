import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    api.get(`/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p className="text-center mt-20 text-gray-400">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-white">

      {/* Product Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left – Images */}
        <div className="space-y-4">
          <img
            src={product.images[0]}
            className="w-full h-[600px] object-cover rounded-lg shadow-lg"
          />

          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="h-28 object-cover rounded-md opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>

        {/* Right – Product Info */}
        <div className="text-[#F8FAFC]">
          <h1 className="text-4xl font-playfair">{product.name}</h1>
          <p className="mt-3 text-xl text-[#D4AF37] font-semibold">
            ${product.price}
          </p>

          {/* Color Options */}
          <div className="mt-6">
            <h3 className="text-sm uppercase tracking-widest text-gray-400">Color</h3>
            <div className="flex space-x-3 mt-2">
              {product.colors?.map((color, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-1 border rounded-full text-sm ${
                    selectedColor === color
                      ? "bg-[#0033CC] text-white border-[#0033CC]"
                      : "border-gray-600 text-gray-300"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Options */}
          <div className="mt-6">
            <h3 className="text-sm uppercase tracking-widest text-gray-400">Size</h3>
            <div className="flex space-x-3 mt-2">
              {product.sizes?.map((size, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-1 border rounded-full text-sm ${
                    selectedSize === size
                      ? "bg-[#0033CC] text-white border-[#0033CC]"
                      : "border-gray-600 text-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            className="mt-10 w-full py-4 bg-[#D4AF37] text-black rounded-full font-semibold hover:opacity-90 transition"
          >
            Add To Cart
          </button>

          {/* Description */}
          <p className="mt-10 text-gray-300 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
