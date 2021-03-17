import React from "react";

function BasketItem({ basketItem, basketList, setBasketList }) {
	const removeFromBasketList = () => {
		setBasketList(basketList.filter((currentBasketItem) => currentBasketItem !== basketItem));
	};

	return (
		<div>
			<button onClick={removeFromBasketList}>Remove</button>
			<span>{` ${basketItem.amount} ${basketItem.item}`}</span>
		</div>
	);
}

export default BasketItem;
