// Problem: No user interaction causes no change to application
//Solution: When user interacts with the program the program will respond
$(document).ready(function(){

var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mousedown = false;

// Clicking on control list items
$(".controls").on("click", "li", function(){
  // Removes the class from it's siblings
  $(this).siblings().removeClass("selected");
  // Adds the class to the color that the user has selected
  $(this).fadeIn(3000).addClass("selected");
  //cache the current color
  color = $(this).css("background-color");
  });

//When click on new color
$("#revealColorSelect").click(function(){
  // Show color select or hide the color selecte
  changeColor();
  $("#colorSelect").toggle();
});

// Update color of span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");
}

// When color sliders change
$("input[type=range]").change(changeColor);

// When Add Color is pressed
$("#addNewColor").click(function(){
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  $newColor.click();
});

$canvas.mousedown(function(e){
  lastEvent = e;
  mousedown = true;
}).mousemove(function(e){
  if(mousedown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mousedown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});



});
