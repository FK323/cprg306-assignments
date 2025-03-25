"use client";
import { useState, useEffect } from "react";

export default function MealIdea({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    const mealsList = data.meals || [];
    setMeals(mealsList);
  };

  useEffect(() => {
    if (!ingredient) return;
    fetchMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Meal Ideas for {ingredient}</h2>
      {meals.length === 0 ? (
        <p>No meal ideas found for {ingredient}</p>
      ) : (
        <ul className="space-y-4">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="p-2 bg-gray-700 rounded">
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
