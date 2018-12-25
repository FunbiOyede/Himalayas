 $(window).scroll( () =>{
  var a = $(this).scrollTop();
        if(a>250){
    //sliding the image in from the right
        $("#intro-image").addClass("animated fadeInLeft 20s intro2");
       //adding the content in from the left
        $("#ban").addClass("animated fadeInRight banner-id");
    }
});

$(".create").hover(function (){
    $(this).toggleClass("animated swing");
});


// for calculator
var btc = 1600000;
let btcInput = document.getElementById("first-converter");
let usdOutput = document.getElementById("text-value");

btcInput.addEventListener("change", function (){
    let finalBtc = btcInput.value * btc;
    usdOutput.value = finalBtc;
});

