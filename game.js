let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');

for(let button of buttons){
    button.addEventListener('click', playRound);
}

// plays each round once a button is clicked
function playRound(e){
    let playerChoice = e.target.getAttribute('id');
    let computerChoice = computerPlay();

    let roundResult = getRoundResult(playerChoice, computerChoice);

    let broadcaster = document.getElementById('result');

    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1, playerChoice.length);
    computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.substring(1, computerChoice.length);
    
    
    if(roundResult === "draw"){
        broadcaster.textContent = `Tie! Both players chose ${playerChoice}.`;
    }

    else{

        if(roundResult === "win"){
            broadcaster.textContent = `You won! ${playerChoice} beats ${computerChoice}.`
            playerScore++;
        }
        else{
            broadcaster.textContent = `You lost! ${computerChoice} beats ${playerChoice}.`;
            computerScore++;
        }

        let scoreboard = document.getElementById('score');
        scoreboard.textContent = `You ${playerScore} : ${computerScore} CPU`;

        if(playerScore === 5 || computerScore === 5){

            let btns = document.querySelectorAll('button');
            btns.forEach( (btn) => {
                btn.remove();
            });

            let subheader = document.querySelector('#sub-header');
            subheader.remove();
            
            if(playerScore === 5){
                broadcaster.textContent = "Congratulations! You beat the computer!";
            }
            else{
                broadcaster.textContent = "Better luck next time. You were so close!";
            }

            let playAgain = document.createElement('button');
            playAgain.textContent = "Play Again";
            playAgain.addEventListener('click', () =>{
                window.location.reload();
            });

            document.querySelector('body').appendChild(playAgain);
        }
    }
}

// helper for playRound()
function getRoundResult(playerChoice, computerChoice){

        // handle case in which they draw
        if(playerChoice === computerChoice){
            return "draw";
        }
        
        // if player chose rock
        if(playerChoice === "rock"){
    
            if(computerChoice === "paper"){
                return "loss";
            }
            else{
                return "win";
            }
        }
    
        // if player choice paper
        else if(playerChoice === "paper"){
    
            if(computerChoice === "scissors"){
                return "loss";
            }
            else{
                return "win";
            }
        }
    
        // if player chose scissors
        else{
    
            if(computerChoice === "rock"){
                return "loss";
            }
            else{
                return "win";
            } 
        }
}


// helper for computerPlay()
function getRandInt(bound){
    return Math.floor(Math.random() * bound);
}


function computerPlay(){

    let randInt = getRandInt(100);

    let choice;
    if(randInt < 33){
        choice = "rock"
    } else if(randInt < 67){
        choice = "paper";
    } else{
        choice = "scissors";
    }

    return choice;

}


