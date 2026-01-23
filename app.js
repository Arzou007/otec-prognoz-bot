const tg = window.Telegram.WebApp;
tg.expand();

const GRID_SIZE = 5;
const STAR_COUNT = 4;
const modes = [3, 5, 7];
let modeIndex = 0;
let wins = 0;

const grid = document.getElementById('grid');
const signalBtn = document.getElementById('signal');
const modeLabel = document.getElementById('mode');
const winsLabel = document.getElementById('wins');

let cells = [];

function buildGrid() {
  grid.innerHTML = '';
  cells = [];
  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    grid.appendChild(cell);
    cells.push(cell);
  }
}

function generateSignal() {
  signalBtn.disabled = true;
  signalBtn.textContent = 'ANALYZING…';

  cells.forEach(c => c.textContent = '');

  setTimeout(() => {
    const indices = [...Array(25).keys()];
    const mines = shuffle(indices).slice(0, modes[modeIndex]);
    const safe = indices.filter(i => !mines.includes(i));

    shuffle(safe).slice(0, STAR_COUNT).forEach(i => {
      cells[i].textContent = '★';
    });

    signalBtn.textContent = 'GET SIGNAL';
    signalBtn.disabled = false;
  }, 1200);
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

document.getElementById('plus').onclick = () => {
  modeIndex = (modeIndex + 1) % modes.length;
  modeLabel.textContent = modes[modeIndex];
};

document.getElementById('minus').onclick = () => {
  modeIndex = (modeIndex - 1 + modes.length) % modes.length;
  modeLabel.textContent = modes[modeIndex];
};

signalBtn.onclick = generateSignal;

buildGrid();
