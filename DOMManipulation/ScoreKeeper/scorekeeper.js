alert('connected!');

var player1Score = 0;
var player2Score = 0;

player1 = document.querySelector('#p1');
player2 = document.querySelector('#p2');
reset = document.querySelector('#reset');

score1 = document.getElementsByClassName('player1')[0];
score2 = document.getElementsByClassName('player2')[0];
finalScore = document.getElementsByClassName('finalScoreInput')[0];

player1.addEventListener('click', incrementPlayer1);
player2.addEventListener('click', incrementPlayer2);
reset.addEventListener('click', resetScores);
finalScore.addEventListener('input', resetScores);

function incrementPlayer1() {
  //alert('Player1 Scored!');
  player1Score++;
  score1.textContent = player1Score;
  if (player1Score >= finalScore.value) {
    score1.classList.add('Winner');
  }
}

function incrementPlayer2() {
  //alert('Player2 Scored!');
  player2Score++;
  score2.textContent = player2Score;
  if (player2Score >= finalScore.value) {
    score2.classList.add('Winner');
  }
}

function resetScores() {
  player1Score = 0;
  player2Score = 0;
  score1.textContent = player1Score;
  score2.textContent = player2Score;
  score1.classList.remove('Winner');
  score2.classList.remove('Winner');
}
