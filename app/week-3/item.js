export default function Item({ name, quantity, category }) {
  return (
    <li className="mb-4 flex justify-start">
      <div className="border border-red-900 p-4 w-96 bg-red-900">
        <h1 className="font-bold">Name: {name}</h1>
        <h2 className="text-sm">
          Quantity: {quantity}, Category: {category}
        </h2>
      </div>
    </li>
  );
}
