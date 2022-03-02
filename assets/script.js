// variables for selecting each screen that is to be displayed at different times //
var homeEl = document.querySelector('#home');
var activeEl = document.querySelector('#active');
var finishedEl = document.querySelector('#finished');

// variable for the take quiz button, used to select the button with id 'take-quiz' //
var takeQuiz = document.querySelector('#take-quiz');

function homeScreen() {
    homeEl.style.display = 'flex';
    activeEl.style.display = 'none';
    finishedEl.style.display = 'none';
}

function activeScreen() {
    homeEl.style.display = 'none';
    activeEl.style.display = 'flex';
    finishedEl.style.display = 'none';
}

function finishedScreen() {
    homeEl.style.display = 'none';
    activeEl.style.display = 'none';
    finishedEl.style.display = 'flex';
}


takeQuiz.addEventListener('click', activeScreen);
