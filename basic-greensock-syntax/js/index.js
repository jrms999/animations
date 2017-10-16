$(document).on("click", function() {
  
  TweenMax.to("#box", 1, {borderRadius:"50%", ease:Linear.easeInOut});
  TweenMax.to("#box", 2, {backgroundColor:"blue", ease:Linear.easeInOut});
  
});