// Problem: No user interaction causes no change to application
//Solution: When user interacts with the program the program will respond
$(document).ready(function(){

var color = $(".selected").css("background-color");

// Clicking on control list items
$(".controls li").click(function(){
  // Removes the class from it's siblings
  $(this).siblings().removeClass("selected");
  // Adds the class to the color that the user has selected
  $(this).addClass("selected");
  //cache the current color
  color = $(this).css("background-color");
  });

//When click on new color
$("#revealColorSelect").click(function(){
  // Show color select or hide the color selecte
  $("#colorSelect").toggle();

});



});
