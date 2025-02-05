import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-blue-900">
      <h1 className="font-bold p-4 text-xl">Shopping List</h1>
      <ItemList />
    </main>
  );
}
