let cell = document.querySelector('.cell');

cell.addEventListener('click', () => {
    if(cell.textContent = 'X'){
        cell.textContent ='O';

    }
    else 
});

/*inscrire un x ou un o dans chaque ases du jeu*/

let cells = document.querySelectorAll('.cell');
let btnReset = document.querySelector('btnReset')
let turn = 1;

for(){}

cell.addEventListener('click', () => {
    if(cell.addEventListener('click', () => {
        if(!cell.textContent){
            /*console.log ('test');*/
            /*console.log&turn % 2);*/
            if(turn % 2){
                cell.textContent = 'X';
            }
            else {
                cell.textContent = 'O';
            }
                

            turn++;
            /*console.log ('test');*/

        }
    }))
    /*if(cell.textContent === 'X'){
        cell.textContent = 'O';
    }
    else{
        cell.textContent = 'X';
    }*/
})

btnReset.addEventListener('click', () => {
    for(let cell of cells)
    cell.textContent= '';
})
