import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 p-6">

      <h1 className="text-2xl font-semibold mb-10 tracking-wide">
        Memphisian Admin
      </h1>

      <nav className="space-y-4">
        <Link className="block text-gray-800 hover:text-black" to="/dashboard">Dashboard</Link>
        <Link className="block text-gray-800 hover:text-black" to="/products">Products</Link>
        <Link className="block text-gray-800 hover:text-black" to="/add-product">Add Product</Link>
        <Link className="block text-gray-800 hover:text-black" to="/orders">Orders</Link>
      </nav>
    </div>
  );
}
