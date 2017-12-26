var difficulty = true;
var answer;

easyRow = document.querySelector('.easyRow');
hardRow = document.querySelector('.hardRow');

colorButtons = document.querySelectorAll('.square');
restartButton = document.querySelector('#newColors');
easySelect = document.querySelector('#Easy');
hardSelect = document.querySelector('#Hard');

for (var i = 0; i < 6; i++) {
  colorButtons[i].addEventListener('click', checkAnswer);
}

restartButton.addEventListener('click', newGame);
restartButton.addEventListener('mouseover', hoverMenuItem);
restartButton.addEventListener('mouseout', unHoverMenuItem);

easySelect.addEventListener('click', easyMode);
easySelect.addEventListener('mouseover', hoverMenuItem);
easySelect.addEventListener('mouseout', unHoverMenuItem);

hardSelect.addEventListener('click', hardMode);
hardSelect.addEventListener('mouseout', unHoverMenuItem);
hardSelect.addEventListener('mouseover', hoverMenuItem);

newGame();

function newGame() {
  for (var i = 0; i < 6; i++) {
    colorButtons[i].classList.remove('hidden');
    colorButtons[i].style.background = randomColor();
  }

  if (difficulty) {
    easySelect.classList.remove('selected');
    correct = Math.floor(Math.random() * 6);
  }  else {
    hardSelect.classList.remove('selected');
    correct = Math.floor(Math.random() * 3);
  }

  answer = document.querySelector('#square' + (correct + 1));
  document.querySelector('#key').textContent = answer.style.background;
}

function randomColor() {
  colorR = Math.floor(Math.random() * 255);
  colorG = Math.floor(Math.random() * 255);
  colorB = Math.floor(Math.random() * 255);
  return ('RGB(' + colorR + ',' + colorG + ',' + colorB + ')');
}

function checkAnswer() {
  if (this === answer) {
    alert('Correct');
  } else {
    console.log('wrong');
    this.classList.add('hidden');
  }
}

function hoverMenuItem() {
  this.classList.add('hovered');
}

function unHoverMenuItem() {
  this.classList.remove('hovered');
}

function easyMode() {
  difficulty = false;
  hardRow.style.display = 'none';
  this.classList.add('selected');
  newGame();
}

function hardMode() {
  difficulty = true;
  hardRow.style.display = '';
  this.classList.add('selected');
  newGame();
}
