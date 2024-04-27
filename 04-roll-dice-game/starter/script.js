'use strict';

let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
let diceEl = document.querySelector('.dice');

//buttons
let btnNewEl = document.querySelector('.btn--new');
let btnRollEl = document.querySelector('.btn--roll');
let btnHoldEl = document.querySelector('.btn--hold');

// current section

let Section1 = document.querySelector('.player--0');
let Section2 = document.querySelector('.player--1');

// // staring elements
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

/*
let score = [0, 0];// setting total score
// setting current score to 0
let currentScore = 0; 

// setting active player
let activeplayer = 0;

// setting winner
let playerwins = false; 
 */
let score, currentScore, activeplayer, playerwins;

document.querySelector('.hg').textContent = ' hello';
let init = function () {
  score = [0, 0];
  currentScore = 0;
  activeplayer = 0;
  playerwins = false;

  // starting the game
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;

  Section1.classList.add('player--active');
  Section2.classList.remove('player--active');

  // first i remove the blackground to original
  Section1.classList.remove('player--winner');
  Section2.classList.remove('player--winner');

  document.querySelector('.hg').textContent =
    'First player to get 10 points wins';
};

// calling the inintial function
init();

let swithPlayer = function () {
  // skip to player two
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  //document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentScore = 0;
  Section1.classList.toggle('player--active');
  Section2.classList.toggle('player--active');
};

btnRollEl.addEventListener('click', function () {
  if (playerwins === false) {
    // generating random elements
    let dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);
    //
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // adding current score
    if (dice !== 1) {
      currentScore = currentScore + dice;

      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
      // currentscore1.textContent = currentScore;
    } else {
      swithPlayer();
    }
  }
});

btnHoldEl.addEventListener('click', function () {
  if (playerwins === false) {
    score[activeplayer] = score[activeplayer] + currentScore;

    document.getElementById(`score--${activeplayer}`).textContent =
      score[activeplayer];
    console.log(score[activeplayer]);
    if (score[activeplayer] >= 10) {
      playerwins = true;
      console.log(`score of the score[activeplayer]`, score[activeplayer]);
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');

      if (activeplayer === 0) {
        document.querySelector('.hg').textContent =
          'The player 1 wins the game';
      } else {
        document.querySelector('.hg').textContent =
          'The player 2 wins the game';
      }
      // document.getElementsByClassName(
      //   'hg'
      // ).textContent = ` The player-${`player--${activeplayer}`} wins the game`;
      // document
      //   .querySelector(`.player--${activeplayer}`)
      //   .classList.remove('active-player');
    } else {
      swithPlayer();
    }
  }
});

btnNewEl.addEventListener('click', init);

/*
btnNewEl.addEventListener('click', function () {
  // first i remove the blackground to original
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.remove('player--winner');
  // then setting every score to zero
  score = [0, 0];
  currentScore = 0;
  playerwins = false;

  // setting every score =0;
  document.querySelector('#score--0').textContent = 0;
  score1El.textContent = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;

  // remove dice image from page
  diceEl.classList.add('hidden');

  // setting player 1 as active player
  Section1.classList.add('player--active');
  Section2.classList.remove('player--active');
  activeplayer = 0;
});
*/
