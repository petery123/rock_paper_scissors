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
}

function playRound(){
    let human = getHumanChoice();
    let computer = getComputerChoice();
    let status = "win";

    switch (`${human}_${computer}`) {
        case 'rock_scissors':
        case 'paper_rock':
        case 'scissors_paper':
            humanScore ++;
            break;
        default:
            computerScore ++;
            status = "lose";
            break;
    }

    console.log(
    `Your Choice: ${human}
    Computer Choice: ${computer}
    You ${status} this round
    YOU - COMPUTER
    ${humanScore} - ${computerScore}`)
}

playRound()