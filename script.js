let colorBlack = document.getElementById("color1");
function generateColors() {
    const randomColors = "0123456789ABCDEF"
    let color = "#"

    for (let index = 0; index < 6; index += 1) {
        color += randomColors.charAt(Math.floor(Math.random() * randomColors.length))
    }
    return color;
} 

document.getElementById("button-random-color").addEventListener("click", () =>{
    for (let index = 1; index <= 4; index += 1) {
        let element = document.getElementById(`color${index}`);
        element.style.backgroundColor = generateColors();
    }
    colorBlack.style.backgroundColor = "black";
} )

    document.getElementById("clear-board").addEventListener("click", () =>{
        for (let index = 1; index <= 4; index += 1) {
            let element = document.getElementById(`color${index}`);
            element.style.backgroundColor = "white";
        }
})