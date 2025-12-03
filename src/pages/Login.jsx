import { useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/account");
    } catch (err) {
      alert("Invalid login details");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#001433]">

      <div className="bg-[#0A1B3A] p-10 rounded-xl w-full max-w-md text-white shadow-xl">

        <h1 className="text-4xl font-playfair text-center mb-8">
          Account Login
        </h1>

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
          onClick={handleLogin}
          className="w-full p-4 bg-[#D4AF37] text-black rounded-full font-semibold hover:opacity-90"
        >
          Login
        </button>

        <p className="text-gray-400 text-center mt-4">
          Forgot your password? <a href="/forgot" className="text-[#D4AF37]">Reset</a>
        </p>

        <p className="text-gray-400 text-center mt-2">
          New to Memphisian? <a href="/signup" className="text-[#D4AF37]">Create Account</a>
        </p>
      </div>

    </div>
  );
}
