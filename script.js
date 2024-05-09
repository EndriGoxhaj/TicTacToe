let round = 0;
let winner = 0;
let gameBoard = ["", "", "", "", "", "", "", "", ""]
function createUser(name){
    const getScore = ()=> score;
    const giveScore = ()=> score++;
    const marker = prompt("choose marker");
    const play = () =>{
        let i = "";
        i = prompt("choose position");
        gameBoard[i] = marker;
        console.log(gameBoard);
        checkwinner();
        round++
        console.log(round);
        checktie();
    }
    let score = 0;
    return{name, marker, getScore, giveScore, play}
};
player1 = "Devi"
player2 = "Endri"
player1 = createUser(player1);
player2 = createUser(player2);

function checktie(){
    if(round === 9 && winner === 0){
        console.log("its a tie");
    }
}
function checkwinner(){
    if (gameBoard[0,1,2] === player1.marker){
        console.log(`${player1.name} wins`);
        player1.giveScore();
        winner++;
    }
    else if(gameBoard[0,1,2] === player2.marker){
        console.log(`${player2.name} wins`)
        player2.giveScore();
        winner++;
    }
    else if(gameBoard[3,4,5] === player1.marker){
        console.log(`${player1.name} wins`);
        player1.giveScore();
        winner++;
    }
    else if(gameBoard[3,4,5] === player2.marker){
        console.log(`${player2.name} wins`);
        player2.giveScore();
        winner++;
    }
    else if(gameBoard[6,7,8] === player1.marker){
        console.log(`${player1.name} wins`);
        player1.giveScore();
        winner++;
    }
    else if(gameBoard[6,7,8] === player2.marker){
        console.log(`${player2.name} wins`);
        player2.giveScore();
        winner++;
    }
    else if(gameBoard[0,4,8] === player1.marker){
        console.log(`${player1.name} wins`);
        player1.giveScore();
        winner++;
    }
    else if(gameBoard[0,4,8] === player2.marker){
        console.log(`${player2.name} wins`);
        player2.giveScore();
        winner++;
    }
    else if(gameBoard[2,4,6] === player1.marker){
        console.log(`${player1name} wins`);
        player1.giveScore();
        winner++;
    }
    else if(gameBoard[2,4,6] === player2.marker){
        console.log(`${player2.name} wins`);
        player2.giveScore();
        winner++;
    }
    else if(gameBoard[0,3,6] === player1.marker){
        console.log(`${player1.name} wins`);
        player1.giveScore();
        winner++;
    }
    else if(gameBoard[0,3,6] === player2.marker){
        console.log(`${player2.name} wins`);
        player2.giveScore();
        winner++;
    }
    else if(gameBoard[1,4,7] === player1.marker){
        console.log(`${player1.name} wins`);
        player1.giveScore();
        winner++;
    }
    else if(gameBoard[1,4,7] === player2.marker){
        console.log(`${player2.name} wins`);
        player2.giveScore();
        winner++;
    }
    else if(gameBoard[2,5,8] === player1.marker){
        console.log(`${player1.name} wins`);
        player1.giveScore();
        winner++;
    }
    else if(gameBoard[2,5,8] === player2.marker){
        console.log(`${player2.name} wins`);
        player2.giveScore();
        winner++;
    }
}

