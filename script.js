const gameBoard = (function (){
    let board = ["", "", "", "", "", "", "", "", ""];

    const player1 = {
        name: "endri",
        marker: 'X',
        score: 0,
        winner: false
    }
    const player2 = {
        name: "devi",
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
            gameBoard.board = ["", "", "", "", "", "", "", "", ""];
            gameBoard.player1.winner = false;
            gameBoard.player2.winner = false;
            dom.resultInfo.textContent = "";
            turn = 1;
            turnCounter = 0;
        })
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
                            }
                        }
                    }
                    if(gameBoard.player1.winner === true){
                        playGame.result = `${gameBoard.player1.name} wins the round!`;
                        gameBoard.player1.score++;
                        dom.renderDom();
                    }
                    else if(gameBoard.player2.winner === true){
                        playGame.result = `${gameBoard.player2.name} wins the round!`;
                        gameBoard.player2.score++;
                        dom.renderDom();
                    }
                    turnCounter++;
                    if(turnCounter === 9 && gameBoard.player1.winner === false && gameBoard.player2.winner === false) {
                        playGame.result = "Round tied!"
                        dom.renderDom();
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
let btn = document.querySelector('.hello');
btn.addEventListener('click', ()=>{
    playGame.resetGame();
})
const dom = (function(){
    let resultInfo = document.getElementById("result");
    let renderDom = ()=>{
        resultInfo.textContent = playGame.result;
    }

    return{
        resultInfo,
        renderDom
    }
})();