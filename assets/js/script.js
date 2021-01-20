
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