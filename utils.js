
const animalNameDisplay = document.getElementById('celeb-name');

export function playSoundAndChangeText(sound, animalName) {
    sound.play();
    animalNameDisplay.textContent = animalName;
    setTimeout(() => {
        animalNameDisplay.textContent = 'Celebs are awesome!';
    }, 3000);
}