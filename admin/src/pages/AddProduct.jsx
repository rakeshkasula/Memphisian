import { useState } from "react";
import api from "../utils/api";

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    sizes: "",
    colors: ""
  });

  const [images, setImages] = useState([]);

  const handleUpload = async () => {
    const fd = new FormData();
    images.forEach(img => fd.append("images", img));

    const res = await api.post("/upload/s3", fd);
    return res.data.urls;
  };

  const handleSubmit = async () => {
    const imageUrls = await handleUpload();

    await api.post("/products", {
      ...form,
      sizes: form.sizes.split(","),
      colors: form.colors.split(","),
      images: imageUrls
    });

    alert("Product added!");
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-semibold mb-8">Add New Product</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">

        <input
          placeholder="Product Name"
          className="border p-3 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Price"
          className="border p-3 rounded"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <input
          placeholder="Category (Men, Women, etc)"
          className="border p-3 rounded"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <input
          placeholder="Stock"
          className="border p-3 rounded"
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
        />

        <input
          placeholder="Sizes (S,M,L,XL)"
          className="border p-3 rounded"
          onChange={(e) => setForm({ ...form, sizes: e.target.value })}
        />

        <input
          placeholder="Colors (Blue,Black,White)"
          className="border p-3 rounded"
          onChange={(e) => setForm({ ...form, colors: e.target.value })}
        />

        {/* MULTIPLE IMAGES */}
        <input
          type="file"
          multiple
          className="border p-3 rounded"
          onChange={(e) => setImages([...e.target.files])}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="mt-8 px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
      >
        Add Product
      </button>

    </div>
  );
}
