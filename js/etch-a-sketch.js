const canvas = document.querySelector('.canvas');
const defaultBtn = document.getElementById('default');
const randomsBtn = document.getElementById('randoms');
const eraserBtn = document.getElementById('eraser');
const resetBtn = document.getElementById('reset');
let pickColor = [];
let color = [];
let gridSize = document.getElementById('grid-size');
let currentState = false;

function createCanvas(newSize) {
    canvas.style.display = 'grid';
    canvas.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;
    for (i = 1; i <= newSize * newSize; i++) {
        const createGrid = document.createElement('div');
        createGrid.classList.add('cell');
        createGrid.style.border = "0.5px solid rgb(200, 200, 200)";
        createGrid.style.backgroundColor = 'white';
        canvas.appendChild(createGrid);
    }
    canvas.addEventListener('click', getColor);
};
createCanvas(16);