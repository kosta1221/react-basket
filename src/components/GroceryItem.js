import React from "react";

function GroceryItem({ grocery, groceries, setGroceries, basketList, setBasketList }) {
	const moveToBasketList = () => {
		const basketListCopy = [...basketList];
		const foundItemInBasketList = basketListCopy.find((basketItem) => basketItem.item === grocery);

		if (foundItemInBasketList) {
			foundItemInBasketList.amount++;
		} else {
			basketListCopy.push({ item: grocery, amount: 0 });
		}
		setBasketList(basketListCopy);
	};

	return (
		<div>
			<button onClick={moveToBasketList}>Add</button>
			<span>{` ${grocery}`}</span>
		</div>
	);
}

export default GroceryItem;
