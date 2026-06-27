const questions = [
    {
        question: "which is the largest animal in the world?",
        answers:[
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
            
        ]

    },
    {
         question: "which is the largest country in the world?",
        answers:[
            { text: "India", correct: false},
            { text: "USA", correct: false},
            { text: "Russia", correct: true},
            { text: "Iran", correct: false},
            
        ]

    },
    {
         question: "which is the largest river in the world?",
        answers:[
            { text: "Nile", correct: true},
            { text: "Ganga", correct: false},
            { text: "Hindon", correct: false},
            { text: "Yamuna", correct: false},
            
        ]
    },
    {
         question: "which is the largest city(Population) in the world?",
        answers:[
            { text: "Delhi", correct: false},
            { text: "Meerut", correct: false},
            { text: "New york", correct: false},
            { text: "Tokyo", correct: true},
            
        ]
    },
    {
         question: "which is the largest desert in the world?",
        answers:[
            { text: "Thar Desert", correct: false},
            { text: "Antarctic Desert", correct: true},
            { text: "Sahara Desert", correct: false},
            { text: "none of these"},
            
        ]
    }
];
const questionElement = document.getElementById("question");
const answersButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentquestionIndex = 0;
let score = 0;
function startquiz(){
    currentquestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showquestion();
}
function showquestion(){
    let currentquestion = question[currentquestionIndex];
    let questionNo = currentquestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentquestion.question;
    

}