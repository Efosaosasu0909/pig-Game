let scores, roundScore, activePlayer, gamePlaying, finalScore, lastDice;


initialise();
document.querySelector('.btn-roll').addEventListener('click', function () {
    
    if (gamePlaying) {
    let lastDice;
    // 1. GET THE RNDOM NUMBER
    let dice = Math.floor(Math.random() * 6) + 1;
    // let dice2 = Math.floor(Math.random() * 6) + 1;
    // console.log(dice);
    // 2. DISPLAY THE RESULT
    let diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    // let diceDom2 = document.getElementById('dice-2');
    // diceDom2.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    // diceDom2.src = 'dice-' + dice2 + '.png';
    

    // 3. UPDATE THE ROUND SCORE IF THE ROLLED NUMBER IS NOT A 1
    if ((dice == 6 && lastDice == 6)) {
        // player looses his score
        scores[activePlayer] = 0
        // update the UI
        document.querySelector('#score-' + activePlayer).textContent = 0;
        // nextplayer
        nextPlayer();

    } else if (dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }
    // if (dice !== 1 && dice2 !== 1) {
    //     // ADD SCORE
    //     roundScore += (dice + dice2);
    //     document.getElementById('current-' + activePlayer).textContent = roundScore; 
    // } else {
    //     // NEXT PLAYER TURN
       
    //     // RESET THE ROUND SCORE BACK TO 0
    //     nextPlayer();

    // }
    
    lastDice = 6;
    }
});

document.querySelector('.btn-hold').addEventListener('click' , function () {

    // finalScore = document.querySelector('.final-score').value;
    // if (finalScore) {
    //     winner = finalScore;
    // } else {
    //     winner = 20;
    // }
   if (gamePlaying) {
     // 1. ADD THE CURRENT SCORE TO THE GLOBAL
     scores[activePlayer] += roundScore
     // 2. UPDATE THE UI
     document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
     // NEXT PLAYER
    
     // 3. CHECK IF THE PLAYER WON THE GAME
     if (scores[activePlayer] >= 100) {
         document.querySelector('#name-' + activePlayer).textContent = 'WINNER';
         document.querySelector('.dice').style.display = 'none';
         document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
         gamePlaying = false;
     } else {
         nextPlayer();
     }
   }
    
});

document.querySelector('.btn-new').addEventListener('click' , function() {
initialise();
})
function nextPlayer() {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
        // document.getElementById('.dice-2').style.display = 'none';
};

function initialise() {
scores = [0,0];
roundScore = 0;
activePlayer = 0;
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.dice').style.display = 'none';
// document.getElementById('.dice-2').style.display = 'none';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
gamePlaying = true;
// finalScore = 10;
}