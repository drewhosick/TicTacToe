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
    let winningCombos = [
        [board[0] + board[1] + board[2]],
        [board[3] + board[4] + board[5]],
        [board[6] + board[7] + board[8]],
        [board[0] + board[3] + board[6]],
        [board[1] + board[4] + board[7]],
        [board[2] + board[5] + board[8]],
        [board[0] + board[4] + board[8]],
        [board[2] + board[4] + board[6]]
    ];

    const changeColour = (idx) => {

        switch(idx) {
            case 0:
                document.querySelector('#b0').firstChild.classList.add('red');
                document.querySelector('#b0').firstChild.classList.remove('black');
                document.querySelector('#b1').firstChild.classList.add('red');
                document.querySelector('#b1').firstChild.classList.remove('black');
                document.querySelector('#b2').firstChild.classList.add('red');
                document.querySelector('#b2').firstChild.classList.remove('black');
                break;
            case 1:
                document.querySelector('#b3').firstChild.classList.add('red');
                document.querySelector('#b3').firstChild.classList.remove('black');
                document.querySelector('#b4').firstChild.classList.add('red');
                document.querySelector('#b4').firstChild.classList.remove('black');
                document.querySelector('#b5').firstChild.classList.add('red');
                document.querySelector('#b5').firstChild.classList.remove('black');
                break;
            case 2:
                document.querySelector('#b6').firstChild.classList.add('red');
                document.querySelector('#b6').firstChild.classList.remove('black');
                document.querySelector('#b7').firstChild.classList.add('red');
                document.querySelector('#b7').firstChild.classList.remove('black');
                document.querySelector('#b8').firstChild.classList.add('red');
                document.querySelector('#b8').firstChild.classList.remove('black');
                break;
            case 3:
                document.querySelector('#b0').firstChild.classList.add('red');
                document.querySelector('#b0').firstChild.classList.remove('black');
                document.querySelector('#b3').firstChild.classList.add('red');
                document.querySelector('#b3').firstChild.classList.remove('black');
                document.querySelector('#b6').firstChild.classList.add('red');
                document.querySelector('#b6').firstChild.classList.remove('black');
                break;
            case 4:
                document.querySelector('#b1').firstChild.classList.add('red');
                document.querySelector('#b1').firstChild.classList.remove('black');
                document.querySelector('#b4').firstChild.classList.add('red');
                document.querySelector('#b4').firstChild.classList.remove('black');
                document.querySelector('#b7').firstChild.classList.add('red');
                document.querySelector('#b7').firstChild.classList.remove('black');
                break;
            case 5:
                document.querySelector('#b2').firstChild.classList.add('red');
                document.querySelector('#b2').firstChild.classList.remove('black');
                document.querySelector('#b5').firstChild.classList.add('red');
                document.querySelector('#b5').firstChild.classList.remove('black');
                document.querySelector('#b8').firstChild.classList.add('red');
                document.querySelector('#b8').firstChild.classList.remove('black');
                break;
            case 6:
                document.querySelector('#b0').firstChild.classList.add('red');
                document.querySelector('#b0').firstChild.classList.remove('black');
                document.querySelector('#b4').firstChild.classList.add('red');
                document.querySelector('#b4').firstChild.classList.remove('black');
                document.querySelector('#b8').firstChild.classList.add('red');
                document.querySelector('#b8').firstChild.classList.remove('black');
                break;
            case 7:
                document.querySelector('#b2').firstChild.classList.add('red');
                document.querySelector('#b2').firstChild.classList.remove('black');
                document.querySelector('#b4').firstChild.classList.add('red');
                document.querySelector('#b4').firstChild.classList.remove('black');
                document.querySelector('#b6').firstChild.classList.add('red');
                document.querySelector('#b6').firstChild.classList.remove('black');
                break;
        }
    };
    
    winningCombos.forEach((win, index) => {
        console.log(win, index);
        if( win == 'XXX') {
            document.querySelector('.winner').innerHTML = "X is the winner!";
            changeColour(index);
        } else if ( win == 'OOO') {
            document.querySelector('.winner').innerHTML = "O is the winner!";
            changeColour(index);
        }
    });
    
};

boxes.forEach(box => {
    box.addEventListener('click', (e) => {
        // this is where we call addXO and then send the box target and which player is playing
        if (turn % 2 === 0 ) {  // Checks that number is even with no remainder
            addXO(box.id, 'even');
        } else {
            addXO(box.id, 'odd');
        }
    });
});