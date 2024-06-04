let dice1 = document.getElementById('dice-1');
let dice2 = document.getElementById('dice-2');
dice1.innerHTML = 0;
dice2.innerHTML = 0;
let newGame = document.getElementById('newGame');
let rollDice = document.getElementById('rollDice');
let hold = document.getElementById('hold');
let current1 = document.getElementById('current-0');
let current1Value = 0;
current1.innerHTML = current1Value;
let current2 = document.getElementById('current-1');
let current2Value = 0;
current2.innerHTML = current2Value;
let finalScore = document.querySelector('final-score');




let count1 = 0;
let count2 = 0;

let player1Score = document.getElementById('score-0');
let player1ScoreValue = 0;
player1Score.innerHTML = player1ScoreValue;

let player2Score = document.getElementById('score-1');
let player2ScoreValue = 0;
player2Score.innerHTML = player2ScoreValue;

rollDice.addEventListener('click' , roll);
function roll() {
    let genNumber1 = Math.random();
    genNumber1 = genNumber1 * 6;
    genNumber1 = Math.floor(genNumber1) + 1;
    let genNumber2 = Math.random();
    genNumber2 = genNumber2 * 6;
    genNumber2 = Math.floor(genNumber2) + 1;
     genNumberTotal = genNumber1 + genNumber2;
    count1 = genNumber1;
    count2 = genNumber2;
    dice1.innerHTML = count1;
    dice2.innerHTML = count2;
    
        
    
    currentFirst();
    // holdRnd2();
    // currentSecond();
}

hold.addEventListener('click' , holdRnd)
function holdRnd() {
    holdRnd1();
    
    
    resetplayer1();
    // currentSecond();
    // holdRnd2();
    finalScore = 100;
    finalScore = finalScore.value;

    if (player1ScoreValue >= finalScore) {
        alert('Player 1 wins!');
    } else if (player2Value >= finalScore) {
        alert('Player 2 wins!');
    }
}
function resetplayer1() {
    current1Value = 0;
    current1.innerHTML = current1Value;
    count1 = 0;
    dice1.innerHTML = count1;
    count2 = 0;
    dice2.innerHTML = count2;
}



function holdRnd1() {
    player1Score.innerHTML = current1Value;
}

function holdRnd2() {
    player2Score.innerHTML = current2Value;
    currentSecond();
}

function currentFirst () {
    current1Value += genNumberTotal;
    current1.innerHTML = current1Value;
    if (count1 === 1 || count2 === 1) {
        current1Value = 0;
        current1.innerHTML = current1Value;
        player1ScoreValue = 0;
        player1Score.innerHTML = player1ScoreValue;
    }
}

function currentSecond() {
    current2Value += genNumberTotal;
    current2.innerHTML = current2Value;
    if (count1 === 1 || count2 === 1) {
        current2Value = 0;
        current2.innerHTML = current2Value;
        player2ScoreValue = 0;
        player2Score.innerHTML = player2ScoreValue;
    }
}

newGame.addEventListener('click' , reset) ;
function reset() {
    current1Value = 0;
    current1.innerHTML = current1Value;
    current2Value = 0;
    current2.innerHTML = current2Value;
    player1Score.innerHTML = current1Value;
    player2Score.innerHTML = current2Value;
    count1 = 0;
    dice1.innerHTML = count1;
    count2 = 0;
    dice2.innerHTML = count2;
}
// let reset = document.getElementById('reset');
// reset.onclick = function () {
//      count = 0;
//      counter.innerHTML = count;
// }