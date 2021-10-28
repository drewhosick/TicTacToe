const boxes = document.querySelectorAll('div');

let board = ['','','','','','','','','']; // create array for board

let turn = 0; // set turn to turn 0 so we can track who's turn it is

const addXO = (location, player) => {
    
    /* split up location id so we can check board location without
    the b in front due to id naming conventions not allowing
    a number at the start. */
    let boardLoc = location.split(''); 
    
    /* Function nested inside the addXO function to make it easier
    to recall original location */
    const changeBoard = (loc, xOrO) => {
        boxes.forEach(box => {
            // check to see if the current itteration of box matches
            if (box.id == location) {
                
                if (xOrO === 'O') {
                    // If it's 'O' turn, remove the 'X' class and add circle
                    box.firstChild.classList.remove('fa-times','fas'); 
                    box.firstChild.classList.add('fa-circle', 'far');
                }
                // make the letter appear
                box.firstChild.classList.remove('green-yellow');
                box.firstChild.classList.add('black');
            }
        })
    };

    // This is where the board changes happen if it's not an illegal move
    if (board[boardLoc[1]] != '') {
        alert('That spot is already used');
    } else {
        if (player === 'even') {
            board[boardLoc[1]] = 'X';
            changeBoard(boardLoc[1], 'X');
        } else {
            board[boardLoc[1]] = 'O';
            changeBoard(boardLoc[1], 'O');
        }
        turn++;
    }
    winCheck();
};

const winCheck = () => {
    let Win1 = board[0] + board[1] + board[2];
    let Win2 = board[3] + board[4] + board[5];
    let Win3 = board[6] + board[7] + board[8];
    let Win4 = board[0] + board[3] + board[6];
    let Win5 = board[1] + board[4] + board[7];
    let Win6 = board[2] + board[5] + board[8];
    let Win7 = board[0] + board[4] + board[8];
    let Win8 = board[2] + board[4] + board[6];

    if (Win1 === 'XXX' || Win2 === 'XXX'  || Win3 === 'XXX' || Win4 === 'XXX' || Win5 === 'XXX' || Win6 === 'XXX' || Win7 === 'XXX' || Win8 === 'XXX') {
        alert('X is Winner');
    };
    if (Win1 === 'OOO' || Win2 === 'OOO'  || Win3 === 'OOO' || Win4 === 'OOO' || Win5 === 'OOO' || Win6 === 'OOO' || Win7 === 'OOO' || Win8 === 'OOO') {
        alert('O is Winner');
    };
};

boxes.forEach(box => {
    box.addEventListener('click', (e) => {
        // this is where we call addXO and then send the box target and which player is playing
        if (turn % 2 === 0 ) {  // Checks that number is even with no remainder
            addXO(box.id, 'even');
            console.log(box.id);
        } else {
            addXO(box.id, 'odd');
        }
    });
});