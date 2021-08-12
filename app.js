
import { theHorseSoundAndText, theDogSoundAndText, theCatSoundAndText } from './utils.js';

const horseEl = document.getElementById('horse-image');
const dogEl = document.getElementById('dog-image');
const catEl = document.getElementById('cat-image');

horseEl.addEventListener('click', () => {
    theHorseSoundAndText();
});

dogEl.addEventListener('click', () => {
    theDogSoundAndText();
});

catEl.addEventListener('click', () => {
    theCatSoundAndText();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'd') {
        theDogSoundAndText();
    }});

document.addEventListener('keydown', function(event) {
    if (event.key === 'h') {
        theHorseSoundAndText();
    }});

document.addEventListener('keydown', function(event) {
    if (event.key === 'c') {
        theCatSoundAndText();
    }});