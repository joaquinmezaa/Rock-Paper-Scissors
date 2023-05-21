function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)

  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  };
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie!`;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return "You win! Rock beats Scissors"
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return "You win! Paper beats Rock"
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return "You win! Scissors beats Paper"
  } else {
    return `You lose!`;
  }
}

const playerSelection = 'paper';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))