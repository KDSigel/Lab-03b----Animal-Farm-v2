import { playSoundAndChangeText } from './utils.js';

const horseEl = document.getElementById('horse-image');
const dogEl = document.getElementById('dog-image');
const catEl = document.getElementById('cat-image');

const horseSound = document.getElementById('horse-sound');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');

  horseEl.addEventListener('click', () => {
    playSoundAndChangeText(horseSound, 'This is a horse');
  });

  dogEl.addEventListener('click', () => {
    playSoundAndChangeText(dogSound, 'This is a dog');
  });

  catEl.addEventListener('click', () => {
    playSoundAndChangeText(catSound, 'This is a cat. If it were the size of a dog or horse, it would kill you.');
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'd') {
        playSoundAndChangeText(horseSound, 'This is a horse');
    }});

document.addEventListener('keydown', function(event) {
    if (event.key === 'h') {
        playSoundAndChangeText(dogSound, 'This is a dog');
    }});

document.addEventListener('keydown', function(event) {
    if (event.key === 'c') {
       playSoundAndChangeText(catSound, 'This is a cat. If it were the size of a dog or horse, it would kill you.');
    }});