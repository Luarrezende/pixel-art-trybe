
const boardSize = document.getElementById('board-size');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');
const btn = document.getElementById('button-random-color');
function generateColors() {
  const randomColors = '0123456789ABCDEF';
  let color = '#';

  for (let index = 0; index < 6; index += 1) {
    color += randomColors.charAt(Math.floor(Math.random() * randomColors.length));
  }
  return color;
}

const board = document.getElementById('pixel-board');
for (let index = 1; index <=25; index += 1) {
  const lista = document.createElement('div');
  lista.className = 'pixel';
  lista.style.height = '40px';
  lista.style.width = '40px';
  lista.style.border = 'black solid 1px';
  lista.style.backgroundColor = 'white';
  lista.style.display = 'inline-block';
  lista.style.position = 'relative';
  lista.style.left = '39%';
  board.appendChild(lista);
  if (index === 5) {
    const quebra = document.createElement('br');
    board.appendChild(quebra);
  } else if (index === 10) {
    const quebra = document.createElement('br');
    board.appendChild(quebra);
  } else if (index === 15) {
    const quebra = document.createElement('br');
    board.appendChild(quebra);
  } else if (index === 20) {
    const quebra = document.createElement('br');
    board.appendChild(quebra);
  }
}

document.getElementById('button-random-color').addEventListener('click', () => {
  const nome = document.querySelectorAll('.color');
  for (let index = 0; index < nome.length; index += 1) {
    const element = nome[index];
    element.style.backgroundColor = generateColors();
  }
  if (color2.style.backgroundColor === color1.style.backgroundColor || color3.style.backgroundColor || color4.style.backgroundColor) {
    color2.style.backgroundColor = generateColors();
  } else if (color3.style.backgroundColor === color1.style.backgroundColor || color2.style.backgroundColor || color4.style.backgroundColor) {
    color3.style.backgroundColor = generateColors();
  } else if (color4.style.backgroundColor === color1.style.backgroundColor || color3.style.backgroundColor || color2.style.backgroundColor) {
    color4.style.backgroundColor = generateColors();
  } else if (color1 === color2 || color3 || color4) {
    color1.style.backgroundColor = 'black';
  }
  color1.style.backgroundColor = 'black';
});
