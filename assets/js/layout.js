$(document).ready(function () {
  $(".sidemenu-close").on("click", function () {
    $(".left-menubar").toggleClass("isHide");
    $(".right-sidedata").toggleClass("isHide");
  });
  // $(".innerMenu-list").slideUp();
  $(".inr-list .inr-link").on("click", function () {
    $(this).parent().siblings("li").find(".innerMenu-list").slideUp();
    $(this).next(".innerMenu-list").slideToggle();
    $(this).parent().toggleClass("active");
    $(this).parent().siblings("li").removeClass("active");
  });
  // =============== Side menu close end ===============//
  $(".leftmob-menu").on("click", function () {
    $(".left-menubar").toggleClass("isMob-show");
    $(".right-sidedata").removeClass("isHide");
    if ($(this).hasClass("isClose")) {
      $(this).removeClass("isClose");
      $(".leftmob-menu i").removeClass("fa-xmark").addClass("fa-bars");
    } else {
      $(this).addClass("isClose");
      $(".leftmob-menu i").addClass("fa-xmark").removeClass("fa-bars");
    }
  });
  // ================ date range picker js start =========== ///   https://preview.keenthemes.com/html/metronic/docs/forms/daterangepicker
  // var start = moment().subtract(29, "days");
  // var end = moment();

  // function cb(start, end) {
  //   $("#analy-daterange , #settl-daterange").html(start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY"));
  // }

  // $("#analy-daterange , #settl-daterange").daterangepicker({
  //   startDate: start,
  //   endDate: end,
  //   ranges: {
  //     "Today": [moment(), moment()],
  //     "Yesterday": [moment().subtract(1, "days"), moment().subtract(1, "days")],
  //     "Last 7 Days": [moment().subtract(6, "days"), moment()],
  //     "Last 30 Days": [moment().subtract(29, "days"), moment()],
  //     "This Month": [moment().startOf("month"), moment().endOf("month")],
  //     "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
  //   }
  // }, cb);

  // cb(start, end);

  // $(".innerMenu-list li a").on("click" , function(){
  //   if ($("this").parents(".inr-list").hasClass("active")) {
  //       $(this).removeClass("active");
  //   }
  //   else{
  //     $(this).addClass("active");
  //   }
  // });


});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//============= Global setting page multi select js start ===================//

// $(document).ready(function() {
//   $('#processorError-code').select2();
// });

$(document).ready(function () {



});