"use client";

import { useState } from "react";

export default function Newitem() {
  const [quantity, setQuantity] = useState(1);

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

  return (
    <div className="inline-flex space-x-4 bg-white p-4 rounded-lg">
      <button onClick={decrement} className="bg-blue-800 p-4 rounded-lg">
        -
      </button>

      <p className="bg-blue-800 p-4 rounded-lg"> {quantity} </p>

      <button onClick={increment} className="bg-blue-800 p-4 rounded-lg">
        +
      </button>
    </div>
  );
}
