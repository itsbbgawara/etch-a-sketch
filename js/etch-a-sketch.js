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
        //createGrid.style.border = "0.5px solid rgb(200, 200, 200)";
        createGrid.style.backgroundColor = 'white';
        canvas.appendChild(createGrid);
    }
    canvas.addEventListener('click', getColor);
};
createCanvas(16);

function getColor() {
    const cells = document.querySelectorAll('.cell');

    if (!currentState) {
        cells.forEach((cell) => {
            cell.addEventListener('mouseleave', newColor);
        });
        currentState = true;
    } else {
        cells.forEach((cell) => {
            cell.removeEventListener('mouseleave', newColor);
        });
        currentState = false;
    }
};

defaultBtn.addEventListener('click', function () {
    color = 'default';
});

randomsBtn.addEventListener('click', function () {
    color = 'randoms';
})

eraserBtn.addEventListener('click', function () {
    color = 'eraser';
});

resetBtn.addEventListener('click', function () {
    color = 'reset';
})

function newColor(e) {
    switch (color) {
        case 'randoms' :
            let randomColor = Math.floor(Math.random() * 360);
            pickColor = `hsl(${randomColor}, 100%, 50%)`;
            e.target.style.backgroundColor = pickColor;
            break;
        case 'default':
            pickColor = 'black';
            e.target.style.backgroundColor = pickColor;
            break;
        case 'eraser':
            pickColor = 'white';
            e.target.style.backgroundColor = pickColor;
            break;
        case 'reset':
            pickColor = 'white';
            e.target.style.backgroundColor = pickColor;
            break;
    };
}

function newGridSize() {
    let newGrid = document.querySelectorAll('.cell');
    newGrid.forEach((div) => {
        return div.remove();
    });
    createCanvas(gridSize.value);
}

gridSize.addEventListener('mouseup', newGridSize);

resetBtn.addEventListener('click', function () {
    let newGrid = document.querySelectorAll('.cell');
    newGrid.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
});