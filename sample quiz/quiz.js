var introEl= document.querySelector("#intro")
var qaViewEl= document.querySelector("#qa-view")
var timerEl= document.querySelector("#time")
var titleEl= document.querySelector
("#title")
var highScoresEl= document.querySelector("#high-scores")
var inputInitialEl= document.querySelector("#input-initial")
var enterInitialEl= document.querySelector("#enter-inital")
var saveEl=document.querySelector("#save")
var dashboard= document.querySelector("#dashboard")
var answer1El= document.querySelector("#answer1")
var answer2El= document.querySelector("#answer2")
var answer3El= document.querySelector("#answer3")
var answer4El= document.querySelector("#answer4")
var startQuizBtn =  document.querySelector("#start-quiz")
/*
step 1. displays start page - title and paragraph
start button -  (triggers the quiz game and displays timer and question page)

step 2. displays question page and hides start page - timer will start when the start button is clicked from start page, display question and show 4 four answer buttons,  
When you click one of the answer button, show correct or wrong. . Total remaining is 75 seconds for 5 questions. total = number of Questions * 15 seconds.

When you get a wrong answer, your time gets deducted by 15 sec off the clock and it needs to show wrong message. If you get it right, no penalty off clock but you need to show Correct message.

step 3. Once you answer all the questions, you will be presented with the score and input text to enter your initial and a submit button. The timer should stop
and time left becomes your score. When you click the submit, it store your initial and score in localstorage

step 4:
Show a dashboard of all the highscores 
*/ 

var timeRemaining=75 // for each 5questions
var clockid

var question=[{
title:"What does HTML stand for?",
answers:["Hypertext Markup Language","Hampsters try making lasagna","Hyperlink Marker Language","Just don't pick this one"],
solution: "answer1"

},{
title:"What language will you use to style your html page?",
answers:["Javascript","CSS","R","Python"],
solution: "answer2"
},{
    title:"What is a group of variables called?",
    answers:["Grouping","Marker","Array","Static selector"],
    solution: "answer3"
},{
    title:"What language will you use to style your html page?",
    answers:["Javascript","CSS","R","Python"],
    solution: "answer2"
},{
    title:"Test?",
    answers:["Test","Answer","Test","Test"],
    solution: "answer2"
}
]

var index=0

function countDown(){
    timerEl.textContent=timeRemaining
     timeRemaining--
}

function startGame(){
    qaViewEl.classList.remove("hide")
    introEl.classList.add("hide")
    clockid=setInterval(countDown,1000)
    displayQuestions()
}

function displayQuestions(){
    titleEl.textContent=question[index].title
    answer1El.textContent=question[index].answers[0]
     answer2El.textContent=question[index].answers[1]
     answer3El.textContent=question[index].answers[2]
     answer4El.textContent=question[index].answers[3]
}

function nextQuestion()
{
    index++
    displayQuestions()
}
answer1El.addEventListener("click",nextQuestion)
answer2El.addEventListener("click",nextQuestion)
answer3El.addEventListener("click",nextQuestion)
answer4El.addEventListener("click",nextQuestion)

function saveGame()
{
    
}


saveEl.addEventListener("submit",saveGame)
startQuizBtn.addEventListener("click",startGame)