const inputElement = document.querySelector('#input');
const outputElement = document.querySelector('#timer');
const startButton = document.querySelector('#btn');

let userInputTime;

const inputFieldTime = (event) => {
    userInputTime = event.target.value;
}

inputElement.addEventListener('input', inputFieldTime);


const checkIntervals = () => {

    const funcInterval = () => {
        outputElement.textContent = userInputTime;
        if (userInputTime <= 0) {
            alertSound.play();
            clearInterval(idI)
            inputElement.value = '';
            outputElement.textContent = '';
        }
        userInputTime -= 1;
    }
    const idI = setInterval(funcInterval, 1000);

}

startButton.addEventListener('click', checkIntervals);