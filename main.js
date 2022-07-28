const choices =['Rock', 'Paper', 'Scissors']
let playerScore = 0
let computerScore = 0

function getComputerChoice(){
   return choices[Math.floor(Math.random()*choices.length)]
}

function playRound(playerSelection, computerSelection) {

   let playerRps = playerSelection.toUpperCase();
   let computerRps = computerSelection.toUpperCase();

   return winGame(playerRps, computerRps) || loseGame(playerRps, computerRps) ||"It's a tie!";

}

function winGame(playerSelection, computerSelection){

   let results = 
   playerSelection === 'PAPER' && computerSelection === 'ROCK' ? 'You win! Paper beats Rock' :
   playerSelection === 'SCISSORS' && computerSelection === 'PAPER' ? 'You win! Scissors beats paper':
   playerSelection === 'ROCK' && computerSelection === 'SCISSORS' ? 'You win! Rock beats Scissors': false
   
   if (results) {
      playerScore++;
  }
  return results;

}

function loseGame(playerSelection, computerSelection){

   let results = 
   playerSelection === 'PAPER' && computerSelection === 'SCISSORS' ? 'You Lose! Scissors beats Paper':
   playerSelection === 'ROCK' && computerSelection === 'PAPER' ? 'You Lose! Paper beats Rock':
   playerSelection === 'SCISSORS' && computerSelection === 'ROCK' ? 'You Lose! Rock beats Scissors':
   false;

   if (results) {
      computerScore++;
  }
  return results;
  
}

function game(){
   let playerSelection;
   let computerSelection; 
   for (let i = 0; i < 5; i++) {
      playerSelection = prompt("Choose Rock, Paper or Scissors");
      computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
      console.log(`Player: ${playerScore} Computer: ${computerScore}`);
  }
  console.log(playerScore > computerScore ? 'Player Wins!': playerScore < computerScore ? 'Computer Wins!':'It\'s a Tie!');
}
game()
  