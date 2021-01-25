
//Button Variables
// easy reference for ID variables: var timerEl = document.getElementById("timer");
var startButton = document.querySelector(".startButton");
var restartButton = document.getElementById("restartButton");
var questionChoices = document.getElementById("question-choices");
var saveButton = document.getElementById("saveButton");
var clearButton = document.getElementById("clearButton");
var scoresButton = document.querySelector(".showScores");


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





//object to store all the questions, answers, and correct answers
var quiz = [
    {
        question: "Which HTML tag do we use for Javascript?",
        choices: ["<head>", "<script>", "<href>", "<javascript>"],
        answer: "<script>"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: ["msg('Hello World')", "alertBox('Hello World')", "msgBox('Hello World')", "alert('Hello World')"],
        answer: "alert('Hello World')"
    },
    {
        question: "What variable is visable anywhere in the code?",
        choices: ["Global Variable", "Local Variable", "Both of the Above", "Neither of the Above"],
        answer: "Global Variable"
    },
    {
        question: "What is used to store values?",
        choices: ["Variables", "Arrays", "Objects", "All of the Above"],
        answer: "All of the Above"
    },
    {
        question: "Who created Javascript?",
        choices: ["Steve Jobs", "Brendan Eich", "Jeff Bezos", "Douglas Crockford"],
        answer: "Brendan Eich"
    },
];

//Listen for "start" button click
startButton.addEventListener("click", setTime);

//Listen for "restart" button click
restartButton.addEventListener("click", setTime);
// restartButton.addEventListener("click", refreshPage());

// function refreshPage() {
//     window.location.reload();
// }

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
    secondsleft = 60;
    currentQuestion = 0;
    initials = "";

    hideIntroduction();
    showQuiz();
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.innerHTML = secondsLeft + " seconds left.";
        answerResultEl.innerHTML = "";

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
    document.querySelector(".highScores").style.display = "none";
    document.querySelector(".user").style.display = "none";
}

//Function to show timer & quiz
function showQuiz() {
    document.querySelector(".timer").style.display = "block";
    document.querySelector(".quizContainer").style.display = "block";
}



//HIGH SCORE RECORDING & SHOWING

var scoreArray = [];
var initialsArray = [];
console.log(scoreArray + " Init. " + initialsArray)

//Event listener to save high score and display last high score
saveButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(scoreArray + " Init. 2 " + initialsArray)

    //setting input text value to the initials variable
    initials = document.getElementById("initials").value;
    console.log(initials + " scored " + score);



    //Call function to display previous high scores
    renderHighScores();

    //Call function to add new high score to the arrays and then save to local storage
    saveHighScore();


    console.log("scores saved " + score + " " + initials)
    document.querySelector(".highScores").style.display = "block";
    localStorage.setItem("initialsArray", JSON.stringify(initialsArray));
    localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
});


function saveHighScore() {
    //add new values to the arrays
    scoreArray.push(score);
    initialsArray.push(initials);
}

function renderHighScores() {
    //Checks to see if there are high scores and initials saved in storage and adds the values to the arrays if there are any.
    localScore = JSON.parse(localStorage.getItem("scoreArray"));
    localInitials = JSON.parse(localStorage.getItem("initialsArray"));
    if (localScore !== null && localInitials !== null) {
        scoreArray = localScore;
        initialsArray = localInitials;

        // scoreArray.push(localScore);
        // initialsArray.push(localInitials);
    }

    if (scoreArray !== null && initialsArray !== null) {
        for (i = 0; i < scoreArray.length; i++) {
            // previousInitialsEl.innerHTML = initialsArray[i];
            // previousScoresEl.innerHTML = scoreArray[i];

            //create variable with the entries in the initials array
            var optionInitial = document.createElement("div");
            optionInitial.textContent = initialsArray[i];

            //create variable with the entries in the scores array
            var optionScore = document.createElement("div");
            optionScore.textContent = scoreArray[i];

            //Create a variable 
            //Display the variables
            previousInitialsEl.append(optionInitial);
            previousInitialsEl.append(optionScore);
        }
    }
    else {
        previousInitialsEl.innerHTML = "No previous high scores";
    }

}


//Listen for "clear" button click
clearButton.addEventListener("click", clearArrays);

function clearArrays() {
    var scoreArray = [300];
    var initialsArray = ["Perfect Score"];
    localStorage.setItem("initialsArray", JSON.stringify(initialsArray));
    localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
}
//show scoreboard
// //Listen for "High Scores" button click
// scoresButton.addEventListener("click", showScores);

// function showScores() {
//     document.querySelector(".introduction").style.display = "none";
//     document.querySelector(".highScores").style.display = "block";
//     document.querySelector(".user").style.display = "none";
//     document.querySelector(".timer").style.display = "block";
//     document.querySelector(".quizContainer").style.display = "block";
// }
//include option to enter initials and save score
//save to local browser
//include option to clear scoreboard

//return to start screen or include button to restart the quiz


