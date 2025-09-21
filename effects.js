//Scripting for cursor effect
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    let x = e.clientX - 10;
    let y = e.clientY - 10;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";})
    

//Scripting for start game button
const startButton = document.getElementById('start_Button')
    if(startButton){
    startButton.addEventListener('click', function(e) {
        e.preventDefault();
        const button = this;
        const anchor = button.closest('a')
        button.classList.add('pulsing');

        button.addEventListener('animationend', function() {
        button.classList.remove('pulsing');
        window.location.href = anchor.href;}, { once: true });
    });
}

//*************************************************************************************************************************************
// Code for Game Logic
//*************************************************************************************************************************************


//Global varible for player choice and scores
let pChoice = null;
let pWins = 0;
let cWins = 0;

// Scripting for choice buttons
document.querySelectorAll('.choice').forEach(choice => {
  choice.addEventListener('click', function (e) {
    e.preventDefault();
    const value = this.dataset.value;
    console.log("You chose:", value);
    if(pWins != 5 && cWins != 5){
      playRound(value);
      setImage(value, "PSelect");}
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let status = document.getElementById("status");
  status.innerHTML = "<h1> Let the game begin! </h1>"
})

function compSelect(){
    let choice = Math.random();
    if(choice <= 0.33 && choice >= 0){
      setImage("sword", "CSelect")
      return "sword"
    }
    else if(choice >0.33 && choice < 0.67){
      setImage("spear", "CSelect")
      return "spear"
    }
    else if(choice >=0.67 && choice <= 1){
      setImage("axe", "CSelect")
      return "axe"
    }
}

function playRound(humanChoice) {
  let PScore = document.getElementById("PScore");
  let CScore = document.getElementById("CScore");
  let status = document.getElementById("status")
  PScore.innerHTML = "";
  CScore.innerHTML = "";
  status.innerHTML = "";
  let message = "";
  compChoice = compSelect();
    if (humanChoice === compChoice)
        message = "The round ends in a tie."
    else if(humanChoice == "sword"){
        if(compChoice == "spear"){
          message = "Sword beats Spear. You win the round!"
          pWins++;
        }
        else{
          message = "Sword falters against Axe. You lose the round."
          cWins++
        }
    }
    else if(humanChoice == "spear"){
        if(compChoice == "axe"){
          message = "Spear beats Axe. You win the round!"
          pWins++}
        else{
            message = "Spear falters against Sword. You lose the round."
          cWins++;}
    }
    else if(humanChoice == "axe"){
        if(compChoice == "sword"){
            message = "Axe beats Sword. You win the round!"
          pWins++}
        else{
            message = "Axe falters against Spear. You lose the round."
          cWins++;}
    }
    if(pWins == 5)
      message = "You have won the game! Press restart to play again."
    else if (cWins == 5)
      message = "You have lost the game. Press restart to try again."
    status.innerHTML = "<h1>" + message + "</h1>";
    PScore.innerHTML = "<h1>" + pWins + "</h1>";
    CScore.innerHTML = "<h1>" + cWins + "</h1>";
}

function setImage(input, parent){
  const container = document.getElementById(parent);

  container.innerHTML = "";
  let img = document.createElement("img")
  img.style.maxWidth = "100%";
  img.style.maxHeight = "100%";

  if (input === "sword"){
    img.src = "images/sword.png";
  }
  else if (input === "spear"){
    img.src = "images/spear.png";
  }
  else if (input === "axe"){
    img.src = "images/axe.png";
  }

  container.appendChild(img);
}