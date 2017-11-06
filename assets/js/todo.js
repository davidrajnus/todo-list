//Check/Uncheck off todo by clicking
$("li").click(function() {
  $(this).toggleClass("completed");
});