var playerScore = 0;
var computerScore = 0;

function playGame(playerChoice) {
  var computerChoice = getComputerChoice();
  var result = getResult(playerChoice, computerChoice);

  if (result === "Player wins") {
    playerScore += 1;
  } else if (result === "Computer wins") {
    computerScore += 1;
  }

  document.getElementById("resultText").textContent = result;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}

function getComputerChoice() {
  var choices = ["rock", "paper", "scissors"];
  var randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "Player wins";
  } else {
    return "Computer wins";
  }
}