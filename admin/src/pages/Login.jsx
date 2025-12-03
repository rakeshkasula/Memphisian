import { useState } from "react";
import api from "../utils/api";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });

      if (!res.data.user.isAdmin) {
        alert("Not authorized");
        return;
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("admin", JSON.stringify(res.data.user));
      window.location.href = "/dashboard";
    } catch {
      alert("Invalid admin login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F9FAFB]">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">

        <h1 className="text-3xl font-semibold text-center mb-8 tracking-wide">
          Memphisian Admin
        </h1>

        <input
          type="email"
          placeholder="Admin Email"
          className="w-full p-4 mb-4 border rounded-lg"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-6 border rounded-lg"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full p-4 bg-black text-white rounded-lg hover:bg-gray-900 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
