import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-sm">
      <Link to="/" className="text-3xl font-playfair tracking-wide text-[#0033CC]">
        Memphisian
      </Link>

      <div className="space-x-6 text-gray-900 font-medium">
        <Link to="/collections">Collections</Link>
        <Link to="/new">New Arrivals</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}
