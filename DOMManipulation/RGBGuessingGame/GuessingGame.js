colorButtons = document.querySelectorAll('.square');
easySelect = document.querySelector('#Easy');
hardSelect = document.querySelector('#Hard');

for (var i = 0; i < 6; i++) {
  console.log(i);
  colorButtons[i].addEventListener('click', compareColor);
}

easySelect.addEventListener('click', easyMode);
hardSelect.addEventListener('click', hardMode);
easySelect.addEventListener('mouseover', hoverMenuItem);
hardSelect.addEventListener('mouseout', unHoverMenuItem);

function compareColor() {
  console.log(this.id);
}

function hoverMenuItem() {
  console.log(this.id + 'hovered');
}

function unHoverMenuItem() {
  console.log(this.id + 'unhovered');
}

function easyMode() {
  console.log('hello');
}

function hardMode() {
  console.log('Goodbye');
}
