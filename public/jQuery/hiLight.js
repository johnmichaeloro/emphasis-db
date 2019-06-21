
// Functions and Variables

let hover    = false;
let signs    = false;
let allColor = false;
let yellow   = false;
let green    = false;
let blue     = false;
let word     = false;

const hoverButton = () => {
if (hover) {
  $('span').off()
  $('span').css('background-color', '')
  $('#hoverButton').css('border', ' 1px solid black')
  hover = false;
} else {
  $('span').off()
  $('span').css('background-color', '')
  $('.sentence').mouseover(function(e){

    let color = $(e.target).attr('color');

    if (color === "yellow") {

      $(e.target).css('background-color', '#FFF459')

    } else if (color === "blue") {

      $(e.target).parent().children(".fadedBlue").css('background-color',"#D2F9FF");
      $(e.target).parent().children(".lightBlue").css('background-color',"#59F1FF");
      $(e.target).parent().children(".darkBlue").css('background-color',"#598CF8");

    } else if (color === "green") {

      $(e.target).css('background-color', '#4DFC9C')

    } else if (color === "twoGreens") {

      $(e.target).parent().children(".lightGreen").css('background-color',"#CCFFE1");
      $(e.target).parent().children(".green").css('background-color',"#4DFC9C");

    }

  });

  $('.sentence').mouseout(function(e){
    $(e.target).css('background-color', 'transparent')
    $(e.target).parent().children().css('background-color', 'transparent')
  });




  $('.sign').mouseover(function(e){

    let color = $(e.target).parent().attr('color');



    if (color === "yellow") {

      $(e.target).parent().css('background-color', '#FFF459')

    } else if (color === "blue") {

      $(e.target).parent().parent().children(".fadedBlue").css('background-color',"#D2F9FF");
      $(e.target).parent().parent().children(".lightBlue").css('background-color',"#59F1FF");
      $(e.target).parent().parent().children(".darkBlue").css('background-color',"#598CF8");

    } else if (color === "green") {

      $(e.target).parent().css('background-color', '#4DFC9C')

    } else if (color === "twoGreens") {

      $(e.target).parent().parent().children(".lightGreen").css('background-color',"#CCFFE1");
      $(e.target).parent().parent().children(".green").css('background-color',"#4DFC9C");

    }

  });

  $('.sign').mouseout(function(e){
    $(e.target).parent().css('background-color', 'transparent')
    $(e.target).parent().parent().children().css('background-color', 'transparent')
  });






  hover    = true;
  allColor = false;
  green    = false;
  yellow   = false;
  blue     = false;
  word     = false;
  $('button').css('border', ' 1px solid black')
  $('#hoverButton').css({'border':'8px groove black','border-right':'8px groove white','border-left':'8px groove white'})
}
}
const allColorButton  = () => {
  if (allColor) {
    $('span').off()
    $('span').css('background-color', '')
    $('#allColorButton').css('border', ' 1px solid black')
    allColor = false;
  } else {
    $('span').off()
    $('.green').css('background-color', '#4DFC9C')
    $('.lightGreen').css('background-color', '#CCFFE1')
    $('.yellow').css('background-color', '#FFF459')
    $('.lightBlue').css('background-color', '#59F1FF')
    $('.fadedBlue').css('background-color', '#D2F9FF')
    $('.darkBlue').css('background-color', '#598CF8')
    allColor = true;
    hover    = false;
    green    = false;
    yellow   = false;
    blue     = false;
    word     = false;
    $('button').css('border', ' 1px solid black')
    $('#allColorButton').css({'border':'8px groove black','border-right':'8px groove white','border-left':'8px groove white'})
  }
}
const yellowButton    = () => {
  if (yellow) {
    $('span').off()
    $('span').css('background-color', '')
    $('#yellowButton').css('border', ' 1px solid black')
    yellow = false;
  } else {
    $('span').off()
    $('span').css('background-color', '')
    $('.yellow').css('background-color', '#FFF459')
    yellow   = true;
    hover    = false;
    green    = false;
    allColor = false;
    blue     = false;
    word     = false;
    $('button').css('border', ' 1px solid black')
    $('#yellowButton').css({'border':'8px groove black','border-right':'8px groove white','border-left':'8px groove white'})
  }
}
const blueButton      = () => {
  if (blue) {
    $('span').off()
    $('span').css('background-color', '')
    $('#blueButton').css('border', ' 1px solid black')
    blue = false;
  } else {
    $('span').off()
    $('span').css('background-color', '')
    $('.lightBlue').css('background-color', '#59F1FF')
    $('.fadedBlue').css('background-color', '#D2F9FF')
    $('.darkBlue').css('background-color', '#598CF8')
    blue     = true;
    hover    = false;
    green    = false;
    allColor = false;
    yellow   = false;
    word     = false;
    $('button').css('border', ' 1px solid black')
    $('#blueButton').css({'border':'8px groove black','border-right':'8px groove white','border-left':'8px groove white'})
  }
}
const greenButton     = () => {
  if (green) {
    $('span').off()
    $('span').css('background-color', '')
    $('#greenButton').css('border', ' 1px solid black')
    green = false;
  } else {
    $('span').off()
    $('span').css('background-color', '')
    $('.green').css('background-color', '#4DFC9C')
    $('.lightGreen').css('background-color', '#CCFFE1')
    green    = true;
    hover    = false;
    blue     = false;
    allColor = false;
    yellow   = false;
    word     = false;
    $('button').css('border', ' 1px solid black')
    $('#greenButton').css({'border':'8px groove black','border-right':'8px groove white','border-left':'8px groove white'})
  }
}


