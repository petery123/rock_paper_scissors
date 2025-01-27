const buttons = document.querySelector(".buttons");

const roundWinner = document.querySelector("#roundWinner");
const userBoard = document.querySelector("#userBoard");
const computerBoard = document.querySelector("#computerBoard");
const userPlay = document.querySelector("#userPlay");
const computerPlay = document.querySelector("#computerPlay");
const gameStatus = document.querySelector(".gameStatus");

const overallWinner = document.createElement("p");
overallWinner.id = "overallWinner";

let userScore = 0;
let computerScore = 0;

userBoard.textContent = userScore;
computerBoard.textContent = computerScore;

buttons.addEventListener("click", handlelick);

function handlelick(event){
    let target = event.target.id;
    //remove 'Btn' from behind target name and runs play game function.
    playRound(target.slice(0, -3));
}

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if (num === 0){
        return "rock"
    } else if (num === 1){
        return "paper"
    } else if (num === 2){
        return "scissors"
    }
}

function playRound(userChoice){
    let computerChoice = getComputerChoice();
    let status = winStatus(userChoice, computerChoice);

    computerPlay.textContent = computerChoice;
    userPlay.textContent = userChoice
    userBoard.textContent = userScore;
    computerBoard.textContent = computerScore;
    roundWinner.textContent = `You ${status} this round`

    if (userScore === 5 || computerScore === 5){
        buttons.removeEventListener("click", handlelick);
        overallWinner.textContent = userScore > computerScore? "You WIN!" : "Computer WINS!";
        gameStatus.appendChild(overallWinner);
        roundWinner.textContent = "GAME OVER!";
    }
}

function winStatus(human, computer){
    switch (`${human}_${computer}`) {
        case 'rock_scissors':
        case 'paper_rock':
        case 'scissors_paper':
            userScore++;
            return "win"
        case 'rock_rock':
        case 'paper_paper':
        case 'scissors_scissors':
            return "draw"
        default:
            computerScore++;
            return "lose";
    }
}


