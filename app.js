// Problem: No user interaction causes no change to application
//Solution: When user interacts with the program the program will respond
$(document).ready(function(){

var color = $(".selected").css("background-color");

// Clicking on control list items
$(".controls li").click(function(){
  $(this).siblings().removeClass("selected");
  $(this).addClass("selected");

  color = $(this).css("background-color");
  });



});
