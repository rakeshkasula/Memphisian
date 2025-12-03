import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import api from "../utils/api";

export default function Checkout() {
  const { cart, total } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    const res = await api.post("/orders/create-checkout-session", {
      items: cart,
      totalAmount: total,
    });

    window.location.href = res.data.url;
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-white">

      <h1 className="text-4xl font-playfair mb-10">Checkout</h1>

      <div className="bg-[#0A1B3A] p-8 rounded-xl shadow-xl">

        {/* Order Summary */}
        <h2 className="text-xl font-semibold">Order Summary</h2>

        {cart.map((item, i) => (
          <div key={i} className="flex justify-between py-4 border-b border-gray-700">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </div>
        ))}

        <div className="flex justify-between mt-6 text-lg">
          <span>Total</span>
          <span className="text-[#D4AF37] font-semibold">${total}</span>
        </div>

        {/* Stripe Checkout */}
        <button
          onClick={handlePayment}
          disabled={loading}
          className="mt-10 w-full py-4 bg-[#D4AF37] text-black font-semibold rounded-full hover:opacity-90 transition"
        >
          {loading ? "Redirecting..." : "Pay with Stripe / Apple Pay / Google Pay"}
        </button>
      </div>
    </div>
  );
}
