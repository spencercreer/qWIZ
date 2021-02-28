
// Declare Variables
var multiplyButton = document.getElementById("multiplyBtn");
var divisionButton = document.getElementById("divisionBtn");
var easyButton = document.getElementById("easyBtn");
var mediumButton = document.getElementById("mediumBtn");
var hardButton = document.getElementById("hardBtn");
var quizType, quizDifficulty;
var submitButton = document.getElementById("submitBtn");
var clearButton = document.getElementById("clearBtn");
var homePage = document.getElementById("index");
var difficultyPage = document.getElementById("difficulty");
var quizPage = document.getElementById("quiz");
var initialsPage = document.getElementById("initialsPg");
var highscoresPage = document.getElementById("highscoresPg");
var quizTitleText = document.querySelector(".highscoresTitle")

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

// Load quiz difficulty page
function quizDifficultyPage(){
    quizType = this.value;
    homePage.hidden = true;
    difficultyPage.hidden = false;
    quizPage.hidden = true;
}

// On Start Quiz button click, hide homePage and show quizPage
function startQuiz(){
    quizDifficulty = this.value;
    homePage.hidden = true;
    difficultyPage.hidden = true;
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
    if(quizType == "Multiplication"){
        // multiplication question
        if(quizDifficulty == "Easy"){
            x = Math.ceil(Math.random()*8+1);
            y = Math.ceil(Math.random()*8+1);
        } else if(quizDifficulty == "Medium"){
            x = Math.ceil(Math.random()*8+1);
            y = Math.ceil(Math.random()*89+10);
        } else{
            x = Math.ceil(Math.random()*89+10);
            y = Math.ceil(Math.random()*89+10);
        }
        answer = x * y;
        questionText.textContent = `${x} x ${y} = `;
    } else if(quizType == "Division"){
        // division question
        if(quizDifficulty == "Easy"){
            y = Math.ceil(Math.random()*8+1);
            x = Math.ceil(Math.random()*9+1)*y;
        } else if(quizDifficulty == "Medium"){
            y = Math.ceil(Math.random()*8+1);
            x = Math.ceil(Math.random()*99+1)*y;
        } else{
            y = Math.ceil(Math.random()*8+1);
            x = Math.ceil(Math.random()*99+1);
        }
        ans = x / y;
        answer = ans.toFixed(2);
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

    var quizPlayers = quizDifficulty + quizType + "Players";
    var quizScores = quizDifficulty + quizType + "Scores";
    var storedPlayers = "[]";
    var storedScores = "[]";
    var playerInitials = document.getElementById("initials").value;
    var playerScore = totScore;

    // If no initials were entered, prompt user to enter initials
    if(playerInitials === ""){
        confirm("Please enter your initials.")
    } else {
        // If local storage is empty, make empty arrays. Push player initials and player score to array.
        if(!localStorage.getItem(quizPlayers)){
            localStorage.setItem(quizPlayers,"[]");
            storedPlayers = JSON.parse(localStorage.getItem(quizPlayers));
            storedPlayers.push(playerInitials);
    
            localStorage.setItem(quizScores,"[]");
            storedScores = JSON.parse(localStorage.getItem(quizScores));
            storedScores.push(playerScore);
        } else{
            // Else get from local storage and insert in correct location.
            storedPlayers = JSON.parse(localStorage.getItem(quizPlayers));
            storedScores = JSON.parse(localStorage.getItem(quizScores));
            var m = storedScores.length;
            for(var index=0; index < m; index++){
                oldScore = storedScores[index];
        
                if(playerScore > oldScore){
                    storedPlayers.splice(index,0,playerInitials);
                    storedScores.splice(index,0,playerScore);
                    index = m;
                }
            }
        }
        // Stringify storedPlayers and storedScores array
        localStorage.setItem(quizPlayers,JSON.stringify(storedPlayers));
        localStorage.setItem(quizScores,JSON.stringify(storedScores));
        storedPlayers = JSON.parse(localStorage.getItem(quizPlayers));
        storedScores = JSON.parse(localStorage.getItem(quizScores));
    
        scoresList.innerHTML = "";
    
        for (var i = 0; i < storedScores.length; i++) {
            var player = storedPlayers[i];
            var score = storedScores[i];
    
            // Create new row in highscores table
            var playerNewRow = document.createElement("tr");
            var positionEl = document.createElement("td");
            var playerInitialsEl = document.createElement("td");
            var playerScoreEl = document.createElement("td");
            positionEl.className = "text-center";
            playerInitialsEl.className = "text-center";
            playerScoreEl.className = "text-center";
            // Add new row player and score content
            positionEl.innerHTML = i+1;
            playerInitialsEl.innerHTML = player;
            playerScoreEl.innerHTML = score;  
            // Append new row
            playerNewRow.append(positionEl,playerInitialsEl,playerScoreEl);
            scoresList.append(playerNewRow);
          }
        // Add quiz difficulty and type to title show highscores page
        quizTitleText.textContent = `${quizDifficulty} ${quizType} Quiz`;
        initialsPage.hidden = true;
        highscoresPage.hidden = false;
    }


}

// On Clear Highscores click, clear scores list
function clearScores(){
    localStorage.removeItem(quizDifficulty + quizType + "Players");
    localStorage.removeItem(quizDifficulty + quizType + "Scores");
    location.reload();
}

clearButton.onclick = clearScores;
answerBtn.onclick = ansCheck;
// Answer input keypress 'Enter' ansCheck function
document.getElementById("answer-input").addEventListener("keyup", function(event){
    if(event.key == "Enter") {
        ansCheck();
    }
});
submitButton.onclick = scoreSubmit;
// Initials input keypress 'Enter' scoreSubmit function
document.getElementById("initials").addEventListener("keyup", function(event){
    if(event.key == "Enter") {
        scoreSubmit();
    }
});
multiplyButton.onclick = quizDifficultyPage;
divisionButton.onclick = quizDifficultyPage;
easyButton.onclick = startQuiz;
mediumButton.onclick = startQuiz;
hardButton.onclick = startQuiz