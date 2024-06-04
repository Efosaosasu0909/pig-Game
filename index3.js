let scores, roundScore, activePlayer, gamePlaying;


initialise();

let lastDice1, lastDice2;
document.querySelector('.btn-roll').addEventListener('click', function () {
    
    if (gamePlaying) {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector('#dice-1').style.display = 'block';
    document.querySelector('#dice-2').style.display = 'block';
    document.querySelector('#dice-1').src = 'dice-' + dice1 + '.png';
    document.querySelector('#dice-2').src = 'dice-' + dice2 + '.png';



    

    // 3. UPDATE THE ROUND SCORE IF THE ROLLED NUMBER IS NOT A 1
    if ((dice1 == 6 && lastDice1 == 6) || (dice2 == 6 && lastDice2 == 6)) {
        // player looses his score
        scores[activePlayer] = 0
        // update the UI
        document.querySelector('#score-' + activePlayer).textContent = 0;
        // nextplayer
        nextPlayer();

    } else if (dice1 !== 1 && dice2 !== 1){
        roundScore += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }
    
    lastDice1 = dice1;
    lastDice2 = dice2;
    }
});

document.querySelector('.btn-hold').addEventListener('click' , function () {
   if (gamePlaying) {
     // 1. ADD THE CURRENT SCORE TO THE GLOBAL
     scores[activePlayer] += roundScore
     // 2. UPDATE THE UI
     document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
     
    let = finalScore = document.querySelector('.final-score').value;
    
    // let winningScore;
    if (finalScore) {
        winningScore = finalScore;
    } else {
        winningScore = 100;
    }

     // 3. CHECK IF THE PLAYER WON THE GAME
     if (scores[activePlayer] >= winningScore) {
         document.querySelector('#name-' + activePlayer).textContent = 'WINNER';
        document.querySelector('#dice-1').style.display = 'none';
        document.querySelector('#dice-2').style.display = 'none';
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
        document.querySelector('#dice-1').style.display = 'none';
        document.querySelector('#dice-2').style.display = 'none';
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
document.querySelector('#dice-1').style.display = 'none';
document.querySelector('#dice-2').style.display = 'none';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.final-score').value = '';
gamePlaying = true;
}