alert('Connected!');
listItems = document.querySelectorAll('li');

for (i in listItems) {
  listItems[i].addEventListener('mouseover', hovered);
  listItems[i].addEventListener('mouseout', unhovered);
}

function hovered() {
  this.classList.add('hovered');
}

function unhovered() {
  this.classList.remove('hovered');
}
