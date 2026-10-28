
import React, { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 55000,
      category: "Electronics",
      quantity: 5,
    },
    {
      id: 2,
      name: "Keyboard",
      price: 1500,
      category: "Accessories",
      quantity: 10,
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: formData.name.trim(),
      price: Number(formData.price),
      category: formData.category,
      quantity: Number(formData.quantity),
    };

    setProducts((prev) => [...prev, newProduct]);

    setFormData({
      name: "",
      price: "",
      category: "",
      quantity: "",
    });

    setMessage("Product added successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-700">
            Product Management
          </h1>
          <p className="mt-2 text-gray-600">
            Add and manage your products
          </p>
        </header>

        {/* Product Form */}
        <section className="mb-8 rounded-2xl bg-white p-6 shadow-md">
          <h2 className="mb-5 text-xl font-bold text-gray-800">
            Add New Product
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block font-medium">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter product name"
                  required
                  maxLength={100}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Price (₹)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Enter price"
                  min="0.01"
                  step="0.01"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                >
                  <option value="">Select Category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Enter quantity"
                  min="0"
                  step="1"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

            </div>

            <button
              type="submit"
              className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              + Add Product
            </button>

            {message && (
              <p className="mt-4 font-medium text-green-600" role="status">
                {message}
              </p>
            )}
          </form>
        </section>

        {/* Product List */}
        <section className="rounded-2xl bg-white p-6 shadow-md">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-gray-800">
              Product List
            </h2>
            <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">
              Total Products: {products.length}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-4">ID</th>
                  <th className="p-4">Product Name</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Quantity</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product, index) => (
                  <tr
                    key={product.id}
                    className="border-b border-gray-200 hover:bg-blue-50"
                  >
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4 font-medium">
                      {product.name}
                    </td>
                    <td className="p-4">
                      ₹{product.price.toLocaleString("en-IN")}
                    </td>
                    <td className="p-4">{product.category}</td>
                    <td className="p-4">{product.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {products.length === 0 && (
            <p className="py-8 text-center text-gray-500">
              No products available. Add your first product above.
            </p>
          )}
        </section>

      </div>
    </div>
  );
}

export default App;
