////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {    
    var randomNumber = Math.random(); 
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
    // var move = null;
function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // var move ;
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    // var move = null;
    // console.log(move);
    // return getInput(move);

    function getPlayerMove(move) {
    return move || getInput();
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // var move ;
    // If a `move` has a value, your expression should evaluate to that value.
    // var move = null;
    // console.log(move);
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    // return randomPlay(move);

     function getComputerMove(move) {
    return move || randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove){
        winner = "Tie";
    }
    else if (playerMove === "rock"){
        if (computerMove === "scissors") {winner = "Player";}
        else {winner = "Computer";}
    } else if (playerMove === "scissors") {
        if (computerMove === "rock") {winner = "player";}
        else {winner = "computer";}
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {winner = "player";}
        else {winner = "computer";}
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins <= 5 && computerWins <= 5) {
       return  getWinner();}
        // console.log('winner is' + winner);
        if (winner === 'player') {
            console.log ('player scores a point');
            playerWins += 1;
        }
        if (winner === 'computer') {
            // console.log ('computer scores a point');
            computerWins += 1;
        } else {
        return ('tie');
        // console.log (tie);
    }
    return [playerWins, computerWins];
} 
};
