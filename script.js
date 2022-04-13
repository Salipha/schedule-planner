$(".saveBtn").on("click", function () {
  var textbox = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  console.log(textbox, time);
  localStorage.setItem(time, textbox);
});
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));

function textboxcolors() {
  var currentHour = moment().hours();

  var date = moment().format("MMMM Do YYYY");
  document.getElementById("currentDay").innerHTML = date;
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
setTimeout(textboxcolors, 1000);
