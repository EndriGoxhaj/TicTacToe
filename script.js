const gameBoard = (function (){
    let board = ["", "", "", "", "", "", "", "", ""];

    let turn = 1;

    const player1 = {
        name: 'Player 1',
        marker: 'X'
    }
    const player2 = {
        name: 'Player 2',
        marker: 'O'
    }

    return {
        board,
        turn,
        player1,
        player2
    }
})();
const playGame = (function (){
    const gridCell = document.querySelectorAll('.cell');
    let isWinner = false;

    gridCell.forEach((cell) => {
        cell.addEventListener('click', ()=>{
            if(cell.textContent == "" && isWinner === false){ // prevents user from selecting an alredy selected cell
                if(gameBoard.turn == 1){
                    cell.textContent = gameBoard.player1.marker;
                    gameBoard.board[cell.id] = cell.textContent;
                    gameBoard.turn = 2;
                    console.log(gameBoard.board);
                    for(i = 0; i < 8; i++){
                        for(j = 0; j < 3; j++){
                            let [a,b,c] = winCombinations[i];
                            if(gameBoard.board[a] != "" && gameBoard.board[a] === gameBoard.board[b] && gameBoard.board[b] === gameBoard.board[c]){
                                isWinner= true;
                            }
                        }
                    }
                }
                else if(gameBoard.turn == 2){
                    cell.textContent = gameBoard.player2.marker;
                    gameBoard.board[cell.id] = cell.textContent;
                    gameBoard.turn = 1;
                    console.log(gameBoard.board);
                    for(i = 0; i < 8; i++){
                        for(j = 0; j < 3; j++){
                            let [a,b,c] = winCombinations[i];
                            if(gameBoard.board[a] != "" && gameBoard.board[a] === gameBoard.board[b] && gameBoard.board[b] === gameBoard.board[c]){
                                isWinner = true;
                            }
                        }
                    }
                }
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
   
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', ()=>{
        for(i = 0; i < 8; i++){
            for(j = 0; j < 3; j++){
                let [a,b,c] = winCombinations[i];
                if(gameBoard.board[a] != "" && gameBoard.board[a] === gameBoard.board[b] && gameBoard.board[b] === gameBoard.board[c]){
                    console.log("winner");
                }
            }
        }
    })
    return{
        winCombinations,
        winner
    }
})();