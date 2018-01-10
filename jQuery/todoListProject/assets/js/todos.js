$('.list').on('click', 'li', markAsDone);
$('.list').on('click', 'span', function (event) {
  event.stopPropagation();
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });
});

$('.plusButton').click(toggleInput);

$('input').keypress(function (event) {
  if (event.which === 13) {
    addToDo($(this).val());
  }
});

function markAsDone() {
  $(this).toggleClass('completed');
}

function toggleInput() {
  $('input').fadeToggle();
}

function addToDo(toDoText) {
  var deleteButton = $('<span><i class="fa fa-trash-o" aria-hidden="true"></i><span>');
  deleteButton.addClass('delete');

  var addedToDo = $('<li>').text(toDoText);
  addedToDo.addClass('todo');

  addedToDo.prepend(deleteButton);
  $('.list').append(addedToDo);
}
