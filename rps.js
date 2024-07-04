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

function getHumanChoice(){
    let choice = prompt("Enter 'rock' 'paper' or 'scissors'");
    return choice;
}

function winStatus(human, computer){
    switch (`${human}_${computer}`) {
        case 'rock_scissors':
        case 'paper_rock':
        case 'scissors_paper':
            return true;
        default:
            computerScore ++;
            return false;
    }
}

function playRound(){
    let human = getHumanChoice();
    let computer = getComputerChoice();
    let status = "win";

    winStatus(human, computer)? humanScore++ : (() => {
        status = "lose";
        computerScore ++});

    console.log(
    `Your Choice: ${human}
    Computer Choice: ${computer}
    You ${status} this round
    YOU - COMPUTER
    ${humanScore} - ${computerScore}`)
}

playRound()