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
$('.Vid').hide()
$(".right").hide();
$(".validated").show();
$(".validatedH").hide();

$("body").dblclick(function () {
  alert("Double Clicking is not allowed on this website !");
  location.reload();
});
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
  setTimeout(function () {
    $(".image").hide();
    for (var j = 1; j < 17; j++) {
      $(`#${j}`).append(
        `<img  class="cars" src="./Images/S0-Cars-removebg-preview.png" alt="cars" ></img>`
      );
    }
    playing();
    $('.left ul').append('<div id="stopWatch">0</div>')
  }, 1000);
var time=0
  var playing = function () {
    setInterval(function () {
      $("#stopWatch").html(i);
      i++;
      time=i
  }, 1000);
    
    // if($('td').children().hasClass('validated')){$('td').unbind("click")
    //           clicking = 0;
    //      chosenImg = [];}
    let chosenImg = [];
    let clicking = 0;
    if (clicking === 0) {
      $(`td`).on("click", function (e) {
        console.log($(this).children().hasClass("validated"));

        $(this).children(".cars").hide();
        $(this).children(".image").show();
        $(this).children(".image").addClass("chosen");
        $(this).children(".cars").addClass("chosenH");
        chosenImg.push($(this).children(".chosen").prop("src"));
        console.log(chosenImg);
        clicking++;
        setTimeout(function () {
          if (clicking === 1) {
            setTimeout(function () {
              $(".chosenH").show();
              $(".chosen").hide();
              $(".image").removeClass("chosen");
              $(".cars").removeClass("chosenH");
              clicking = 0;
              chosenImg = [];
            }, 1000);
          } else if (clicking === 2) {
            if (chosenImg[0] !== chosenImg[1]) {
              $(".chosenH").show();
              $(".chosen").hide();
              $(".chosen").removeClass("chosen");
              $(".chosenH").removeClass("chosenH");
              clicking = 0;
              chosenImg = [];
            } else {
              logos.push(chosenImg);
              if(logos.length===8){$('.right').hide()
            $('.congrats').html("Congratulations you won !")
          $('.Vid').show()
          
          }
              $(".chosenH").addClass("validatedH");
              $(".chosen").addClass("validated");
              $(".chosen").removeClass("chosen");
              $(".chosenH").removeClass("chosenH");

              clicking = 0;
              chosenImg = [];
            }
            console.log(chosenImg);
            console.log(clicking);
            console.log(logos);
          }
        }, 1000);
      });
    }clearInterval()
  };
});
