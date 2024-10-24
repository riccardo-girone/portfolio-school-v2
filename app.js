const grid = document.querySelector(".grid");
const columns = 20;
const squarePerColumn = 10;

for (let i = 0; i < columns; i++) {
	const column = document.createElement("div");
	column.classList.add("column");

	for (let j = 0; j < squarePerColumn; j++) {
		const square = document.createElement("div");
		square.classList.add("square");
		column.appendChild(square);
	}

	console.log("boboz");
	grid.appendChild(column);
}
