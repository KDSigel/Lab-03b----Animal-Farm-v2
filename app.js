import { playSoundAndChangeText } from './utils.js';

const horseEl = document.getElementById('hoss-image');
const dogEl = document.getElementById('paris-image');
const catEl = document.getElementById('sheen-image');

const horseSound = document.getElementById('horse-sound');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');

  horseEl.addEventListener('click', () => {
    playSoundAndChangeText(horseSound, 'This is Hoff');
  });

  dogEl.addEventListener('click', () => {
    playSoundAndChangeText(dogSound, 'This is Paris');
  });

  catEl.addEventListener('click', () => {
    playSoundAndChangeText(catSound, 'This is Charlie');
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'h') {
        playSoundAndChangeText(horseSound, 'This is Hoff');
    }});

document.addEventListener('keydown', function(event) {
    if (event.key === 'p') {
        playSoundAndChangeText(dogSound, 'This is Paris');
    }});

document.addEventListener('keydown', function(event) {
    if (event.key === 'c') {
       playSoundAndChangeText(catSound, 'This is Charlie');
    }});