const container = document.querySelector('#container');

function gridSize(value) {
if (value > 100 || value < 1 || isNaN(value)) {
    return;
} else {
container.style.cssText = `grid-template-columns: repeat(${value}, 1fr); grid-template-rows: repeat(${value}, 1fr)`;
let sum = value * value;
for (let i = 0; i < sum; i++) {
    let div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
    }};
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

function color() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
            div.style.opacity = (parseFloat(div.style.opacity) || 0) + 0.1;
        });
    });
};

function reset() {
    let value = prompt("How many squares per side of the grid?", "16");
    if (value > 100 || value < 1 || isNaN(value)) {
        alert("Input must be a number between 1 and 100. Try again.");
    } else {
        removeAllChildNodes(container);
        gridSize(value);
        color();
    };
};

gridSize(16);
color();

const button = document.querySelector('#button');
button.onclick = () => {reset()};