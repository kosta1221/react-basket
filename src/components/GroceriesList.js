import React from "react";
import GroceryItem from "./GroceryItem.js";

function GroceriesList() {
	const groceries = [
		"Strawberry",
		"Blueberry",
		"Orange",
		"Banana",
		"Apple",
		"Carrot",
		"Celery",
		"Mushroom",
		"Green",
		"Pepper",
		"Eggs",
		"Cheese",
		"Butter",
		"Chicken",
		"Beef",
		"Pork",
		"Fish",
		"Rice",
		"Pasta",
		"Bread",
	];

	return (
		<div>
			<h1>Groceries List</h1>
			{groceries.map((grocery) => (
				<GroceryItem grocery={grocery} />
			))}
		</div>
	);
}

export default GroceriesList;
