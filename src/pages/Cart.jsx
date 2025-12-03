import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, total } = useContext(CartContext);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-white">
      <h1 className="text-4xl font-playfair mb-10">Your Cart</h1>

      {cart.length === 0 && (
        <p className="text-gray-400">Your cart is empty.</p>
      )}

      {cart.map((item, i) => (
        <div key={i} className="flex justify-between items-center py-5 border-b border-gray-700">
          <div className="flex items-center space-x-6">
            <img src={item.image} className="h-24 w-24 rounded-md" />

            <div>
              <h2 className="text-lg">{item.name}</h2>
              <p className="text-gray-400 text-sm">${item.price}</p>
              <p className="text-gray-500 text-sm">Size: {item.size}</p>
              <p className="text-gray-500 text-sm">Color: {item.color}</p>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-400 hover:text-red-300"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Summary */}
      <div className="mt-10 p-6 bg-[#0A1B3A] rounded-lg shadow-xl">
        <h3 className="text-2xl font-playfair mb-4">Summary</h3>
        <p className="text-gray-300">Subtotal: ${total}</p>

        <button className="mt-6 w-full py-4 bg-[#D4AF37] text-black rounded-full font-semibold hover:opacity-90 transition">
          Checkout
        </button>
      </div>
    </div>
  );
}
