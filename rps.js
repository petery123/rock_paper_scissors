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
    return prompt("Enter 'rock' 'paper' or 'scissors'");
}
