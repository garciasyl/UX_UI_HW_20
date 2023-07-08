"use strict";
console.log('%c  ⚙️  ', 'background: #fff45d;', '-----------------');
$("#ui-tab").click(function () {
  $(".design-timeline .nav .nav-item").removeClass("active");
  selectFromTimeline(0);
  selectFromTimeline(5);
});
$("#navigation-tab").click(function () {
  $(".design-timeline .nav .nav-item").removeClass("active");
  selectFromTimeline(1);
});
$("#infoarq-tab").click(function () {
  $(".design-timeline .nav .nav-item").removeClass("active");
  selectFromTimeline(2);
});
$("#responsive-tab").click(function () {
  $(".design-timeline .nav .nav-item").removeClass("active");
  selectFromTimeline(3);
  selectFromTimeline(4);
});

function selectFromTimeline(pos) {
  $(".design-timeline .nav .nav-item:eq( " + pos + " )").addClass("active");
}
