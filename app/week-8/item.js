"use client";
export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="p-2 m-2 bg-blue-800 rounded flex justify-between hover:bg-gray-600"
      onClick={() => onSelect(name)}
    >
      <div className="flex">
        <div className="font-bold text-white">{name}</div>
      </div>
      <div className="text-sm text-white flex flex-col items-end">
        <div className="text-red-500">{category}</div>
        <div>Qty: {quantity}</div>
      </div>
    </li>
  );
}
