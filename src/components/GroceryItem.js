import React from "react";

function GroceryItem({ grocery, groceries, setGroceries, basketList, setBasketList }) {
	const moveToBasketList = () => {
		const basketListCopy = [...basketList];
		basketListCopy.push(grocery);
		setBasketList(basketListCopy);
		setGroceries(groceries.filter((currentGrocery) => currentGrocery !== grocery));
	};

	return (
		<div>
			<button onClick={moveToBasketList}>Add</button>
			<span>{grocery}</span>
		</div>
	);
}

export default GroceryItem;
