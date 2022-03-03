// variables for selecting each screen that is to be displayed at different times //
var homeEl = document.querySelector('#home');
var activeEl = document.querySelector('#active');
var finishedEl = document.querySelector('#finished');

var q1 = document.querySelector('#question1');
var q2 = document.querySelector('#question2');
var q3 = document.querySelector('#question3');
var q4 = document.querySelector('#question4');

// variable for the take quiz button, used to select the button with id 'take-quiz' //
var takeQuiz = document.querySelector('#take-quiz');
var timer = document.querySelector('#timer');
var secondsLeft = 120;




// variables to select all answer buttons, used to move the quiz forward no matter what answer is selected // 
var q1Answers = document.querySelector('#q1answers');
var q2Answers = document.querySelector('#q2answers');
var q3Answers = document.querySelector('#q3answers');
var q4Answers = document.querySelector('#q4answers');

// variables for the correct answers, used to add points to the total score //
var incorrect = document.querySelector(".incorrect");


var finalScore = secondsLeft;
var totalScore = 0;

// var questionId = document.querySelector('questions');

// var questions = [
//     {
//         question: "Who is the all-time leader for 3-pointers made?",
//         options: [
//             'Ray Allen',
//             'Stephen Curry',
//             'Reggie Miller',
//             "Shaquille O'neal",
//         ],
//         correct: 2
//     },
//     {
//         question: "What player holds the record for most NBA titles won with a total of 11?",
//         options: [
//             'Wilt Chamberlain',
//             'Larry Bird',
//             'Bill Russell',
//             'Magic Johnson',
//         ],
//         correct: 3
//     },
//     {
//         question: "Who is the silhouette in the NBA logo?",
//         options: [
//             'Michael Jordan',
//             'Kobe Bryant',
//             'Bob Cousey',
//             'Jerry West',
//         ],
//         correct: 4
//     },
//     {
//         question: "In what year did the NBA adopt the 3-point line?",
//         options: [
//             '1968',
//             '1981',
//             '1998',
//             '1979',
//         ],
//         correct: 4
//     }
// ]

// function showQuestion () {
//     questionId.innerHTML = '';
//     var q = questions[0];
//     for (var i = 0; i < q.options.length; i++) {
//         var item = q.options[i];
//         var answerBtn = document.createElement('button');
//         answerBtn.textContent = i + 1 + ". " + item;
//         questionId.appendChild(answerBtn);
//     }
// }

function homeScreen() {
    homeEl.style.display = 'flex';
    activeEl.style.display = 'none';
    finishedEl.style.display = 'none';
    secondsLeft = 120;
}

function question1() {
    homeEl.style.display = 'none';
    activeEl.style.display = 'flex';
    finishedEl.style.display = 'none';
    q1.style.display = 'block';
    q2.style.display = 'none';
    q3.style.display = 'none';
    q4.style.display = 'none';
}

function question2() {
    homeEl.style.display = 'none';
    activeEl.style.display = 'flex';
    finishedEl.style.display = 'none';
    q1.style.display = 'none';
    q2.style.display = 'block';
    q3.style.display = 'none';
    q4.style.display = 'none';
}

function question3() {
    homeEl.style.display = 'none';
    activeEl.style.display = 'flex';
    finishedEl.style.display = 'none';
    q1.style.display = 'none';
    q2.style.display = 'none';
    q3.style.display = 'block';
    q4.style.display = 'none';
}

function question4() {
    homeEl.style.display = 'none';
    activeEl.style.display = 'flex';
    finishedEl.style.display = 'none';
    q1.style.display = 'none';
    q2.style.display = 'none';
    q3.style.display = 'none';
    q4.style.display = 'block';
}

function finishedScreen() {
    homeEl.style.display = 'none';
    activeEl.style.display = 'none';
    finishedEl.style.display = 'flex';
    // puts the final score on the page for user to see //
    finalScore.innerHTML = "<p>Final Score:</p>" + totalScore;
}

// functions for countdown timer //
function showSeconds() {
    timer.textContent = secondsLeft + " seconds remaining";
}

function setTime() {
    showSeconds();
    var timerInterval = setInterval(function () {
        secondsLeft--;

        showSeconds();

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            finishedScreen();
        }
    }, 1000);
}

function start() {
    homeScreen();
}

// adds 25 points to the totalScore each time a correct answer is selected //
function reduceTime() {
    secondsLeft = secondsLeft - 10;
    console.log('time reduced');
}



takeQuiz.addEventListener('click', question1);
takeQuiz.addEventListener('click', setTime);

// event listeners to move to the next question screen //
q1Answers.addEventListener('click', question2);
q2Answers.addEventListener('click', question3);
q3Answers.addEventListener('click', question4);

// moves to finished screen to enter initials //
q4Answers.addEventListener('click', finishedScreen);

// run addPoints to add points to totalScore when click event happens //


incorrect.addEventListener('click', reduceTime);

start();

