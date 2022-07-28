const choices =['rock', 'paper', 'scissors']
let playerScore = 0
let computerScore = 0

function getComputerChoice(){
   return choices[Math.floor(Math.random()*choices.length)]
}
function playRound(playerSelection, computerSelection) {

}
function winGame(playerSelection, computerSelection){
   return results = playerSelection === 'paper' && computerSelection === 'rock' ? 'You win! Paper beats Rock' :
   playerSelection === 'scissors' && computerSelection === 'paper' ? 'You win! Scissors beats paper':
   playerSelection === 'rock' && computerSelection === 'scissors' ? 'You win! Rock beats Scissors': false
}
function loseGame(playerSelection, computerSelection){
   return results = playerSelection === 'paper' && computerSelection === 'scissors' ? 'You Lose! Scissors beats Paper':
   playerSelection === 'rock' && computerSelection === 'paper' ? 'You Lose! Paper beats Rock':
   playerSelection === 'scissors' && computerSelection === 'rock' ? 'You Lose! Rock beats Scissors':
   false;
}
  