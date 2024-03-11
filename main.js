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
$('.right').hide()

$("#play").on("click", function () {
  $('.right').show()
  for (var i = 1; i < 17; i++) {
  
    var getRandomInt = function () {
      return Math.floor(Math.random() * logos.length);
    };
    let x = getRandomInt();
     console.log(getRandomInt())
    $(`#${i}`).append(`<img id="${i}" class="img" src=${logos.splice(x, 1)}>`);
  }
  setTimeout(function()  {
    $('.img').hide()
    for(var j=1;j<17;j++){
      $(`#${j}`).append(`<button id='0${j}' ><img class="cars" src="./Images/S0-Cars-2-une-histoire-qui-fache-l-industrie-petroliere-70533.jpg" alt="cars" ></img></button>`)
      
    }
  }, 1000);


  $(`#0${j}`).on('click',function(){
    $(`#0${j}`).hide()
    $(`#${j}`).show()
  })




});

 




