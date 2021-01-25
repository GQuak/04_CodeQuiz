
//Button Variables
// easy reference for ID variables: var timerEl = document.getElementById("timer");
var startButton = document.querySelector(".startButton");
var restartButton = document.querySelector(".restartButton");
var questionChoices = document.getElementById("question-choices");
var saveButton = document.getElementById("saveButton");
var quitButton = document.querySelector(".quitButton");


//Display Variables
var timerEl = document.querySelector(".timer");
var introductionEl = document.querySelector(".introduction");
var quizEl = document.querySelector(".quiz");
var questionTitleEl = document.getElementById("question-title");
var questionChoicesEl = document.getElementById("question-choices");
var answerResultEl = document.getElementById("answer-result");
var scoreEl = document.getElementById("score");
var userEl = document.querySelector(".user");
// var scoreboardEl = document.getElementById("scoreboard");

//Display stored variables
var previousInitialsEl = document.getElementById("previousInitials");
var previousScoresEl = document.getElementById("previousScores");

//Stored variables
var secondsLeft = 60;
var currentQuestion = 0;
var score = 0;
var initials = "";
var scoreArray = [300];
var initialsArray = ["Perfect Score"];





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
    document.querySelector(".user").style.display = "block";
}

//Function to hide introduction & start button
function hideIntroduction() {
    // var displaySetting = introductionEl.style.display;
    document.querySelector(".introduction").style.display = "none";
}

//Function to show timer & quiz
function showQuiz() {
    document.querySelector(".timer").style.display = "block";
    document.querySelector(".quizContainer").style.display = "block";
}



//HIGH SCORE RECORDING & SHOWING


//Event listener to save high score and display last high score
saveButton.addEventListener("click", function (event) {
    event.preventDefault();

    //setting input text value to the initials variable
    initials = document.getElementById("initials").value;
    console.log(initials + " scored " + score);


    //Call function to display previous high scores
    renderHighScores();

    //Call function to add new high score to the arrays and then save to local storage
    saveHighScore();

    console.log("scores saved " + score + " " + initials)
    document.querySelector(".highScores").style.display = "block";

});


function saveHighScore() {
    //add new values to the arrays
    console.log(x + " lenght of array " + y);
    console.dir(scoreArray + " initials: " + initialsArray);
    var x = scoreArray.push(score);
    var y = initialsArray.push(initials);
    console.log(x + " lenght of array " + y);
    console.log(scoreArray + " initials: " + initialsArray)

    //
    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("initials", JSON.stringify(initials));

    // Save related form data as an object
    // var highScores = {
    //     initials: initials.value.trim(),
    //     score: score.value
    // };
    // // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    // localStorage.setItem("highScores", JSON.stringify(highScores));
    // localStorage.setItem("score", JSON.stringify(score));
    // localStorage.setItem("initials", JSON.stringify(initials));
}

function renderHighScores() {
    scoreArray = JSON.parse(localStorage.getItem("scoreArray"));
    initialsArray = JSON.parse(localStorage.getItem("initialsArray"));
    console.log(scoreArray + " " + initialsArray)
    if (scoreArray !== null && initialsArray !== null) {
        for (i = 0; i < scoreArray.length; i++) {
            previousInitialsEl.innerHTML = initialsArray[i];
            previousScoresEl.innerHTML = scoreArray[i];
        }
    }
    else {
        previousInitialsEl.innerHTML = "No previous high scores";
    }

}



//show scoreboard
//include option to enter initials and save score
//save to local browser
//include option to clear scoreboard

//return to start screen or include button to restart the quiz