const signButton = () => {

  $(".sign:empty").each( function () {
    $(this).remove();
    });

  if (signs) {
    $('.sign').css('border', '')
    $('#signButton').css('border', ' 1px solid black')
    signs = false;
  } else {
    $('span').off();
    $('span').css('background-color', '');

    $('.sign').mouseover(function(e){

      let color = $(e.target).parent().attr('color');

      if (color === "yellow") {

        $(e.target).parent().children().css('background-color', '#FFF459')

      } else if (color === "blue") {

        $(e.target).parent().parent().children(".fadedBlue").children().css('background-color',"#D2F9FF");
        $(e.target).parent().parent().children(".lightBlue").children().css('background-color',"#59F1FF");
        $(e.target).parent().parent().children(".darkBlue").children().css('background-color',"#598CF8");

      } else if (color === "green") {

        $(e.target).parent().children().css('background-color', '#4DFC9C')

      } else if (color === "twoGreens") {

        $(e.target).parent().parent().children(".lightGreen").children().css('background-color',"#CCFFE1");
        $(e.target).parent().parent().children(".green").children().css('background-color',"#4DFC9C");

      }

    });

    $('.sign').mouseout(function(e){
      $(e.target).parent().children().css('background-color', 'transparent')
      $(e.target).parent().parent().children().children().css('background-color', 'transparent')
    });


    $('.sentence').mouseover(function(e){

      let color = $(e.target).attr('color');

      if (color === "yellow") {

        $(e.target).children().css('background-color', '#FFF459')

      } else if (color === "blue") {

        $(e.target).parent().children(".fadedBlue").children().css('background-color',"#D2F9FF");
        $(e.target).parent().children(".lightBlue").children().css('background-color',"#59F1FF");
        $(e.target).parent().children(".darkBlue").children().css('background-color',"#598CF8");

      } else if (color === "green") {

        $(e.target).children().css('background-color', '#4DFC9C')

      } else if (color === "twoGreens") {

        $(e.target).parent().children(".lightGreen").children().css('background-color',"#CCFFE1");
        $(e.target).parent().children(".green").children().css('background-color',"#4DFC9C");

      }

    });

    $('.sentence').mouseout(function(e){
      $(e.target).children().css('background-color', 'transparent')
      $(e.target).parent().children().children().css('background-color', 'transparent')
    });

    signs = true;
    hover    = false;
    blue     = false;
    allColor = false;
    yellow   = false;
    word     = false;

    $('button').css('border', ' 1px solid black')
    $('#signButton').css({'border':'8px groove black','border-right':'8px groove white','border-left':'8px groove white'})
  }
}


// Event Listeners

$('#allColorButton').on('click', function(){
  allColorButton();
})
$('#hoverButton').on('click', function(){
  hoverButton();
})
$('#yellowButton').on('click', function(){
  yellowButton();
})
$('#blueButton').on('click', function(){
  blueButton();
})
$('#greenButton').on('click', function(){
  greenButton();
})
$('#signButton').on('click', function(){
  signButton();
})
