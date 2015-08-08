$(function() {
  $('.number-button').click(function(e) {
    var number = $(e.target).attr('data-val');
    var current_entry = $('#entry').val();
    $('#entry').val(current_entry + number);
  });

  $('.enter-button').click(function(e) {
    var entry = parseInt($('#entry').val());
    receive(entry);
    $('#entry').val('');
  });

  $('.operator-button').click(function(e) {
    var operator = $(e.target).attr('data-val');
    var result = receive(operator);
    $('#entry').val(result.toString());
  });
});
