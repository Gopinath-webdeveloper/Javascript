'use strict';

let modal = document.querySelector('.modal');
let btnsopenmodal = document.querySelectorAll('.show-modal');
let btnclosemodal = document.querySelector('.close-modal');

let overlay = document.querySelector('.overlay');

console.log(btnsopenmodal);

let close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsopenmodal.length; i++) {
  // console.log(btnsopenmodal[i].textContent);

  btnsopenmodal[i].addEventListener('click', function () {
    console.log('button clicked ');
    console.log(modal);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    console.log(this);
  });
}

// btnclosemodal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

btnclosemodal.addEventListener('click', close);

overlay.addEventListener('click', close);

document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('.hidden')) {
    close();
    console.log(this);
  }
});
