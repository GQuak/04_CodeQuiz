
//variables
// easy reference for ID variables: var timerEl = document.getElementById("timer");
var startButton = document.querySelector(".startButton");
var timerEl = document.querySelector(".timer");
var introductionEl = document.querySelector(".introduction");
var quizEl = document.querySelector(".quiz");
var secondsLeft = 60;

console.log(startButton);
//pseudocode

//Listen for "start" button click
startButton.addEventListener("click", setTime);

//show timer & first question
//start timer on start click
// Selects element by id


function setTime() {
    console.log("Start button click");
    // introductionEl.setAttribute("display", "none");
    // timerEl.setAttribute("display", "block");
    hideIntroduction();
    showQuiz();
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left.";

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to end game
            endQuiz();
        }

    }, 1000);
}

// Function to end game and save high score
function endQuiz() {
    timerEl.textContent = "Game Over";
    secondsLeft = 60;
}

//Function to hide introduction & start button
function hideIntroduction() {
    console.log("hide intro");
    // var displaySetting = introductionEl.style.display;
    document.querySelector(".introduction").style.display = "none";
}

//Function to show timer & quiz
function showQuiz() {
    console.log("show quiz");
    document.querySelector(".timer").style.display = "block";
    document.querySelector(".quiz").style.display = "block";
}


//if question answered correctly (click correct answer)
//show "Correct" and then show a new question
//else (incorrect answer is clicked)
//show incorrect (or highlight correct answer)
//take 10 seconds off the timer
//show a new question



//when all questions are answered or timer runs out - end game
//show game over and final score

//show scoreboard
//include option to enter initials and save score
//save to local browser
//include option to clear scoreboard

//return to start screen or include button to restart the quiz


//EXAMPLE QUIZ -------------------------------------------------------------------------------------------------------------
function createQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    questions.forEach(
        (currentQuestion, questionNumber) => {

            // variable to store the list of possible answers
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {

                // ...add an HTML radio button
                answers.push(
                    `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    questions.forEach((currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else {
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;

}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const questions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich",
            d: "Thomas Edison"
        },
        correctAnswer: "c"
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm",
            d: "Google"
        },
        correctAnswer: "c"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "ESLint"
        },
        correctAnswer: "d"
    }
];



createQuiz();

submitButton.addEventListener('click', showResults);

//END EXAMPLE ================================================================================================================