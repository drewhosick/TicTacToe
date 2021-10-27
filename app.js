const boxes = document.querySelectorAll('div');

let trackXAndO = {x11: '', x21: '', x31: '', x21: '', x22: '', x23: '',
    x31: '', x32: '', x33: ''}; //key value pair

let turn = 0;

// const checkForWin = () => {
    
    
// };

const addXO = (location, player) => {
    // create function that checks the trackXandO for a value already in the spot
    // after figuring the spot for the x or o and then add it if not

    console.log(location.value);
    console.log(trackXAndO[location.value]);
    



    // if (location has no x or o in trackXandO) {
    //     // then add the X or O to it
    //     // check if it's player x or o that's playing
    //     // then call a check on the win
    //     // if no win the move onto the next turn
    // } else (illegal move) {
    //     // tell users that the last move was illegal and that someone already
    //     // chose that spot.
    //     // do not go to next turn
    // }
};

// const winCheck = () => {
//     // check for a winner;
// };

boxes.forEach(box => {
    box.addEventListener('click', (e) => {
        // this is where we call addXO and then send the box target and which player is playing
        if (turn % 2 === 0 ) {  // Checks that number is even with no remainder
            addXO(box.classList, 'even');
        } else {
            addXO(box.classList, 'odd');
        }
        


    });
});