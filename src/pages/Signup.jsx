import { useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await api.post("/auth/signup", {
        name, email, password
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/account");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#001433]">

      <div className="bg-[#0A1B3A] p-10 rounded-xl w-full max-w-md text-white shadow-xl">

        <h1 className="text-4xl font-playfair text-center mb-8">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-4 mb-4 bg-transparent border border-gray-600 rounded-lg text-white"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 mb-4 bg-transparent border border-gray-600 rounded-lg text-white"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-4 bg-transparent border border-gray-600 rounded-lg text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full p-4 bg-[#D4AF37] text-black rounded-full font-semibold hover:opacity-90"
        >
          Create Account
        </button>

        <p className="text-gray-400 text-center mt-4">
          Already have an account? <a href="/login" className="text-[#D4AF37]">Login</a>
        </p>
      </div>

    </div>
  );
}
