
let questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Markup Language"
        ],
        answer: 0
    },
    {
        question: "Which language is used for styling?",
        options: ["Java", "CSS", "Python", "C++"],
        answer: 1
    },
    {
        question: "Which tag creates the largest heading?",
        options: ["<h6>", "<head>", "<h1>", "<heading>"],
        answer: 2
    },
    {
        question: "Which language makes websites interactive?",
        options: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        answer: 3
    },
    {
        question: "Which symbol represents an ID in CSS?",
        options: [".", "#", "*", "@"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = -1;

function startQuiz() {
    currentQuestion = 0;
    score = 0;

    document.querySelector(".hero").style.display = "none";
    document.getElementById("quiz-box").style.display = "block";
    document.getElementById("result-box").style.display = "none";

    showQuestion();
}

function showQuestion() {

    let q = questions[currentQuestion];

    document.getElementById("question").innerText = q.question;

    document.getElementById("question-number").innerText =
        "Question " + (currentQuestion + 1);

    let options = document.getElementById("options");

    options.innerHTML = "";
    selectedAnswer = -1;

    for (let i = 0; i < q.options.length; i++) {

        let button = document.createElement("button");

        button.innerText = q.options[i];
        button.className = "option-btn";

        button.onclick = function () {
            selectedAnswer = i;

            let allButtons = document.getElementsByClassName("option-btn");

            for (let j = 0; j < allButtons.length; j++) {
                allButtons[j].classList.remove("selected");
            }

            button.classList.add("selected");
        };

        options.appendChild(button);
    }
}

function nextQuestion() {

    if (selectedAnswer === -1) {
        alert("Please select an answer!");
        return;
    }

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function previousQuestion() {

    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function showResult() {

    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("result-box").style.display = "block";

    document.getElementById("score").innerText =
        score + " / " + questions.length;

    document.getElementById("result-message").innerText =
        "Your percentage is " + (score / questions.length * 100) + "%";
}

function restartQuiz() {

    document.getElementById("result-box").style.display = "none";
    document.querySelector(".hero").style.display = "block";

}
