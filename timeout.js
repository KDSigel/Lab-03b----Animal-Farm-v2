const animalNameDisplay = document.getElementById('animal-name');

export function timeoutAnimalText() {
setTimeout(() => {
    animalNameDisplay.textContent = 'Animals are awesome!';
}, 2000);
}