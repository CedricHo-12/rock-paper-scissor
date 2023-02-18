function getComputerChoice() {

    var computerChoice = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * computerChoice.length);
    const computerAns = computerChoice[random];
    return(computerAns);
}

function playRound(playerSelection, computerSelection) {

    const player = playerSelection.toUpperCase();
    const computer = computerSelection.toUpperCase();

    const playerCapitalize = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    let playerPoint = 0; 

    if( (player == 'ROCK' && computer == 'SCISSORS') || (player == 'SCISSORS' && computer == 'PAPER') || (player =='PAPER' && computer == 'ROCK')) {
        const reply = 'You Win! ' + computerSelection + ' beats ' + playerCapitalize;
        playerPoint = 1;
        return playerPoint;
    }
    else {
        const reply = 'You Lose! ' + computerSelection + ' beats ' + playerCapitalize;
        playerPoint = 2;
        return playerPoint;
    }
}

function game() {

    let playerScore = 0;
    let computerScore = 0;
    for( let i =0; i<5; i++) {

        const userAns = prompt('Rock Paper or Scissors');
        const result = playRound(userAns, getComputerChoice());
        if(result == 1) {
            playerScore += 1;
            console.log('You Win! You get ' +playerScore+ ' point');
        } else {
            computerScore += 1;
            console.log('You Lose! You get ' +playerScore+ ' point');
        }
        
    }

    if(playerScore > computerScore) {

        console.log('You are the winner!');
    }else {

        console.log('You are the loser!');
    }
}


game();
