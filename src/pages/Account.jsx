import { useEffect, useState } from "react";

export default function Account() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) setUser(JSON.parse(u));
  }, []);

  if (!user)
    return <p className="text-center text-gray-400 mt-20">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-white">
      <h1 className="text-4xl font-playfair mb-6">Account</h1>

      <div className="bg-[#0A1B3A] p-6 rounded-xl shadow-xl">
        <p className="text-lg">Name: {user.name}</p>
        <p className="text-lg mt-2">Email: {user.email}</p>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-playfair mb-4">Your Orders</h2>

        <p className="text-gray-500">
          Orders will appear here after purchase.
        </p>
      </div>
    </div>
  );
}
