// helper for computerPlay()
function getRandInt(bound){
    return Math.floor(Math.random() * bound);
}

// get's computer's move
function computerPlay(){

    let randInt = getRandInt(2);

    let choice;
    if(randInt === 0){
        choice = "rock"
    } else if(randInt === 1){
        choice = "paper";
    } else{
        choice = "scissors";
    }

    return choice;

}

// gets player's move
function playerPlay(){
    let choice;
    while(true){

        choice = window.prompt("Rock, Paper, or Scissors?");

        choice = choice.toLowerCase();

        if(choice === "rock" || choice === "paper" || choice === "scissors"){
            break;
        }

        window.alert("Invalid choice. Try again");

    }

    return choice;

}

function playRound(playerChoice, computerChoice){
    
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

function playGame(numRounds){
    // counters for score
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < numRounds; i++){

        // play the round
        let playerChoice = playerPlay();
        let computerChoice = computerPlay();
        let result = playRound(playerChoice, computerChoice);
        
        // capitalize the choices for displaying result
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1, playerChoice.length);
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.substring(1, computerChoice.length);

        // cases
        if(result === "win"){
            playerScore++;
            console.log(`You Win! ${playerChoice} beats ${computerChoice}.`);
        }
        else if(result === "loss"){
            computerScore++;
            console.log(`You Lose! ${computerChoice} beats ${playerChoice}.`);
        }
        else{
            console.log(`Tie! Both players chose ${playerChoice}.`);
            playerScore += 0.5;
            computerScore += 0.5;
        }
    }

    // final results of the game
    if(playerScore === computerScore){
        return `The final score is You ${playerScore} - ${computerScore} CPU. It's a tie!`;
    }
    else if(playerScore > computerScore){
        return `The final score is You ${playerScore} - ${computerScore} CPU. You win!`;
    }
    else{
        return `The final score is You ${playerScore} - ${computerScore} CPU. You lose!`;
    }

}

let result = playGame(5);
console.log(result);

