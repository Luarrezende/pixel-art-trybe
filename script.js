function generateColors() {
    const randomColors = "0123456789ABCDEF"
    let color = "#"

    for (let index = 0; index < 3; index += 1) {
        color += randomColors.charAt(Math.floor(Math.random() * randomColors.length))
    }
    return color;
}
console.log(generateColors());