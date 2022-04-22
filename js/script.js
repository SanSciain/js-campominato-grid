


createGrid(100);




function createGrid(dimension) {

    const grid = document.querySelector(".grid");
    console.log(grid);

    for (let i = 1; i <= dimension; i++){
        const elementsPerRowColumn = Math.sqrt(dimension);
        const widthHeight = 500 / elementsPerRowColumn;
        const gridElement = document.createElement("div");
        gridElement.classList.add("box");
        gridElement.innerHTML = `<span>${i}</span>`;
        gridElement.style.width = `${widthHeight}px`;
        gridElement.style.height = `${widthHeight}px`;
        console.log(gridElement);
        grid.append(gridElement);
        gridElement.addEventListener("click", function() {
            this.classList.toggle("atv");
        });
    }

}

