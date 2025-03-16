export const quizQuestions = [
    { question: "What is module cohesion?", answer: "Module cohesion refers to how closely related and focused the functions within a single module are." },
    { question: "What is module coupling?", answer: "Module coupling describes how much one module depends on another module." },
    { question: "Why is high cohesion preferred?", answer: "High cohesion improves maintainability and makes the module more reusable." }
];

let currentQuizIndex = 0;

export function loadQuizQuestion() {
    if (currentQuizIndex >= quizQuestions.length) {
        document.getElementById("quizContainer").innerHTML = "<h2>✅ Quiz Complete!</h2>";
        return;
    }

    document.getElementById("quizQuestion").textContent = quizQuestions[currentQuizIndex].question;
    document.getElementById("quizAnswer").value = "";
    document.getElementById("quizCorrectAnswer").style.display = "none";
}

export function revealAnswer() {
    document.getElementById("quizCorrectAnswer").textContent = quizQuestions[currentQuizIndex].answer;
    document.getElementById("quizCorrectAnswer").style.display = "block";
}

export function nextQuizQuestion() {
    currentQuizIndex++;
    loadQuizQuestion();
}
