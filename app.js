const board = document.getElementById('board');
const playBtn = document.getElementById('play');
const trapsLabel = document.getElementById('traps');
const prev = document.getElementById('prev');
const next = document.getElementById('next');


let traps = [3,5,7];
let index = 0;


for (let i = 0; i < 25; i++) {
const cell = document.createElement('div');
cell.className = 'cell';
board.appendChild(cell);
}


function clearBoard() {
document.querySelectorAll('.cell').forEach(c => c.classList.remove('star'));
}


function placeStars(count) {
const cells = [...document.querySelectorAll('.cell')];
const shuffled = cells.sort(() => 0.5 - Math.random());
shuffled.slice(0, count).forEach(c => c.classList.add('star'));
}


playBtn.onclick = () => {
clearBoard();
placeStars(4);
};


prev.onclick = () => {
index = (index - 1 + traps.length) % traps.length;
trapsLabel.textContent = traps[index] + ' traps';
};


next.onclick = () => {
index = (index + 1) % traps.length;
trapsLabel.textContent = traps[index] + ' traps';
};
