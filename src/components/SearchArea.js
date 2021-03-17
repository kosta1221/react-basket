import React, { useState } from "react";
import GroceriesList from "./GroceriesList.js";
import BasketList from "./BasketList";
import "../styles/SearchArea.css";

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
			<header>
				<h1>🔥</h1>
				<div id="search-div">
					<input id="search-input" />
				</div>
				<h1>🛒</h1>
			</header>
			<div className="grocery-and-basket-lists">
				<GroceriesList
					groceries={groceries}
					setGroceries={setGroceries}
					basketList={basketList}
					setBasketList={setBasketList}
				/>
				<BasketList basketList={basketList} setBasketList={setBasketList} />
			</div>
		</div>
	);
}

export default SearchArea;
