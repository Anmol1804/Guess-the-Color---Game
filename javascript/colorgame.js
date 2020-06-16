var numSquares = 6;
// var colors =  generateRandomColors(numSquares);
var colors = [];
// var pickedcolor = pickcolor();
var pickedcolor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// new....
init();
function init(){
  // modeButtons
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click",function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      if(this.textContent === "Easy"){
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset();
    });
  }
}

function setUpSquares(){
  for(var i=0; i<squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click",function(){
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;

      //compare color to picked color
      if(clickedColor === pickedcolor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      }else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContesnt = "Try Again!";
      }
    });
  }
}



for (var i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click",function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");

    if(this.textContent === "Easy"){
      numSquares = 3;
    } else {
      numSquares = 6;
    }
    reset();
  })
}
function reset(){
  //generate all new Colors
  colors = generateRandomColors(numSquares);

  //pick a new random color from array
  pickedcolor = pickcolor();

  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedcolor;

  //change colors of squares
  for(var i=0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }

  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  resetButton.textContent = "New colors";
}

//....new



// easyBtn.addEventListener("click",function(){
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedcolor = pickcolor();
//   colorDisplay.textContent = pickedcolor;
//   for (var i = 0; i < squares.length; i++) {
//     if(colors[i]){
//       squares[i].style.backgroundColor = colors[i];
//     }else {
//       squares[i].style.display = "none";
//     }
//   }
// });
//
// hardBtn.addEventListener("click",function(){
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedcolor = pickcolor();
//   colorDisplay.textContent = pickedcolor;
//   for (var i = 0; i < squares.length; i++) {
//       squares[i].style.backgroundColor = colors[i];
//       squares[i].style.display = "block";
//   }
// });
  resetButton.addEventListener("click",function(){
    reset();
  });

// resetButton.addEventListener("click",function(){
//   //generate all new Colors
//   colors = generateRandomColors(numSquares);
//
//   //pick a new random color from array
//   pickedcolor = pickcolor();
//
//   //change colorDisplay to match picked color
//   colorDisplay.textContent = pickedcolor;
//
//   //change colors of squares
//   for(var i=0; i<squares.length; i++){
//     //add initial colors to squares
//     squares[i].style.backgroundColor = colors[i];
//   }
//
//   h1.style.backgroundColor = "steelblue";
//   messageDisplay.textContent = "";
//   this.textContent = "New colors";
// })

// colorDisplay.textContent = pickedcolor;

// for(var i=0; i<squares.length; i++){
//   // //add initial colors to squares
//   // squares[i].style.backgroundColor = colors[i];
//
//   //add click listeners to squares
//   squares[i].addEventListener("click",function(){
//     //grab color of clicked square
//     var clickedColor = this.style.backgroundColor;
//
//     //compare color to picked color
//     if(clickedColor === pickedcolor){
//       messageDisplay.textContent = "Correct!";
//       resetButton.textContent = "Play Again?";
//       changeColors(clickedColor);
//       h1.style.backgroundColor = clickedColor;
//     }else{
//       this.style.backgroundColor = "#232323";
//       messageDisplay.textContesnt = "Try Again!";
//     }
//   })
//
// }

function changeColors(color){
  for(var i = 0;i<squares.length;i++){
    squares[i].style.backgroundColor = color;
  }
};

function pickcolor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr =[];

  //repeat num times
  for(var i=0 ;i<num ;i++){
    arr.push(randomColor());
    //get random color and push to array
  }

  //return array
  return arr;
};

function randomColor(){
  // pick a red from 0-255
  var r = Math.floor(Math.random() * 256)

  // pick a green from 0-255
  var g = Math.floor(Math.random() * 256)

  // pick a red from 0-255
  var b = Math.floor(Math.random() * 256)

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
