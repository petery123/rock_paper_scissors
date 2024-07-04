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
    return choice.toLowerCase();
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

function playRound(){
    let human = getHumanChoice();
    if (human != "rock" && human != 'paper' && human != 'scissors'){
        alert("Invalid Entry TRY AGAIN!")
        playRound();
        return
    }
    let computer = getComputerChoice();    

    console.log(
    `
    Your Choice: ${human}
    Computer Choice: ${computer}
    You ${winStatus(human, computer)} this round
    YOU - COMPUTER
    ${humanScore} - ${computerScore}`)
}

playRound()