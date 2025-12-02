const startScreen = document.getElementById("quizBox");
const answerScreen = document.getElementById("answerScreen");
const resultScreen = document.getElementById("resultScreen");
const startButton = document.getElementById("startButton");
const questionText = document.getElementById("questionText");
const answerButtons = document.getElementById("answerButtons");
const currentQuestionNumber = document.getElementById("currentQuestion"); // renamed for clarity
const totalQuestions = document.getElementById("totalQuestions");
const currentScore = document.getElementById("score");
const finalScore = document.getElementById("finalScore");
const maxScore = document.getElementById("maxScore");
const restartButton = document.getElementById("restartButton");
const progressBar= document.getElementById("progress");
const resultMessage = document.getElementById("resultMessage"); // missing before
const easyButton = document.getElementById("easy");
const mediumButton = document.getElementById("medium");
const hardButton = document.getElementById("hard");
const diffScreen = document.getElementById("diffScreen");

let quizQuestions;

// Quiz state variables
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;


//event listeners
startButton.addEventListener("click", choseDifficulty);
easyButton.addEventListener("click", startQuiz);
mediumButton.addEventListener("click", startQuiz);
hardButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);


//functions 
function choseDifficulty(){
startScreen.classList.remove("active");
diffScreen.classList.add("active");
}

