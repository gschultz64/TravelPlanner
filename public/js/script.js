$(document).ready(function() {
  console.log("Hey friend!");
  M.AutoInit();
  $('.sidenav').sidenav();
  $('.datepicker').datepicker({
    autoClose: true,
    setDefaultDate: true,
    showDaysInNextAndPreviousMonths: true,
    showClearBtn: true
  });
  // var date = $('#startDate').serialize;
  // $('#endDate').datepicker({
  //   autoClose: true,
  //   setDefaultDate: true,
  //   showDaysInNextAndPreviousMonths: true,
  //   showClearBtn: true,
  //   defaultDate: date
  // });
  $('.edit-form').on('submit', function(e) {
    e.preventDefault();
    var newData = $(this).serialize();    
    var url = $(this).attr('action');
    $.ajax({
      method: 'PUT',
      data: newData,
      url: url
    }).done(function() {
      window.location = url
    });
  });
  

  $('a.delete').on('click', function(e) {
    e.preventDefault();
    var url = $(this).attr('href');
    $.ajax({
      method: 'DELETE',
      url: url
    }).done(function () {
      window.location = '/trips';
    });
  });
});

