import React from "react";
import GroceryItem from "./GroceryItem.js";

function GroceriesList({ groceries, setGroceries, basketList, setBasketList }) {
	return (
		<div>
			<h1>Groceries List</h1>
			{groceries.map((grocery, i) => (
				<GroceryItem
					key={`GroceryItem-${i}`}
					grocery={grocery}
					groceries={groceries}
					setGroceries={setGroceries}
					basketList={basketList}
					setBasketList={setBasketList}
				/>
			))}
		</div>
	);
}

export default GroceriesList;
