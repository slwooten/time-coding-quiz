// variables for selecting each screen that is to be displayed at different times //
var homeEl = document.querySelector('#home');
var activeEl = document.querySelector('#active');
var finishedEl = document.querySelector('#finished');

// variable for the take quiz button, used to select the button with id 'take-quiz' //
var takeQuiz = document.querySelector('#take-quiz');

var questions = [
    {
        question: "Who is the all-time leader for 3-pointers made?",
        options: [
            'Ray Allen',
            'Stephen Curry',
            'Reggie Miller',
            "Shaquille O'neal",
        ],
        correct: 2
    },
    {
        question: "What player holds the record for most NBA titles won with a total of 11?",
        options: [
            'Wilt Chamberlain',
            'Larry Bird',
            'Bill Russell',
            'Magic Johnson',
        ],
        correct: 3
    },
    {
        question: "Who is the silhouette in the NBA logo?",
        options: [
            'Michael Jordan',
            'Kobe Bryant',
            'Bob Cousey',
            'Jerry West',
        ],
        correct: 4
    },
    {
        question: "In what year did the NBA adopt the 3-point line?",
        options: [
            '1968',
            '1981',
            '1998',
            '1979',
        ],
        correct: 4
    }
]

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
