/*----- CONSTANTS -----*/
const WINNING_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let index = 0;

/*----- STATE VARIABLES -----*/
let boardState = [
    null, null, null,
    null, null, null,
    null, null, null,
];
let turn = 1;


/*----- CACHED ELEMENTS  -----*/
const gameBoard = document.querySelector('.game-board');
const squares = document.querySelectorAll('.box');
const resetGameBtn = document.querySelector('button');


/*----- EVENT LISTENERS -----*/
squares.forEach((square, idx) => {
    square.addEventListener('click', function (e) {
        console.log(e.target, idx);
        boardState[idx] = turn;
        turn = turn * -1;
        render();
    })
})

resetGameBtn.addEventListener('click', function (e) {
    squares.forEach((square, idx) => {
        boardState[idx] = null;
        render();
    })
})


/*----- FUNCTIONS -----*/
function getOutcome() {    
    WINNING_COMBOS.forEach((combo) => {
        console.log(combo);
        if(Math.abs(boardState[combo[0]]+boardState[combo[1]]+boardState[combo[2]]) === 3){
            console.log('You win!');
        }
    })
}

function render() {
    boardState.forEach((cell, idx) => {
        if (cell === 1) squares[idx].textContent = 'X';
        if (cell === -1) squares[idx].textContent = 'O';
        if (cell === null) squares[idx].textContent = ''; //original or reset game state
    })
    getOutcome(boardState);
}