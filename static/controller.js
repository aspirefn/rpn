$(function() {
  $('.number-button').click(function(e) {
    var number = $(e.target).attr('data-val');
    var current_entry = $('#entry').val();
    $('#entry').val(current_entry + number);
  });

  $('.enter-button').click(function(e) {
    var entry = parseInt($('#entry').val());
    $.get('/input/' + entry, function(result) {
      console.log(result);
    });
    $('#entry').val('');
  });

  $('.operator-button').click(function(e) {
    var operator = $(e.target).attr('data-val');

    $.get('/input/' + operator, function(result) {
      $('#entry').val(result);
    });
  });
});
