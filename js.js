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

    for (i = 0; i < num; i++){
        let smallContainer = document.createElement("div");
        smallContainer.classList.add("smallContainer");
        container.appendChild(smallContainer);

        for (j = 0; j < num; j++){
            let gridDiv = document.createElement("div");
            gridDiv.classList.add("gridDiv");
            smallContainer.appendChild(gridDiv);
            gridDiv.style.opacity = "0";

            gridDiv.addEventListener ("mouseenter", function () {   
                let r = Math.floor(Math.random() * (255 - 50 + 1) + 50);
                let g = Math.floor(Math.random() * (255 - 50 + 1) + 50);
                let b = Math.floor(Math.random() * (255 - 50 + 1) + 50);
                console.log(r, g, b);
                gridDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;


                let opacityString = window.getComputedStyle(gridDiv).getPropertyValue("opacity");
                let opacity = +opacityString;
                gridDiv.style.opacity = `${opacity+0.1}`;
            })
        }
    }
}
btn.addEventListener("click", createGrid); 
