let round = 0;
let winner = 0;
let gameBoard = ["", "", "", "", "", "", "", "", ""]
function createUser(name){
    const getScore = ()=> score;
    const giveScore = ()=> score++;
    let marker;
    let score = 0;
    return{name, marker, getScore, giveScore, play}
};
player1 = "Devi"
player2 = "Endri"
player1 = createUser(player1);
player2 = createUser(player2);
player1.marker = 'x';
player2.marker = 'o';

let turn = true;
function play(){
    for(i = 0;i <= 8;i++){
        if(turn === true){
            let j = "";
            j =  prompt("choose position for player 1");
            gameBoard[j] = player1.marker;
            checkwinner();
            round++
            checktie();
            console.log(gameBoard);
            turn = !turn;
        }
        else if(turn === false){
            let j = "";
            j =  prompt("choose position for player 2");
            gameBoard[j] = player2.marker;
            checkwinner();
            round++
            checktie();
            console.log(gameBoard);
            turn = !turn;
        }
    }
}

function checktie(){
    if(round === 9 && winner === 0){
        console.log("its a tie");
    }
}

function checkwinner(){
    let player1combination = "" + player1.marker + player1.marker + player1.marker;
    let player2combination = "" + player2.marker + player2.marker + player2.marker;

    let combination1 = gameBoard[0] + gameBoard[1] + gameBoard[2];
    let combination2 = gameBoard[3] + gameBoard[4] + gameBoard[5];
    let combination3 = gameBoard[6] + gameBoard[7] + gameBoard[8];
    let combination4 = gameBoard[0] + gameBoard[4] + gameBoard[8];
    let combination5 = gameBoard[2] + gameBoard[4] + gameBoard[6];
    let combination6 = gameBoard[0] + gameBoard[3] + gameBoard[6];
    let combination7 = gameBoard[1] + gameBoard[4] + gameBoard[7];
    let combination8 = gameBoard[2] + gameBoard[5] + gameBoard[8];
    if (combination1 === player1combination )
    {
        console.log(`${player1.name} wins`);
        player1.giveScore();
        winner++;
        winnerd = true;
        i = 10;

    }
    else if(combination1 === player2combination){
        console.log(`${player2.name} wins`);
        player2.giveScore();
        winner++;
        i = 10;
    }
    else if (combination2 === player1combination )
    {
        console.log(`${player1.name} wins`);
        player1.giveScore();
        winner++;
        i = 10;
    }
    else if(combination2 === player2combination){
        console.log(`${player2.name} wins`);
        player2.giveScore();
        winner++;
        i = 10;
    }
    else if (combination3 === player1combination )
    {
        console.log(`${player1.name} wins`);
        player1.giveScore();
        winner++;
        i = 10;
    }
    else if(combination3 === player2combination){
        console.log(`${player2.name} wins`);
        player2.giveScore();
        winner++;
        i = 10;
    }
    else if (combination4 === player1combination )
    {
        console.log(`${player1.name} wins`);
        player1.giveScore();
        winner++;
        i = 10;
    }
    else if(combination4 === player2combination){
        console.log(`${player2.name} wins`);
        player2.giveScore();
        winner++;
        i = 10;
    }
    else if (combination5 === player1combination )
    {
        console.log(`${player1.name} wins`);
        player1.giveScore();
        winner++;
        i = 10;
    }
    else if(combination5 === player2combination){
        console.log(`${player2.name} wins`);
        player2.giveScore();
        winner++;
        i = 10;
    }
    else if (combination6 === player1combination )
    {
        console.log(`${player1.name} wins`);
        player1.giveScore();
        winner++;
        i = 10;
    }
    else if(combination6 === player2combination){
        console.log(`${player2.name} wins`);
        player2.giveScore();
        winner++;
        i = 10;
    }
    else if (combination7 === player1combination )
    {
        console.log(`${player1.name} wins`);
        player1.giveScore();
        winner++;
        i = 10;
    }
    else if(combination7 === player2combination){
        console.log(`${player2.name} wins`);
        player2.giveScore();
        winner++;
        i = 10;
    }
    else if (combination8 === player1combination )
    {
        console.log(`${player1.name} wins`);
        player1.giveScore();
        winner++;
        i = 10;
    }
    else if(combination8 === player2combination){
        console.log(`${player2.name} wins`);
        player2.giveScore();
        winner++;
        i = 10;
    }
}