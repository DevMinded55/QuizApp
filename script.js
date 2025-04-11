let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wofür steht CSS?",
        "answer_1": "Creative Style System",
        "answer_2": "Cascading Style Sheets",
        "answer_3": "Computer Style Syntax",
        "answer_4": "Colorful Style Scripts",
        "right_answer": 2
    },
    {
        "question": "Welche Schleife gibt es in JavaScript?",
        "answer_1": "repeat-until",
        "answer_2": "foreach (x in y)",
        "answer_3": "loop {}",
        "answer_4": "for (let i = 0; i < 5; i++)",
        "right_answer": 4
    },
    {
        "question": "Was bewirkt der Befehl `document.getElementById()` in JavaScript?",
        "answer_1": "Er fügt ein neues Element hinzu.",
        "answer_2": "Er verändert den Seiten-Titel.",
        "answer_3": "Er holt ein HTML-Element über die ID.",
        "answer_4": "Er erstellt eine neue Seite.",
        "right_answer": 3
    }
];

let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio("./assets/sound/correct.wav");
let AUDIO_FAIL = new Audio("./assets/sound/wrong.wav");

function init(){
    document.getElementById("all-questions").innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){
    if(currentQuestion >= questions.length){
        document.getElementById("endScreen").style = "";
        document.getElementById("questionBody").style = "display: none";
        document.getElementById("quizPic").style = "display: none";
        document.getElementById("amount-of-questions").innerHTML = questions.length;
        document.getElementById("amount-of-right-questions").innerHTML = rightQuestions;
        document.getElementById("progress-bar").innerHTML = `100%`
        document.getElementById("progress-bar").style.width = `100%`
    }else{

    let percent = currentQuestion / questions.length;
    percent = Math.round(percent * 100);

    document.getElementById("progress-bar").innerHTML = `${percent}%`
    document.getElementById("progress-bar").style.width = `${percent}%`

    let question = questions[currentQuestion];
    document.getElementById("questiontext").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
    }
}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question["right_answer"]}`

    if(selectedQuestionNumber == question["right_answer"]){
        document.getElementById(selection).parentNode.classList.add("bg-success");
        AUDIO_SUCCESS.play();
        rightQuestions ++;
    }else {
        document.getElementById(selection).parentNode.classList.add("bg-danger");
        document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
        AUDIO_FAIL.play();
    }
    document.getElementById("next-button").disabled = false;
}

function nextQuestion(selection){
    currentQuestion ++;
    document.getElementById("current-question").innerHTML = currentQuestion + 1;
    resetAnswerButtons()
    showQuestion();
}

function resetAnswerButtons(){
    document.getElementById("answer_1").parentNode.classList.remove("bg-success");
    document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_2").parentNode.classList.remove("bg-success");
    document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_3").parentNode.classList.remove("bg-success");
    document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_4").parentNode.classList.remove("bg-success");
    document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
    document.getElementById("next-button").disabled = true;
}

function showResult(){
    
}

function restartGame(){
    document.getElementById("quizPic").style = "";
    document.getElementById("endScreen").style = "display: none"
    document.getElementById("questionBody").style = "";
    currentQuestion = 0;
    document.getElementById("current-question").innerHTML = currentQuestion + 1
    rightQuestions = 0;
    init();
}