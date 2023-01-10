
let boardSize = document.getElementById("board-size");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let color4 = document.getElementById("color4");
function generateColors() {
    const randomColors = "0123456789ABCDEF"
    let color = "#"

    for (let index = 0; index < 6; index += 1) {
        color += randomColors.charAt(Math.floor(Math.random() * randomColors.length))
    }
    return color;
}

function totalQ() {
    for (let index = 1; index = 25; index += 1) {
        const element = document.createElement("li");
        element.style.height = "40px";
        element.style.width = "40px";
        element.style.border = "black solid 1px";
        element.style.backgroundColor = "white";
        element.style.display = "inline-block";
        let board = document.getElementById("board");
        board.appendChild(element);
        if (index === 5) {
            let quebra = document.createElement("br")
            board.appendChild(quebra);
        } else if (index === 10) {
            let quebra = document.createElement("br")
            board.appendChild(quebra);
        } else if (index === 15) {
            let quebra = document.createElement("br")
            board.appendChild(quebra);
        } else if (index === 20) {
            let quebra = document.createElement("br")
            board.appendChild(quebra);
        }
    }
}

document.getElementById("button-random-color").addEventListener("click", () => {
    for (let index = 1; index <= 4; index += 1) {
        let element = document.getElementById(`color${index}`);
        element.style.backgroundColor = generateColors();
        if (color2 === color1 || color3 || color4) {
            color2.style.backgroundColor = generateColors();
        } else if (color3 === color1 || color2 || color4) {
            color3.style.backgroundColor = generateColors();
        }  else if (color4 === color1 || color3 || color2) {
            color4.style.backgroundColor = generateColors();
        }
    }
    color1.style.backgroundColor = "black";  
    }
)


document.getElementById("clear-board").addEventListener("click", () => {
    for (let index = 1; index <= 4; index += 1) {
        let element = document.getElementById(`color${index}`);
        element.style.backgroundColor = "white";
    }
})