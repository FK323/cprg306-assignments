export default function Item({ name, quantity, category }) {
  return (
    <li className="mb-4 flex justify-center">
      <div className="p-4 w-80 bg-blue-900">
        <h1 className="font-bold"> Name: {name}</h1>
        <h2 className="text-sm">
          Quantity: {quantity}, Category: {category}
        </h2>
      </div>
    </li>
  );
}
