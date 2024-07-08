const buttons = document.querySelector(".buttons");

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

const roundWinner = document.querySelector("#roundWinner");

buttons.addEventListener("click", (event) => {
    let target = event.target.id;
    //remove 'Btn' from behind target name and runs play game function.
    playRound(target.slice(0, -3));
    
})

let humanScore = 0;
let computerScore = 0;

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

function playRound(playerChoice){
    let computerChoice = getComputerChoice();
    let status = winStatus(playerChoice, computerChoice);

    roundWinner.textContent = `You ${status} this round`
}

function winStatus(human, computer){
    switch (`${human}_${computer}`) {
        case 'rock_scissors':
        case 'paper_rock':
        case 'scissors_paper':
            humanScore++;
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


