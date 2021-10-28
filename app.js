const boxes = document.querySelectorAll('div');

let trackXAndO = {x11: '', x21: '', x31: '', x12: '', x22: '', x32: '',
    x13: '', x23: '', x33: ''}; //key value pair

let turn = 0;

// const checkForWin = () => {
    
    
// };

const addXO = (location, player) => {
    const changeBoard = (loc, xOrO) => {
        boxes.forEach(box => {
            if (box.classList.contains(loc)) {
                if (xOrO === 'O') {
                    box.firstChild.classList.remove('fa-times','fas');
                    box.firstChild.classList.add('fa-circle', 'far');
                }
                box.firstChild.classList.remove('green-yellow');
                box.firstChild.classList.add('black');
            }
        })
    };

    // after figuring the spot for the x or o and then add it if not
    if (trackXAndO[location] != '') {
        // illegal move
    } else {
        if (player === 'even') {
            trackXAndO[location] = 'X';
            changeBoard(location, 'X');
        } else {
            trackXAndO[location] = 'O';
            changeBoard(location, 'O');
        }
        turn++;
    }
    winCheck();
};

const winCheck = () => {
    let Win1 = trackXAndO.x11 + trackXAndO.x21 + trackXAndO.x31;
    let Win2 = trackXAndO.x21 + trackXAndO.x22 + trackXAndO.x23;
    let Win3 = trackXAndO.x31 + trackXAndO.x32 + trackXAndO.x33;
    let Win4 = trackXAndO.x11 + trackXAndO.x12 + trackXAndO.x13;
    let Win5 = trackXAndO.x12 + trackXAndO.x22 + trackXAndO.x32;
    let Win6 = trackXAndO.x13 + trackXAndO.x23 + trackXAndO.x33;
    let Win7 = trackXAndO.x11 + trackXAndO.x22 + trackXAndO.x33;
    let Win8 = trackXAndO.x13 + trackXAndO.x22 + trackXAndO.x31;

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
            addXO(box.classList.value, 'even');

        } else {
            addXO(box.classList.value, 'odd');
        }
        


    });
});