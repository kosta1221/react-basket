import React, { useState } from "react";
import GroceriesList from "./GroceriesList.js";
import BasketList from "./BasketList";

function SearchArea() {
	const groceriesArray = [
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

	const [groceries, setGroceries] = useState(groceriesArray);
	const [basketList, setBasketList] = useState([]);

	return (
		<div>
			<input />
			<GroceriesList
				groceries={groceries}
				setGroceries={setGroceries}
				basketList={basketList}
				setBasketList={setBasketList}
			/>
			<BasketList basketList={basketList} setBasketList={setBasketList} />
		</div>
	);
}

export default SearchArea;
