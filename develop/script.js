
// Declare Variables
var multiplyButton = document.getElementById("multiplyBtn");
var divisionButton = document.getElementById("divisionBtn");
var quizType;
var submitButton = document.getElementById("submitBtn");
var homePage = document.getElementById("index");
var quizPage = document.getElementById("quiz");
var initialsPage = document.getElementById("initialsPg");

var timeEl = document.querySelector(".time");
var secondsLeft = 75;
var i;
var k = 0;
var index = 0;

var answerBtn = document.getElementById("answer-button");
var playerAnswer;

var questionText = document.querySelector(".question");

var scoreCounter = document.querySelector(".score");
var finalScore = document.querySelector(".finalScore");
var userAnswer, answer, ans;
var totScore = 0;

var result = document.querySelector(".result");
var resultEl = document.getElementById("result");
var scoreAlert = document.querySelector(".score-alert")

// On Start Quiz button click, hide homePage and show quizPage
function startQuiz(){
    quizType = this.value;
    homePage.hidden = true;
    quizPage.hidden = false;
    quizTime();
    getQuestion();
};

// Quiz page timer 
function quizTime() {
    var timerInterval = setInterval(function() {
         secondsLeft--;
         timeEl.textContent = secondsLeft;

        //  Change timer to red when < 15 seconds remaining
         if (secondsLeft <= 15){
             document.getElementById("timer").className = "text-center text-danger";
         }
 
        //  Time is up
         if(secondsLeft <= 0) {
             secondsLeft = 0;
             timeEl.textContent = secondsLeft;
             clearInterval(timerInterval);
             finalScore.textContent= totScore;
             // Show initials page, hide quizPage
             quizPage.hidden = true;
             initialsPage.hidden = false;
            } 
        }, 1000);
}

// gets a question and prints it to screen
 function getQuestion(){
    document.getElementById("answer-input").focus();
    answerBtn.className = "btn btn-danger";
    document.getElementById("answer-input").value = " ";
    if(quizType == "multiply"){
        x = Math.ceil(Math.random()*8+1);
        y = Math.ceil(Math.random()*8+1);
        answer = x * y;
        questionText.textContent = `${x} x ${y} = `;
    } else if(quizType == "division"){
        x = Math.ceil(Math.random()*89+10);
        y = Math.ceil(Math.random()*8+1);
        ans = x / y;
        answer = ans.toFixed(2)
        questionText.textContent = `${x} / ${y} = `;
    }
 }

 function ansCheck(){
    playerAnswer = parseFloat(document.getElementById("answer-input").value);
    if(playerAnswer == answer){
        totScore++;
        scoreCounter.textContent = totScore;
        getQuestion();
    } else{
        scoreCounter.textContent = totScore;
        secondsLeft = secondsLeft - 10;
    }
 }

// Store score and player initials to localStorage
 function scoreSubmit(){

    var playerInitials = document.getElementById("initials").value;
    var playerScore = totScore;

    // If local storage is empty, make empty arrays. Push player initials and player score to array.
    // Else get from local storage and insert in correct location.
    if(!localStorage.getItem("storedPlayers")){
        localStorage.setItem("storedPlayers","[]");
        var storedPlayers = JSON.parse(localStorage.getItem("storedPlayers"));
        storedPlayers.push(playerInitials);
    } else{
        var storedPlayers = JSON.parse(localStorage.getItem("storedPlayers"));
    }
    if(!localStorage.getItem("storedScores")){
        localStorage.setItem("storedScores","[]");
        var storedScores = JSON.parse(localStorage.getItem("storedScores"));
        storedScores.push(playerScore);
    } else{
        var storedScores = JSON.parse(localStorage.getItem("storedScores"));
    }

    var m = storedScores.length;

    for(var index=0; index < m; index++){
        oldScore = storedScores[index];

        if(playerScore > oldScore){
            storedPlayers.splice(index,0,playerInitials);
            storedScores.splice(index,0,playerScore);
            index = m;
            }
    }

    // Stringify storedPlayers and storedScores array
    localStorage.setItem("storedPlayers",JSON.stringify(storedPlayers));
    localStorage.setItem("storedScores",JSON.stringify(storedScores));

    window.location.replace("develop/highscores.html");   
}

answerBtn.onclick = ansCheck;
submitButton.onclick = scoreSubmit;
multiplyButton.onclick = startQuiz;
divisionButton.onclick = startQuiz