const gameBoard = (function (){
    let board = ["", "", "", "", "", "", "", "", ""];

    const player1 = {
        name: "X",
        marker: 'X',
        score: 0,
        winner: false
    }
    const player2 = {
        name: "O",
        marker: 'O',
        score: 0,
        winner: false
    }
    return {
        board,
        player1,
        player2
    }
})();
const playGame = (function (){
    const gridCell = document.querySelectorAll('.cell');
    let turn = 1;
    let turnCounter = 0;
    let  result = '';
    let resetGame = ()=>{
        gridCell.forEach((cell)=>{
            cell.textContent = "";
            cell.style.color = "rgb(87, 82, 82)"
        })
        gameBoard.board = ["", "", "", "", "", "", "", "", ""];
        gameBoard.player1.winner = false;
        gameBoard.player2.winner = false;
        turn = 1;
        turnCounter = 0;
        resetDom();
        gameBoard.player1.score = 0;
        gameBoard.player2.score = 0;
        }

    const winCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    gridCell.forEach((cell) => {
        cell.addEventListener('click', ()=>{
            if(cell.textContent == "" && gameBoard.player1.winner === false && gameBoard.player2.winner === false){ // allows selecting only empty cells and stops the game when winner is found
                if(turn == 1){
                    cell.textContent = gameBoard.player1.marker;
                    turn = 2;
                }
                else if(turn == 2){
                    cell.textContent = gameBoard.player2.marker;
                    turn = 1;
                }
                    gameBoard.board[cell.id] = cell.textContent;
                    for(i = 0; i < 8; i++){// checks for winning combination
                        for(j = 0; j < 3; j++){
                            let [a,b,c] = winCombinations[i];
                            if(gameBoard.board[a] != "" && gameBoard.board[a] === gameBoard.board[b] && gameBoard.board[b] === gameBoard.board[c]){
                                if(gameBoard.board[a] === 'X'){gameBoard.player1.winner = true}
                                else gameBoard.player2.winner = true;
                                document.getElementById(a).style.color = 'rgb(227, 126, 126)';
                                document.getElementById(b).style.color = 'rgb(227, 126, 126)';
                                document.getElementById(c).style.color = 'rgb(227, 126, 126)';

                            }
                        }
                    }
                    if(gameBoard.player1.winner === true){
                        playGame.result = `${gameBoard.player1.name} wins the round!`;
                        gameBoard.player1.score++;
                        dom.renderInfo();
                    }
                    else if(gameBoard.player2.winner === true){
                        playGame.result = `${gameBoard.player2.name} wins the round!`;
                        gameBoard.player2.score++;
                        dom.renderInfo();
                        setTimeout(resetGame, 2000);
                    }
                    turnCounter++;
                    if(turnCounter === 9 && gameBoard.player1.winner === false && gameBoard.player2.winner === false) {
                        playGame.result = "Round tied!";
                        dom.renderInfo();
                    }
                }
            else{
                //DO NOTHING
            }
        })
    })

    return {
        result,
        resetGame
    }
})();
let resetBtn = document.querySelector('.reset');
let announcement = document.getElementById('announcement');
let xInfo = document.getElementById('xinfo');
let oInfo = document.getElementById('oinfo');
resetBtn.addEventListener('click', ()=>{
    playGame.resetGame();
})
let renderInfo = () =>{
    announcement.textContent = playGame.result;
    xInfo.textContent = `Player X score : ${gameBoard.player1.score}`;
    oInfo.textContent = `Player O score : ${gameBoard.player2.score}`;

}
let resetDom = ()=>{
    announcement.textContent = "";
}
const dom = (function(){

    return{
        renderInfo
    }
})();