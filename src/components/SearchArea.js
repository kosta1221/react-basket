import React from "react";
import GroceriesList from "./GroceriesList.js";
import BasketList from "./BasketList";
import { useState } from "react";

function SearchArea() {
	return (
		<div>
			<input />
			<GroceriesList />
			<BasketList />
		</div>
	);
}

export default SearchArea;
