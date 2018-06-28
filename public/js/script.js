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
});

