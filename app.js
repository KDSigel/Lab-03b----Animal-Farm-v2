
// import { playSoundAndChangeText, theHorseSoundAndText, theDogSoundAndText, theCatSoundAndText } from './utils.js';

import { timeoutAnimalText } from './timeout.js';

const horseEl = document.getElementById('horse-image');
const dogEl = document.getElementById('dog-image');
const catEl = document.getElementById('cat-image');

const horseSound = document.getElementById('horse-sound');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');

const animalNameDisplay = document.getElementById('animal-name');

function playSoundAndChangeText(sound, animalName) {
  sound.play();
  animalNameDisplay.textContent = animalName;
  timeoutAnimalText();
  }

  horseEl.addEventListener('click', () => {
    playSoundAndChangeText(horseSound, 'This is a horse');
  });

  dogEl.addEventListener('click', () => {
    playSoundAndChangeText(dogSound, 'This is a dog');
  });

  catEl.addEventListener('click', () => {
    playSoundAndChangeText(catSound, 'This is a cat. If it were the size of a dog or horse, it would kill you.');
  });

// horseEl.addEventListener('click', () => {
//     theHorseSoundAndText();
// });

// dogEl.addEventListener('click', () => {
//     theDogSoundAndText();
// });

// catEl.addEventListener('click', () => {
//     theCatSoundAndText();
// });

// document.addEventListener('keydown', function(event) {
//     if (event.key === 'd') {
//         theDogSoundAndText();
//     }});

// document.addEventListener('keydown', function(event) {
//     if (event.key === 'h') {
//         theHorseSoundAndText();
//     }});

// document.addEventListener('keydown', function(event) {
//     if (event.key === 'c') {
//         theCatSoundAndText();
//     }});
      