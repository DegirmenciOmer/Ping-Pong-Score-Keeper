/*
const p1Display = document.getElementById('p1-score');
const p2Display = document.getElementById('p2-score');
const p1Btn = document.getElementById('p1-btn');
const p2Btn = document.getElementById('p2-btn');
const resetBtn = document.getElementById('reset-btn');
const winScoreSlct = document.getElementById('score');

let isGameOver = false;

let winScore = parseInt(winScoreSlct.value);

winScoreSlct.addEventListener('change', (e) => {
  winScore = parseInt(e.target.value);
  reset();
});

let p1Score = 0;
let p2Score = 0;


p1Btn.addEventListener('click', () => {
  if (!isGameOver) {
    p1Score += 1;
    p1Display.textContent = p1Score;
    if (p1Score === winScore) {
      isGameOver = true;
      p1Display.style.color = 'green';
      p2Display.style.color = 'red';
    }
  }
});

p2Btn.addEventListener('click', () => {
  if (!isGameOver) {
    p2Score += 1;
    p2Display.textContent = p2Score;
    if (p2Score === winScore) {
      isGameOver = true;
      p1Display.style.color = 'red';
      p2Display.style.color = 'green';
    }
  }
});

const reset = () => {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.style.color = 'black';
  p2Display.style.color = 'black';
};
resetBtn.addEventListener('click', reset);
*/
const p1 = {
  display: document.getElementById('p1-score'),
  btn: document.getElementById('p1-btn'),
  score: 0,
};

const p2 = {
  display: document.getElementById('p2-score'),
  btn: document.getElementById('p2-btn'),
  score: 0,
};

const resetBtn = document.getElementById('reset-btn');
const winScoreSlct = document.getElementById('score');
let isGameOver = false;

for (let i = 1; i < 26; i++) {
  winScoreSlct.innerHTML += `<option key='${i}' value="${i}">${i}</option>`;
}

let winScore = parseInt(winScoreSlct.value);

winScoreSlct.addEventListener('change', (e) => {
  winScore = parseInt(e.target.value);
  reset();
});

const updateScores = (player, opponent) => {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winScore) {
      isGameOver = true;
      player.display.style.color = 'green';
      opponent.display.style.color = 'red';
      player.btn.disabled = true;
      opponent.btn.disabled = true;
    }
    player.display.textContent = player.score;
  }
};

const reset = () => {
  isGameOver = false;
  [p1, p2].forEach((p) => {
    p.score = 0;
    p.display.textContent = 0;
    p.display.style.color = 'black';
    p.btn.disabled = false;
  });
};
resetBtn.addEventListener('click', reset);
p1.btn.addEventListener('click', () => {
  updateScores(p1, p2);
});
p2.btn.addEventListener('click', () => {
  updateScores(p2, p1);
});
