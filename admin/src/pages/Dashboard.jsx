import { useEffect, useState } from "react";
import api from "../utils/api";

export default function Dashboard() {
  const [stats, setStats] = useState({
    products: 0,
    orders: 0,
    revenue: 0
  });

  useEffect(() => {
    const load = async () => {
      const products = await api.get("/products");
      const orders = await api.get("/orders");

      const revenue = orders.data.reduce((sum, o) => sum + o.totalAmount, 0);

      setStats({
        products: products.data.length,
        orders: orders.data.length,
        revenue
      });
    };

    load();
  }, []);

  return (
    <div className="p-10">

      <h1 className="text-3xl font-semibold mb-8">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-white p-6 rounded-xl shadow border">
          <h3 className="text-gray-500 text-sm">Total Products</h3>
          <p className="text-3xl font-bold">{stats.products}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border">
          <h3 className="text-gray-500 text-sm">Orders</h3>
          <p className="text-3xl font-bold">{stats.orders}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border">
          <h3 className="text-gray-500 text-sm">Revenue</h3>
          <p className="text-3xl font-bold">${stats.revenue}</p>
        </div>

      </div>
    </div>
  );
}
