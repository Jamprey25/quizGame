const startScreen = document.getElementById("quizBox");
const answerScreen = document.getElementById("answerScreen");
const resultScreen = document.getElementById("resultScreen");
const startButton = document.getElementById("startButton");
const questionText = document.getElementById("questionText");
const answerButtons = document.getElementById("answerButtons");
const currentQuestion = document.getElementById("currentQuestion");
const totalQuestions = document.getElementById("totalQuestions");
const currentScore = document.getElementById("score");
const finalScore = document.getElementById("finalScore");
const maxScore = document.getElementById("maxScore");
const restartButton = document.getElementById("restartButton");
const progressBar = document.getElementById("progressBar");

const quizQuestions = [

       
  {
    question: "What is the largest continent on Earth?",
    answers: [
      { text: "Africa", correct: false },
      { text: "Asia", correct: true },
      { text: "Europe", correct: false },
      { text: "Australia", correct: false }
    ]
  },
  {
    question: "What ocean lies on the east coast of the United States?",
    answers: [
      { text: "Pacific Ocean", correct: false },
      { text: "Atlantic Ocean", correct: true },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false }
    ]
  },
  {
    question: "Which country is famous for the Eiffel Tower?",
    answers: [
      { text: "Italy", correct: false },
      { text: "Germany", correct: false },
      { text: "France", correct: true },
      { text: "Spain", correct: false }
    ]
  },
  {
    question: "Which continent is Egypt located in?",
    answers: [
      { text: "Europe", correct: false },
      { text: "Africa", correct: true },
      { text: "Asia", correct: false },
      { text: "South America", correct: false }
    ]
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Tokyo", correct: true },
      { text: "Seoul", correct: false },
      { text: "Beijing", correct: false },
      { text: "Bangkok", correct: false }
    ]
  },
  {
    question: "Which country is shaped like a boot?",
    answers: [
      { text: "Spain", correct: false },
      { text: "Italy", correct: true },
      { text: "Portugal", correct: false },
      { text: "Greece", correct: false }
    ]
  },
  {
    question: "What is the largest country in the world by area?",
    answers: [
      { text: "Canada", correct: false },
      { text: "Russia", correct: true },
      { text: "China", correct: false },
      { text: "Brazil", correct: false }
    ]
  },
  {
    question: "Which continent has the most countries?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Africa", correct: true },
      { text: "Europe", correct: false },
      { text: "South America", correct: false }
    ]
  },
  {
    question: "What river runs through Egypt?",
    answers: [
      { text: "Amazon River", correct: false },
      { text: "Nile River", correct: true },
      { text: "Yangtze River", correct: false },
      { text: "Mississippi River", correct: false }
    ]
  },
  {
    question: "Mount Everest is located in which mountain range?",
    answers: [
      { text: "Andes", correct: false },
      { text: "Himalayas", correct: true },
      { text: "Rockies", correct: false },
      { text: "Alps", correct: false }
    ]
  }
];

// Quiz state variables
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestions.textContent = quizQuestions.length;
maxScore.textContent = quizQuestions.length;

//event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

//functions 

function startQuiz() {
    console.log("Quiz Started");
    currentQuestionIndex = 0;
    score = 0;
    currentScore.textContent = score;
    startScreen.classList.remove("active");
    answerScreen.classList.add("active");
    
}

function restartQuiz() {
    console.log("Quiz Restarted");
}

