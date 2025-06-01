const container = document.querySelector("#container");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", createGrid); 

function createGrid () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };

    let num = input.value;
    for (i = 0; i < num; i++){
        let smallContainer = document.createElement("div");
        smallContainer.classList.add("smallContainer");
        container.appendChild(smallContainer);

        for (j = 0; j < num; j++){
            let gridDiv = document.createElement("div");
            gridDiv.classList.add("gridDiv");
            smallContainer.appendChild(gridDiv);
            gridDiv.addEventListener ("mouseenter", () => gridDiv.style.backgroundColor = "blue")
        }
    }
}
