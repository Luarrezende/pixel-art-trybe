
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

let board = document.getElementById("pixel-board");
for (let index = 0; index < 25; index += 1) {
    let lista = document.createElement("div");
    lista.class = "pixel"
    lista.style.height = "40px";
    lista.style.width = "40px";
    lista.style.border = "black solid 1px";
    lista.style.backgroundColor = "white";
    lista.style.display = "inline-block";
    lista.style.position = "relative";
    lista.style.left = "39%";
    board.appendChild(lista);
    if (index === 4) {
        let quebra = document.createElement("br")
        board.appendChild(quebra);
    } else if (index === 9) {
        let quebra = document.createElement("br")
        board.appendChild(quebra);
    } else if (index === 14) {
        let quebra = document.createElement("br")
        board.appendChild(quebra);
    } else if (index === 19) {
        let quebra = document.createElement("br")
        board.appendChild(quebra);
    }
}


document.getElementById("button-random-color").addEventListener("click", () => {
    let nome = document.querySelectorAll(".color")
    for (let index = 0; index < nome.length; index += 1) {
        let element = nome[index]
        element.style.backgroundColor = generateColors();
    }
    // console.log(color2.style.backgroundColor);
    if (color2.style.backgroundColor === color1.style.backgroundColor || color3.style.backgroundColor || color4.style.backgroundColor) {
        color2.style.backgroundColor = generateColors();
    } else if (color3.style.backgroundColor === color1.style.backgroundColor || color2.style.backgroundColor || color4.style.backgroundColor) {
        color3.style.backgroundColor = generateColors();
    } else if (color4.style.backgroundColor === color1.style.backgroundColor || color3.style.backgroundColor || color2.style.backgroundColor) {
        color4.style.backgroundColor = generateColors();
    } else if (color1 === color2 || color3 || color4) {
        color1.style.backgroundColor = "black";
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