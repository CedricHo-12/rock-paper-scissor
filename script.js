

function playRound(playerSelection, computerSelection) {



    const player = playerSelection.toUpperCase();
    const computer = computerSelection.toUpperCase();
    
    if( (player == 'ROCK' && computer == 'SCISSORS') || (player == 'SCISSORS' && computer == 'PAPER') || (player =='PAPER' && computer == 'ROCK')) {
        
        playerScore += 1;
        document.getElementById('result').innerHTML = "You Win! You get " + playerScore + "points. Computer get " + computerScore + " points";
        
    }else if(player == computer){
        document.getElementById('result').innerHTML = "It's a tie! You get " + playerScore + "points. Computer get " + computerScore + " points";
    }else {
        computerScore += 1;
        document.getElementById('result').innerHTML = "You Lose! You get " + playerScore + "points. Computer get " + computerScore + " points";
    }
    
    
}


let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", event => {
    const btn = event.target.closest("button");
    const computerAns = getComputerChoice();

    if ( !btn || !buttons.contains(btn)) {
        return;
    }

    if(playerScore <5 && computerScore <5){
    document.getElementById('point').innerHTML = "You chose " + btn.textContent + " Computer chose " + computerAns;
    playRound(btn.textContent, computerAns);
    }

    if(playerScore === 5) {
        document.getElementById('final_result').innerHTML = "YOU ARE THE WINNER"
    }else if(computerScore ===5){
        document.getElementById('final_result').innerHTML = "COMPUTER IS THE WINNER"
    }

});

function getComputerChoice() {

    var computerChoice = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * computerChoice.length);
    const computerAns = computerChoice[random];
    return(computerAns);
}







