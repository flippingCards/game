var logos = [
  "Images/Bentley.png",
  "Images/BMW.png",
  "Images/bugatti.png",
  "Images/ferrari.png",
  "Images/jaguar.png",
  "Images/lambo.png",
  "Images/porssche.png",
  "Images/Tesla.png",
  "Images/Bentley.png",
  "Images/BMW.png",
  "Images/bugatti.png",
  "Images/ferrari.png",
  "Images/jaguar.png",
  "Images/lambo.png",
  "Images/porssche.png",
  "Images/Tesla.png",
];

$(".PHTP ").slideUp(1)
$(".Vid").hide();
$(".right").hide();
$(".validated").show();
$(".validatedH").hide();
//here we are handling the double click so that the image can't be clicked twice, we decided to make it prohibited on all the website.
$("body").dblclick(function () {
  alert("Double clicking is not allowed on this Game!");
  location.reload();
});
// when you click on play the game starts. the images are appended randomly, with the getRandomInt function, to the 16 squares that are written in the index.html  and only shown after you click play.
$("#play").on("click", function () {
  
  
  $(".play").attr("disabled", true);
  $(".right").show();
  for (var i = 1; i < 17; i++) {
    var getRandomInt = function () {
      return Math.floor(Math.random() * logos.length);
    };
    let x = getRandomInt();
    console.log(getRandomInt());
    $(`#${i}`).append(`<img  class="image" src=${logos.splice(x, 1)}>`);
  }
  console.log(logos);
  //this setTimeOut function hides the images after they've been appended and replaces them with 'cars' png. then calls the playing function and appends the stop watch.
  setTimeout(function () {
    $(".image").hide();
    for (var j = 1; j < 17; j++) {
      $(`#${j}`).append(
        `<img  class="cars" src="./Images/S0-Cars-removebg-preview.png" alt="cars" ></img>`
      );
    }
    playing();
  }, 1000);
  //here is where the magic happens..
  var playing = function () {
    //these are the array where we are comparing the images src property and the clicking is for how many times the user clicked
    let clicking = 0;
    let score = 0;
    let chosenImg = [];
    let congratsAudio= document.querySelector('audio');
    let playAudio= function(){
      congratsAudio.play();
    }
    let ShowCarsHideImage = function () {
      $(".chosenH").show();
      $(".chosen").hide();
      $(".chosen").removeClass("chosen");
      $(".chosenH").removeClass("chosenH");
    };
    let EmptyChosenImgReassingClicking = function () {
      clicking = 0;
      chosenImg = [];
    };
    if (clicking === 0) {
      $(`td`).on("click", function () {
        //this if is to make sure when an image is validated it can't be clicked anymore !
        if (!$(this).children(".image").hasClass("validated")) {
          $(this).children(".cars").hide();
          $(this).children(".image").show();
          $(this).children(".image").addClass("chosen");
          $(this).children(".cars").addClass("chosenH");
          chosenImg.push($(this).children(".chosen").prop("src"));
          clicking++;
          score += clicking;
          setTimeout(function () {
            if (clicking === 1) {
              //if the user click only on one photo it will be hiden after one second
              setTimeout(function () {
                ShowCarsHideImage();
                EmptyChosenImgReassingClicking();
              }, 1500);
            } else if (clicking === 2) {
              //if the user clicks on two photos and the comparison is false the images will be hidden
              if (chosenImg[0] !== chosenImg[1]) {
                ShowCarsHideImage();
                EmptyChosenImgReassingClicking();
              } else {
                //if the user clicks on two photos and the comparison is True the images will remain showed with the class validated and we are pushing the array of src attributes to the original logos array as it's empty.
                logos.push(chosenImg);
                if (logos.length === 8) {
                  //when we the logos array gets to length 8 it means the game has ended and user has won so we display a congratulations video
                  $(".right").hide();
                  playAudio()
                  $(".Vid").show();
                  $(".Vid").append(
                    `<div class="content"><h1>You Won !</h1><h3>You made it in ${score} moves</h3></div>`
                  );
                  
                  setTimeout(function () {
                    location.reload();
                  }, 20000);
                }
                $(".chosenH").addClass("validatedH");
                $(".chosen").addClass("validated");
                $(".chosen").removeClass("chosen");
                $(".chosenH").removeClass("chosenH");
                EmptyChosenImgReassingClicking();
              }
            }
            //here we handle the case where the user clicks more than two times so that the images don't get stuck on show and get hided back even if some of them are chosen right.
            else {
              ShowCarsHideImage();
              EmptyChosenImgReassingClicking();
            }
          }, 1500);
        }
      });
    }
  };
});
$(".HTP").click(function(){
  $(".PHTP ").slideToggle();
});

