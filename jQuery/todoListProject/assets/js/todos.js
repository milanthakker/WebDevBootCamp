$('.list').on('click', 'li', markAsDone);
$('.list').on('click', 'span', function (event) {
  event.stopPropagation();
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });
});

$('.list').on('mouseenter', 'li', function (event) {
  $(this).children().toggle();
  event.stopPropagation();
});

$('.list').on('mouseleave', 'li', function (event) {
  $(this).children().toggle();
  event.stopPropagation();
});

// $('.list').on('mouseover', 'span', function (event) {
//   event.stopPropagation();
//   $(this).
// }

$('input').keypress(function (event) {
  if (event.which === 13) {
    addToDo($(this).val());
  }
});

function markAsDone() {
  $(this).toggleClass('completed');
}

// function deleteItem() {
//   event.stopPropagation();
//   $(this).parent().fadeOut(500, function () {$(this).remove();});
// }

function addToDo(toDoText) {
  var deleteButton = $('<span>').text('X ');
  deleteButton.addClass('delete');

  var addedToDo = $('<li>').text(toDoText);
  addedToDo.addClass('todo');

  addedToDo.prepend(deleteButton);
  $('.list').append(addedToDo);
}
