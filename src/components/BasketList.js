import React from "react";
import BasketItem from "./BasketItem";

function BasketList({ basketList, setBasketList }) {
	return (
		<div>
			<h1>Basket List</h1>
			{basketList.map((basketItem, i) => (
				<BasketItem
					key={`BasketItem-${i}`}
					basketItem={basketItem}
					basketList={basketList}
					setBasketList={setBasketList}
				/>
			))}
		</div>
	);
}

export default BasketList;
