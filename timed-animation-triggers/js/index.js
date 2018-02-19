// $("button").on("click", function() {
//   $("#animated-div").removeClass("hidden").addClass("animated fadeInRight");
// });

//Careful not to hover over the button again too quickly, or the animation can break
$("button").hover(function() {
  $("#animated-div").removeClass("hidden").addClass("animated fadeInRight");
}, function() {
  $("#animated-div").addClass("animated fadeOutRight");
  setTimeout(function() {
    $("#animated-div").removeClass("animated fadeOutRight").addClass("hidden");
  }, 300);
})
