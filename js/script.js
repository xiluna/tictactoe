let currentPlayerPosistion = 'O';
let numberOfTurns = 0;
let endGame = false;

function performLogic(buttonld, tileld) {
  if (currentPlayerPosistion === 'O'){
    currentPlayerPosistion = 'X';
  } else if (currentPlayerPosistion === 'X'){
    currentPlayerPosistion = 'O';
  }
  $(buttonld).hide();
  $(tileld).html(currentPlayerPosistion)    
  if (numberOfTurns === 9){
    $('.projectTitle').text('Its a Draw!!!');
  }
}


$("#button1").click(function() {
    performLogic("#button1","#tile1");
    numberOfTurns + 1; 
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
    numberOfTurns + 1; 
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
    numberOfTurns + 1;
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
    numberOfTurns + 1;
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
    numberOfTurns + 1;
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
    numberOfTurns + 1;
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
    numberOfTurns + 1;
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
    numberOfTurns + 1;
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
    numberOfTurns + 1;
});

