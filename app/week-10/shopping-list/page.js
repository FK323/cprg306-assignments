"use client";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdea from "./meal-idea";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const loadItems = async () => {
    try {
      const itemsData = await getItems(user.uid);
      setItems(itemsData);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  if (!user) {
    return (
      <main className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="font-bold text-2xl mb-4">Shopping List</h1>
          <p>You must be logged in to view this page.</p>
        </div>
      </main>
    );
  }

  const handleAddItem = async (newItem) => {
    try {
      const { id, ...itemWithoutId } = newItem;
      const newItemId = await addItem(user.uid, itemWithoutId);
      const itemWithFirestoreId = {
        ...itemWithoutId,
        id: newItemId,
      };
      setItems([...items, itemWithFirestoreId]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
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
      <h1 className="font-bold p-4 text-xl">Week 10 - Shopping List</h1>
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
