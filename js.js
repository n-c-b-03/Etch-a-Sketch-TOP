const container = document.querySelector("#container");


for (i = 0; i < 4; i++){
    let smallContainer = document.createElement("div");
    smallContainer.classList.add("smallContainer");
    container.appendChild(smallContainer);

    for (j = 0; j < 4; j++){
        let gridDiv = document.createElement("div");
        gridDiv.classList.add("gridDiv");
        smallContainer.appendChild(gridDiv);
        gridDiv.addEventListener ("mouseenter", () => {
            gridDiv.style.backgroundColor ="blue";
        })
    }
}

