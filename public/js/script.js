$(document).ready(function() {
  console.log("Hey friend!");
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

  $('a.delete').on('click', function(e) {
    e.preventDefault();
    var url = $(this).attr('href');
    $.ajax({
      method: 'DELETE',
      url: url
    }).done(function (data) {
      console.log(data);
      window.location = '/trips';
    });
  });
});

