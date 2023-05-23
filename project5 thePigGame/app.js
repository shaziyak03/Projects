let score0 = document.getElementById('score-0');
let score1 = document.getElementById('score-1');
let dice = document.querySelector('.dice');
let rollDice = document.querySelector('.btn-roll');
let current0 = document.getElementById('current-0');
let current1 = document.getElementById('current-1');
let player0 = document.querySelector('.player-0');
let player1 = document.querySelector('.player-1');
let holdBtn = document.querySelector('.btn-hold');
let newGame = document.querySelector('.btn-new');
let name0 = document.getElementById('name-0');
let name1 = document.getElementById('name-1');

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

let scores = [0,0];
let current = 0;
let activePlayer = 0;

let switchPlayer = function(){
    current = 0;
    document.getElementById(`current-${activePlayer}`).textContent = current;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player-active');
    player1.classList.toggle('player-active');
}

rollDice.addEventListener('click', function(){
//1. generate a random number = 1 - 6
let diceNumber = Math.trunc(Math.random() * 6) + 1 ;

// 2. display dice image accordiung to the number
dice.classList.remove('hidden');

//3. if the number is not 1 then add it to the current score of active player
dice.src = ` dice_${diceNumber}.png`;

// 4. if the number is one then reset current score to zero and change the active player

if(diceNumber != 1){
current += diceNumber;
document.getElementById(`current-${activePlayer}`).textContent = current;
}
else{
    switchPlayer();
}
});

holdBtn.addEventListener('click', function(){
 //1. the current score should get added to the global score.
 scores[activePlayer] += current;
 document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

 //2. player reaches maximum score.
 if(scores[activePlayer] >= 100){
    document.querySelector(`.player-${activePlayer}`).classList.add('player-winner');
    document.querySelector(`.player-${activePlayer}`).classList.remove('player-active');
   document.getElementById(`name-${activePlayer}`).textContent = 'WINNER!';
   dice.classList.add('hidden');
   rollDice.classList.add('hidden');
   holdBtn.classList.add('hidden');
}
 else{
    switchPlayer();
 }
});

//Start the new game
newGame.addEventListener('click', function(){
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    
    player0.classList.remove('player-winner');
    player1.classList.remove('player-winner');
    player0.classList.add('player-active');
    player1.classList.remove('player-active');

    dice.classList.add('hidden');
    rollDice.classList.remove('hidden');
    holdBtn.classList.remove('hidden');

    scores = [0,0];
    current = 0;
    activePlayer = 0;
});