function startQuiz(e) {
  switch(e.target.id){
    case "easy":
      quizQuestions = [

       
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
    break;
    case "medium":
      quizQuestions = [
  {
    question: "What is the capital of Australia?",
    answers: [
      { text: "Sydney", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Canberra", correct: true },
      { text: "Perth", correct: false }
    ]
  },
  {
    question: "Which African country has the largest population?",
    answers: [
      { text: "Egypt", correct: false },
      { text: "Ethiopia", correct: false },
      { text: "Nigeria", correct: true },
      { text: "South Africa", correct: false }
    ]
  },
  {
    question: "Which country does NOT border China?",
    answers: [
      { text: "India", correct: false },
      { text: "Russia", correct: false },
      { text: "Thailand", correct: true },
      { text: "Mongolia", correct: false }
    ]
  },
  {
    question: "What is the longest river in South America?",
    answers: [
      { text: "Paraná River", correct: false },
      { text: "Amazon River", correct: true },
      { text: "Orinoco River", correct: false },
      { text: "São Francisco River", correct: false }
    ]
  },
  {
    question: "Which country owns Greenland?",
    answers: [
      { text: "United Kingdom", correct: false },
      { text: "Canada", correct: false },
      { text: "Denmark", correct: true },
      { text: "Norway", correct: false }
    ]
  },
  {
    question: "What is the smallest country in the world?",
    answers: [
      { text: "Monaco", correct: false },
      { text: "San Marino", correct: false },
      { text: "Vatican City", correct: true },
      { text: "Liechtenstein", correct: false }
    ]
  },
  {
    question: "The Great Barrier Reef is located off the coast of which country?",
    answers: [
      { text: "Philippines", correct: false },
      { text: "Australia", correct: true },
      { text: "Indonesia", correct: false },
      { text: "New Zealand", correct: false }
    ]
  },
  {
    question: "Which desert is the largest hot desert in the world?",
    answers: [
      { text: "Gobi Desert", correct: false },
      { text: "Sahara Desert", correct: true },
      { text: "Arabian Desert", correct: false },
      { text: "Kalahari Desert", correct: false }
    ]
  },
  {
    question: "Which European city is divided by the Danube River?",
    answers: [
      { text: "Budapest", correct: true },
      { text: "Vienna", correct: false },
      { text: "Prague", correct: false },
      { text: "Belgrade", correct: false }
    ]
  },
  {
    question: "Which country has the most natural lakes?",
    answers: [
      { text: "United States", correct: false },
      { text: "Russia", correct: false },
      { text: "Canada", correct: true },
      { text: "Finland", correct: false }
    ]
  }
      ];
    break;
    case "hard":
      quizQuestions = [
  {
    question: "Which country has the longest coastline in the world?",
    answers: [
      { text: "Australia", correct: false },
      { text: "Russia", correct: false },
      { text: "Canada", correct: true },
      { text: "Indonesia", correct: false }
    ]
  },
  {
    question: "What is the capital city of Kazakhstan?",
    answers: [
      { text: "Astana (Nur-Sultan)", correct: true },
      { text: "Almaty", correct: false },
      { text: "Bishkek", correct: false },
      { text: "Tashkent", correct: false }
    ]
  },
  {
    question: "Which river is the longest in Europe?",
    answers: [
      { text: "Danube", correct: false },
      { text: "Volga", correct: true },
      { text: "Rhine", correct: false },
      { text: "Dnieper", correct: false }
    ]
  },
  {
    question: "What is the deepest oceanic trench in the world?",
    answers: [
      { text: "Java Trench", correct: false },
      { text: "Mariana Trench", correct: true },
      { text: "Puerto Rico Trench", correct: false },
      { text: "Tonga Trench", correct: false }
    ]
  },
  {
    question: "Which country contains the most time zones?",
    answers: [
      { text: "United States", correct: false },
      { text: "Russia", correct: false },
      { text: "France", correct: true },
      { text: "China", correct: false }
    ]
  },
  {
    question: "The city of Timbuktu is located in which country?",
    answers: [
      { text: "Niger", correct: false },
      { text: "Mali", correct: true },
      { text: "Chad", correct: false },
      { text: "Senegal", correct: false }
    ]
  },
  {
    question: "What is the largest island in the Mediterranean Sea?",
    answers: [
      { text: "Sardinia", correct: false },
      { text: "Sicily", correct: true },
      { text: "Cyprus", correct: false },
      { text: "Crete", correct: false }
    ]
  },
  {
    question: "Which country has the highest average elevation?",
    answers: [
      { text: "Nepal", correct: false },
      { text: "Tajikistan", correct: false },
      { text: "Bhutan", correct: true },
      { text: "Kyrgyzstan", correct: false }
    ]
  },
  {
    question: "Lake Baikal, the deepest lake in the world, is located in which country?",
    answers: [
      { text: "China", correct: false },
      { text: "Russia", correct: true },
      { text: "Mongolia", correct: false },
      { text: "Kazakhstan", correct: false }
    ]
  },
  {
    question: "Which two continents are entirely in the Southern Hemisphere?",
    answers: [
      { text: "Africa and Antarctica", correct: false },
      { text: "Australia and Antarctica", correct: true },
      { text: "South America and Africa", correct: false },
      { text: "Australia and South America", correct: false }
    ]
  }
      ];
    break;
  }
  totalQuestions.textContent = quizQuestions.length;
  maxScore.textContent = quizQuestions.length;  
    console.log("Quiz Started");
    currentQuestionIndex = 0;
    score = 0;
    currentScore.textContent = score;
    diffScreen.classList.remove("active");
    answerScreen.classList.add("active");
    showQuestion();
}
function showQuestion() {
    // reset state
    answersDisabled = false;
    const currentQuestion = quizQuestions[currentQuestionIndex];

    // update question number and progress
    if (currentQuestionNumber) currentQuestionNumber.textContent = currentQuestionIndex + 1;
    
    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    if (progressBar) progressBar.style.width = progressPercent + "%";

    // question text
    questionText.textContent = currentQuestion.question;

    // build answer buttons
    answerButtons.innerHTML = "";
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.className = "answerButton";
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(event){
    if(answersDisabled) return;

    answersDisabled = true; // fixed typo
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    // show correct/wrong state on every button
    Array.from(answerButtons.children).forEach(button =>{
      // button.classList.add("answerbuttons");
      if(button.dataset.correct === "true"){
            button.classList.add("correct");
        } else {
            button.classList.add("wrong");
        }
        button.disabled = true;
    });

    if(isCorrect){
        score+=10;
        currentScore.textContent = score;
    }

    setTimeout(()=>{
        currentQuestionIndex++;
        if(currentQuestionIndex < quizQuestions.length){
            showQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

function showResult(){
    answerScreen.classList.remove("active");
    resultScreen.classList.add("active");

    const percentage = Math.round((score / quizQuestions.length) * 10);
    
    finalScore.textContent = percentage;
    maxScore.textContent = quizQuestions.length *10;
    if (!resultMessage) return;

    if (percentage === 100) {
        resultMessage.textContent = "Perfect! You're a genius!";
    } else if (percentage >= 90) {
        resultMessage.textContent = "Excellent work! Almost perfect!";
    } else if (percentage >= 80) {
        resultMessage.textContent = "Great job! You really know your stuff!";
    } else if (percentage >= 70) {
        resultMessage.textContent = "Good effort! You're getting the hang of it.";
    } else if (percentage >= 60) {
        resultMessage.textContent = "Not bad, but there's room for improvement.";
    } else if (percentage >= 50) {
        resultMessage.textContent = "You passed, but try reviewing the material.";
    } else if (percentage >= 40) {
        resultMessage.textContent = "A bit rough. Keep practicing!";
    } else if (percentage >= 30) {
        resultMessage.textContent = "You're struggling — take your time learning.";
    } else if (percentage >= 20) {
        resultMessage.textContent = "Very low score. Review the basics!";
    } else if (percentage >= 10) {
        resultMessage.textContent = "Ouch… but don’t give up!";
    } else {
        resultMessage.textContent = "No worries — try again and you'll improve!";
    }
}


function restartQuiz() {
    resultScreen.classList.remove("active");

   startScreen.classList.add("active");
}

