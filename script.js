'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'You re right!!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 100;
document.querySelector('.guess').value = 1000;
*/

const display = function (message) {
  document.querySelector('.message').textContent = message;
};

const number = Math.trunc(Math.random() * 20);
// document.querySelector('.number').textContent = number;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  if (score > 1) {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
      display('No Number!!');
    } else if (guess === number) {
      display('Correct guess');
      document.querySelector('body').style.backgroundColor = '#1BE729';
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess > number) {
      display('Too high');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      display('Too low');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    display('You Lost!!');
    document.querySelector('.score').textContent = 0;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const number = Math.trunc(Math.random() * 20);
  display('Start guessing!!');
  // document.querySelector('.highscore').textContent = 0;
  document.querySelector('.guess').value = ' ';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
