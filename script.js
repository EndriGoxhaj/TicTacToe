const gridCell = document.querySelectorAll('.cell');
let array = ["", "", "", "", "", "", "", "", ""]
gridCell.forEach((cell) => {
    cell.addEventListener('click', ()=>{
        cell.textContent = "X";
        array[cell.id] = "x"
        console.log(array);
    })
})
