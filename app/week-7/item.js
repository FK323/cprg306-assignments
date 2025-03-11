export default function Item({ name, quantity, category }) {
  return (
    <li className="mb-4 flex justify-center">
      <div className="p-4 w-80 bg-blue-900">
        <h1>
          {" "}
          Name: <span className="font-bold text-orange-400">{name}</span>
        </h1>
        <h2 className="text-sm">
          Quantity: {quantity}, Category:{" "}
          <span className="text-red-400">{category} </span>
        </h2>
      </div>
    </li>
  );
}
