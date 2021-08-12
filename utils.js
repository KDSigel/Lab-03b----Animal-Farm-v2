
const animalNameDisplay = document.getElementById('animal-name');

export function playSoundAndChangeText(sound, animalName) {
    sound.play();
    animalNameDisplay.textContent = animalName;
    setTimeout(() => {
        animalNameDisplay.textContent = 'Animals are awesome!';
    }, 2000);
}