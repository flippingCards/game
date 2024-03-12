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
$(".right").hide();

$("#play").on("click", function () {
  $(".right").show();
  for (var i = 1; i < 17; i++) {
    var getRandomInt = function () {
      return Math.floor(Math.random() * logos.length);
    };
    let x = getRandomInt();
    console.log(getRandomInt());
    $(`#${i}`).append(
      `<img id="A${i}" class="image" src=${logos.splice(x, 1)}>`
    );
  }
  console.log(logos);
  setTimeout(function () {
    $(".image").hide();
    for (var j = 1; j < 17; j++) {
      $(`#${j}`).append(
        `<img id='B${j}'  class="cars" src="./Images/S0-Cars-2-une-histoire-qui-fache-l-industrie-petroliere-70533.jpg" alt="cars" ></img>`
      );
    }
  }, 1000);

  var playing = function () {
    let chosenImg = [];
    let clicking = 0;
    if (clicking === 0) {
      $(`td`).on("click", function () {
        $(this).children(".cars").hide();
        $(this).children(".image").show();
        $(this).children(".image").addClass("chosen");
        $(this).children(".cars").addClass("chosenH");
        chosenImg.push($(this).children(".chosen").prop("src"));
        console.log(chosenImg);
        clicking++;
        setTimeout(function () {
          if (clicking  === 1) {
            
            $(".chosenH").show();
            $(".chosen").hide();
            $(".validated").show();
            $(".validatedH").hide();
            clicking = 0;
            chosenImg = [];
            $(".image").removeClass("chosen");
            $(".cars").removeClass("chosenH");
            
          } else if (clicking === 2) {
            if (chosenImg[0] !== chosenImg[1]) {
              $(".chosenH").show();
              $(".chosen").hide();
              clicking = 0;
              chosenImg = [];
              $(".chosen").removeClass("chosen");
              $(".chosenH").removeClass("chosenH");
            } else {
              $(".chosenH").addClass("validatedH");
              $(".chosen").addClass("validated");
              $(".chosen").removeClass("chosen");
              $(".chosenH").removeClass("chosenH");
              clicking = 0;
              chosenImg = [];
              $('.validated').show()
              $('.validatedH').hide()
              logos.push(chosenImg)
            }
            console.log(chosenImg);
            console.log(clicking);
            console.log(logos)
          }
        }, 2000);
      });
    }
  };
  playing();
});
