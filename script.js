
const boardSize = document.getElementById('board-size');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');
const btn = document.getElementById('button-random-color');
const nome = document.querySelectorAll('.color');
let colorPalette = document.getElementById("color-palette");
let lista = null;
let corSelecionada = 'black';

color2.style.backgroundColor = "red";
color3.style.backgroundColor = "blue";
color4.style.backgroundColor = "green";

function generateColors() {
  const randomColors = '0123456789ABCDEF';
  let color = '#';

  for (let index = 0; index < 6; index += 1) {
    color += randomColors.charAt(Math.floor(Math.random() * randomColors.length));
  }
  return color;
}

document.getElementById('button-random-color').addEventListener('click', () => {
  const arrayColors = ["black"];

  function regenerateIfExists(color) {
    if (arrayColors.includes(color)) return generateColors()
    return color
  }

  for (let index = 1; index < nome.length; index += 1) {
    const element = nome[index];

    let generatedColor = generateColors()
    let color = regenerateIfExists(generatedColor)

    element.style.backgroundColor = color;
    arrayColors.push(color)
  }
  localStorage.setItem("colorPalette", JSON.stringify(arrayColors));
});
const getLocal = localStorage.getItem("colorPalette")
if (getLocal && getLocal.length) {
  JSON.parse(getLocal).forEach((color, index) => {
    const element = nome[index]
    element.style.backgroundColor = color;
  });
};

const board = document.getElementById('pixel-board');
let guardaPixel = [];
const getPixel = localStorage.getItem("guardaPixel")
if (getPixel && getPixel.length) {
  guardaPixel = JSON.parse(getPixel);
};
for (let index = 1; index <= 25; index += 1) {
  lista = document.createElement('div');
  lista.className = 'pixel';
  if (guardaPixel[index]) {
    lista.style.backgroundColor = guardaPixel[index]
  }
  board.appendChild(lista);
}

const pixel = document.querySelectorAll('.pixel');

document.getElementById('clear-board').addEventListener('click', () => {
  localStorage.removeItem('guardaPixel')
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = "white";
  }
});

for (const element of nome) {
  element.addEventListener('click', () => {
    for (const element of nome) {
      element.classList.remove('selected')
    }
    element.classList.add('selected')
    const cor = window.getComputedStyle(element).backgroundColor
    corSelecionada = cor
  })
}

for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', () => {
    if (corSelecionada !== null) {
      pixel[index].style.backgroundColor = corSelecionada
      guardaPixel[index] = corSelecionada
      localStorage.setItem("guardaPixel", JSON.stringify(guardaPixel))
    }
  })
}