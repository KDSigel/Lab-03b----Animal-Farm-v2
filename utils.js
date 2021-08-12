const horseSound = document.getElementById('horse-sound');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');

const animalNameDisplay = document.getElementById('animal-name');

export function theHorseSoundAndText() {
    horseSound.play();
    animalNameDisplay.textContent = 'This is a horse';
}

export function theDogSoundAndText() {
    dogSound.play();
    animalNameDisplay.textContent = 'This is a dog';
}
export function theCatSoundAndText() {
    catSound.play();
    animalNameDisplay.textContent = 'This is a cat. If it were as big as a dog or horse, it would kill you.';
}