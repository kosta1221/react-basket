import React from "react";

function GroceryItem({ grocery }) {
	return (
		<div>
			<button>Add</button>
			<span>{grocery}</span>
		</div>
	);
}

export default GroceryItem;
