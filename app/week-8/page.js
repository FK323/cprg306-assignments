"use client";
import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdea from "./meal-idea";
import itemsData from "./item.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(",")[0]
      .trim()
      .replace(/[0-9]/g, "")
      .replace(/🍞|🥚|🍌|🥦|🍗|🍝|🧻|🍽️|🧼|🥛/g, "")
      .trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-black text-white">
      <h1 className="font-bold p-4 text-xl">Week 8 - Shopping List</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="md:w-1/2 bg-gray-900 rounded-xl m-2">
          <MealIdea ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
