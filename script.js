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
    let isWinner = false;
    let turn = 1;
    let turnCounter = 0;

    gridCell.forEach((cell) => {
        cell.addEventListener('click', ()=>{
            if(cell.textContent == "" && isWinner === false){ // allows selecting only empty cells and stops the game when winner is found
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
                                isWinner = true;
                                if(gameBoard.board[a] === 'X'){gameBoard.player1.winner = true}
                                else gameBoard.player2.winner = true;
                            }
                        }
                    }
                    if(gameBoard.player1.winner === true){console.log(`winner is ${gameBoard.player1.name}`)}
                    else if(gameBoard.player2.winner === true){console.log(`winner is ${gameBoard.player2.name}`)}
                    turnCounter++;
                    if(turnCounter === 9 && isWinner === false) console.log("it's a tie")
                }
            else{
                //DO NOTHING
            }
        })
    })

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
    return 
})();
