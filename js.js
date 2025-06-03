const container = document.querySelector("#container");
const input = document.querySelector("input");
const btn = document.querySelector("button");

function createGrid () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };

    let num = input.value;
    if (num > 100 || num <=0){
        alert("You can only use numbers between 1 and 100");
        return;
    };

    let numHovered = 0;
    for (i = 0; i < num; i++){
        let smallContainer = document.createElement("div");
        smallContainer.classList.add("smallContainer");
        container.appendChild(smallContainer);

        for (j = 0; j < num; j++){
            let gridDiv = document.createElement("div");
            gridDiv.classList.add("gridDiv");
            smallContainer.appendChild(gridDiv);
            // gridDiv.addEventListener ("mouseenter", () => gridDiv.style.backgroundColor = "blue")
            gridDiv.addEventListener ("mouseenter", function () {
                numHovered++;
                let alpha = 0.1 * numHovered;
                gridDiv.style.backgroundColor = `rgba(0, 0, 255, ${alpha})`;
                if (numHovered === 10){
                    numHovered = 0;
                }
            })
        }
    }
}

btn.addEventListener("click", createGrid); 
