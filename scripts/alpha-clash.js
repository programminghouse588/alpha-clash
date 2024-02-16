// function play() {
//     // step-1: hide the home screen
//      const homeSection = document.getElementById('home-screen');
//      homeSection.classList.add('hidden');
//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');

// }

function keyboardButtonPress(event) {
    const playerPressed = event.key;

    // stop the game if press Esc
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

   if (playerPressed === expectedAlphabet) {
    const currentScore = getTextElementValueById('current-score');
    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score', updatedScore);

    removeBackgroundColorById(expectedAlphabet);
    continueGame();
   }

   else{
    const currentLife = getTextElementValueById('current-life')
    const updatedLife = currentLife - 1;
    setTextElementValueById('current-life', updatedLife);

    if (updatedLife === 0) {
        gameOver();
      }
   }
}

document.addEventListener('keyup', keyboardButtonPress);

function continueGame() {
    // step:1 generate random alphabet
    const alphabet = getRandomAlphabet();
    // console.log('Your Random Alphabet', alphabet);

    // show the alphabet
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame()
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    // updated final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);
    // clear
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}