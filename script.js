const gridCell = document.querySelectorAll('.cell');

gridCell.forEach((cell) => {
    cell.addEventListener('click', ()=>{
        for(i=0;i==9;i++){
            const cell = document.querySelector()
        }
        cell.textContent = "X"
        })
})
const btn = document.querySelector('.temp');
btn.addEventListener('click', ()=>{
    gridCell.forEach((cell) =>{
        for(i = 0;i == 9; i++){
            cell.setAttribute('id', i);
        }
    })
});