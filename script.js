let resetButton=document.createElement('button');
resetButton.id='reset';
resetButton.textContent='Play again';
const gameContainer=document.getElementById('Game-Container');

let currentTurnDisplay = document.getElementById("current-turn-value");
let currentTurnValue='X';
currentTurnDisplay.textContent=`${currentTurnValue}'s Turn`;

const signBox = document.querySelectorAll(".box");

function handleOnClick(event) {
  event.target.children[0].textContent = currentTurnValue;

  const signBoxArray = Array.from(signBox);
  console.log(signBoxArray);

  let valueOfSignBoxArray = signBoxArray.find((val,idx) => {
        return signBoxArray[idx].children[0].textContent === '';
    });


  let winner = isWinning(signBox, currentTurnValue);
  if (winner) {
    console.log('winner',winner);
    console.log(currentTurnDisplay.textContent);
    currentTurnDisplay.textContent = `Congratulations '${currentTurnValue}' has won!`;
    currentTurnDisplay.style.color='#2dda2d';

    signBox.forEach((val, idx) => {
      val.removeEventListener("click", handleOnClick);
    });

    gameContainer.appendChild(resetButton);
    
    return 0;
  }
  else if(valueOfSignBoxArray == undefined && !winner) {
    console.log('Game draw');
    currentTurnDisplay.textContent = `Game Draw`;
    currentTurnDisplay.style.color="#dedada";
    signBox.forEach((val, idx) => {
        val.removeEventListener("click", handleOnClick);
    });  
    gameContainer.appendChild(resetButton);

    if (currentTurnValue === "X"){
        currentTurnValue = "O";
    }
    else{
        currentTurnValue = "X";
    }

    return 0;
    
  }

  if (currentTurnValue === "X"){
    currentTurnValue = "O";
    currentTurnDisplay.textContent=`${currentTurnValue}'s Turn`;
  } 
  else{
    currentTurnValue = "X";
    currentTurnDisplay.textContent=`${currentTurnValue}'s Turn`;
  } 

}

signBox.forEach((val) => {
  val.addEventListener("click", handleOnClick);
});

function isWinning(signBox, currentTurnValue) {
  // row-1
  if (
    signBox[0].children[0].textContent == signBox[1].children[0].textContent &&
    signBox[1].children[0].textContent == signBox[2].children[0].textContent &&
    signBox[2].children[0].textContent == currentTurnValue
  )
    return currentTurnValue;

  //    row-2
  if (
    signBox[3].children[0].textContent == signBox[4].children[0].textContent &&
    signBox[4].children[0].textContent == signBox[5].children[0].textContent &&
    signBox[5].children[0].textContent == currentTurnValue
  )
    return currentTurnValue;

  //    row-3
  if (
    signBox[6].children[0].textContent == signBox[7].children[0].textContent &&
    signBox[7].children[0].textContent == signBox[8].children[0].textContent &&
    signBox[8].children[0].textContent == currentTurnValue
  )
    return currentTurnValue;

  //    col-1
  if (
    signBox[0].children[0].textContent == signBox[3].children[0].textContent &&
    signBox[3].children[0].textContent == signBox[6].children[0].textContent &&
    signBox[6].children[0].textContent == currentTurnValue
  )
    return currentTurnValue;

  //    col-2
  if (
    signBox[1].children[0].textContent == signBox[4].children[0].textContent &&
    signBox[4].children[0].textContent == signBox[7].children[0].textContent &&
    signBox[7].children[0].textContent == currentTurnValue
  )
    return currentTurnValue;

  //    col-3
  if (
    signBox[2].children[0].textContent == signBox[5].children[0].textContent &&
    signBox[5].children[0].textContent == signBox[8].children[0].textContent &&
    signBox[8].children[0].textContent == currentTurnValue
  )
    return currentTurnValue;

  //    left-to-right diagonal
  if (
    signBox[0].children[0].textContent == signBox[4].children[0].textContent &&
    signBox[4].children[0].textContent == signBox[8].children[0].textContent &&
    signBox[8].children[0].textContent == currentTurnValue
  )
    return currentTurnValue;

  //    right-to-left diagonal
  if (
    signBox[2].children[0].textContent == signBox[4].children[0].textContent &&
    signBox[4].children[0].textContent == signBox[6].children[0].textContent &&
    signBox[6].children[0].textContent == currentTurnValue
  )
    return currentTurnValue;

  return "";
}


resetButton.addEventListener("click", () => {
  for (let index = 0; index < signBox.length; index++) {
    signBox[index].children[0].textContent = "";
  }

  currentTurnDisplay.textContent=`${currentTurnValue}'s Turn`;


  signBox.forEach((val) => {
    val.addEventListener("click", handleOnClick);
  });
  gameContainer.removeChild(resetButton);
  currentTurnDisplay.style.color="yellow";

});
