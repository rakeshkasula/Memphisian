import { Link } from "react-router-dom";

export default function ProductCard({ data }) {
  return (
    <Link to={`/product/${data._id}`}>
      <div className="group">
        <div className="overflow-hidden rounded-lg bg-[#F8FAFC]">
          <img
            src={data.images[0]}
            alt={data.name}
            className="w-full h-80 object-cover group-hover:scale-105 transition"
          />
        </div>

        <h3 className="mt-3 font-medium text-gray-900">
          {data.name}
        </h3>

        <p className="text-gray-600">${data.price}</p>
      </div>
    </Link>
  );
}
