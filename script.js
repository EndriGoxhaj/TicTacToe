
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
    }
    let score = 0;
    return{name,marker, getScore, giveScore, play}
};
player1 = "Devi"
player2 = "Endri"
player1 = createUser(player1);
player2 = createUser(player2);

    