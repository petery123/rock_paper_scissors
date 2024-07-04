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
    while (choice != "rock" && choice != 'paper' && choice != 'scissors'){
        alert("Invalid Entry TRY AGAIN!");
        choice = prompt("Enter 'rock' 'paper' or 'scissors'");
    }
    return choice.toLowerCase();
}




function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    let human = getHumanChoice();
    let computer = getComputerChoice();

    //playRound Function
    function playRound(human, computer){

        console.log(
        `
        Your Choice: ${human}
        Computer Choice: ${computer}
        You ${winStatus(human, computer)} this round
        YOU - COMPUTER
        ${humanScore} - ${computerScore}`)
    }

    //WinStatus Function
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
    

    for(let i = 0; i < 5; i++){
        human = getHumanChoice();
        computer = getComputerChoice();
        playRound(human, computer);
    }

    if (humanScore > computerScore){
        console.log("YOU WIN!!!!")
    } else if (humanScore < computerScore){
        console.log("YOU LOSE!!!")
    } else{
        console.log("YOU DRAW :)")
    }
}

playGame()