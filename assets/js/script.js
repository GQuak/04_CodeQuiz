
//Button Variables
// easy reference for ID variables: var timerEl = document.getElementById("timer");
var startButton = document.querySelector(".startButton");
var questionChoices = document.getElementById("question-choices");

//Display Variables
var timerEl = document.querySelector(".timer");
var introductionEl = document.querySelector(".introduction");
var quizEl = document.querySelector(".quiz");
var questionTitleEl = document.getElementById("question-title");
var questionChoicesEl = document.getElementById("question-choices");
var answerResultEl = document.getElementById("answer-result");
var scoreEl = document.getElementById("score");


//Stored variables
var secondsLeft = 60;
var currentQuestion = 0;
var score = 0;

//object to store all the questions, answers, and correct answers
var quiz = [
    {
        question: "Question 1? - answer 2",
        choices: ["option1", "option2", "option3", "option4"],
        answer: "option2"
    },
    {
        question: "Question 2? - answer 4",
        choices: ["option1", "option2", "option3", "option4"],
        answer: "option4"
    },
    {
        question: "Question 3? - answer 1",
        choices: ["option1", "option2", "option3", "option4"],
        answer: "option1"
    },
    {
        question: "Question 4? - answer 3",
        choices: ["option1", "option2", "option3", "option4"],
        answer: "option3"
    },
    {
        question: "Question 5? - answer 2",
        choices: ["option1", "option2", "option3", "option4"],
        answer: "option2"
    },
];

//Listen for "start" button click
startButton.addEventListener("click", setTime);

//Listen for an answer to be clicked
questionChoices.addEventListener("click", function (event) {
    answerResultEl.innerHTML = "";

    var userChoice = event.target.textContent;
    var answerDisplayEl = document.createElement("h3");
    if (userChoice == quiz[currentQuestion].answer) {
        answerDisplayEl.textContent = "Correct";
        score = score + secondsLeft;
        console.log("Your score is " + score);
        scoreEl.innerHTML = "Your score is " + score;
    }
    else {
        secondsLeft = secondsLeft - 10;
        answerDisplayEl.textContent = "Wrong";
    }

    answerResultEl.append(answerDisplayEl);

    if (currentQuestion <= 3) {
        currentQuestion++;
        renderQuestion();
    }
    else {
        endQuiz();

    }
})
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
        timerEl.innerHTML = secondsLeft + " seconds left.";

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to end game
            endQuiz();
        }

    }, 1000);

    renderQuestion();
};

//Show questions on the screen
function renderQuestion() {
    questionChoicesEl.innerHTML = "";
    questionTitleEl.innerHTML = "";

    //Show Question
    questionTitleEl.append(quiz[currentQuestion].question);

    //First Answer Option
    var optionOne = document.createElement("li");
    optionOne.textContent = quiz[currentQuestion].choices[0];
    questionChoicesEl.append(optionOne);

    //Second Answer Option
    var optionTwo = document.createElement("li");
    optionTwo.textContent = quiz[currentQuestion].choices[1];
    questionChoicesEl.append(optionTwo);

    //Third Answer Option
    var optionThree = document.createElement("li");
    optionThree.textContent = quiz[currentQuestion].choices[2];
    questionChoicesEl.append(optionThree);

    //Fourth Answer Option
    var optionFour = document.createElement("li");
    optionFour.textContent = quiz[currentQuestion].choices[3];
    questionChoicesEl.append(optionFour);
}

// Function to end game and save high score
function endQuiz() {
    questionTitleEl.innerHTML = "";
    questionChoicesEl.innerHTML = "";
    answerResultEl.innerHTML = "";
    secondsLeft = 0;
    timerEl.textContent = "Game Over!";

}

//Function to hide introduction & start button
function hideIntroduction() {
    // var displaySetting = introductionEl.style.display;
    document.querySelector(".introduction").style.display = "none";
}

//Function to show timer & quiz
function showQuiz() {
    console.log("Showing quiz")
    document.querySelector(".timer").style.display = "block";
    document.querySelector(".quizContainer").style.display = "block";
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


