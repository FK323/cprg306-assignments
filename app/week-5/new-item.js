"use client";

import { useState } from "react";

export default function Newitem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log(item);

    alert(`Added item: ${name}, Quantity: ${quantity}, Category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      className="p-6 max-w-md mx-auto bg-white rounded-xl"
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className="mb-4">
        <label className="block text-black text-sm font-bold mb-2">
          Item Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-black rounded w-full py-2 px-3 text-black"
        />
      </div>
      <div className="mb-4">
        <label className="block text-black text-sm font-bold mb-2">
          Quantity:
        </label>
        <div className="flex items-center">
          <button
            type="button"
            onClick={decrement}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-l"
          >
            -
          </button>

          <div className="bg-gray-200 text-black py-2 px-4">{quantity}</div>

          <button
            type="button"
            onClick={increment}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-r"
          >
            +
          </button>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-black text-sm font-bold mb-2">
          Category:
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-black bg-white rounded w-full py-2 px-3 text-black"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Add Item
      </button>
    </form>
  );
}
