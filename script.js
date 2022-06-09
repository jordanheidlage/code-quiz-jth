// create variables for all the elements we are targeting
var timeEl = document.getElementById('time');
var startEl = document.getElementById('start');
var startBtnEl = document.getElementById('startBtn');
var questionContainerEl = document.getElementById('questionContainer');
var questionTitleEl = document.getElementById('questionTitle');
var submitInitialsEl = document.getElementById('submitInitials');
var finalScoreEl = document.getElementById('finalScore');
var initialsEl = document.getElementById('initials');
var highScoresEl = document.getElementById('highScores');
var answer1El= document.querySelector("#answer1")
var answer2El= document.querySelector("#answer2")
var answer3El= document.querySelector("#answer3")
var answer4El= document.querySelector("#answer4")

// create variables for the questions (think about an array of objects to house your questions and choices and answers together). 


var quizQuestions = [{
    question: "What does HTML stand for?",
    choiceA: "Hypertext Markup Language",
    choiceB: "Hampsters try making lasagna",
    choiceC: "Hyperlink Marker Language",
    choiceD: "Just don't pick this one",
    correctAnswer: "a"},
  {
    question: "What language will you use to style your html page?",
    choiceA: "Javascript",
    choiceB: "CSS",
    choiceC: "R",
    choiceD: "Python",
    correctAnswer: "b"},
  {    
    question: "What is a cluster of variables called?",
    choiceA: "Grouping",
    choiceB: "Marker",
    choiceC: "Array",
    choiceD: "Static Selector",
    correctAnswer: "c"},
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choiceA: "<scripting>",
    choiceB: "<js>",
    choiceC: "<javascript>",
    choiceD: "<script>",
    correctAnswer: "d"},
  {  
}]

// create a variable for the time..this should be a number for the timer to manipulate. 
 var timeRemaining=75
 var clockid


// GIVEN I am taking a code quiz
// WHEN I click the start button THEN a timer starts (setInterval()) and need to hide the start container, show question container make sure to display the time on the screen. 

// question needs to display the questions title. we need to dynamically create the choice buttons add their textContent and add a click event


// create function to check the answer
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// once the button is clicked we need to ask the next question. 


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over need to hide the question container, show initial submit container container 


// create a function to save the initial and score into local storage

// WHEN the game is over
// THEN I can save my initials and my score

choicesEl.addEventListener("click",nextQuestion)

startBtnEl.addEventListener("click",startGame)