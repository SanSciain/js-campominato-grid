
document.getElementById("btn").addEventListener("click", function() {
    let value = document.getElementById("dif").value;
    let gridDimension;
    if (value === "normal"){
        gridDimension = 100;
    } else if (value === "hard"){
        gridDimension = 81;
    } else if (value === "crazy"){
        gridDimension = 49;
    } else {
        gridDimension = 0;
    }
    createGrid(gridDimension);
});




function createGrid(dimension) {

    const grid = document.querySelector(".grid");
    grid.innerHTML= "";
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

