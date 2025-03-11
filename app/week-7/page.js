"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./item.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="bg-black">
      <h1 className="font-bold p-4 text-xl">Week 7 - Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
