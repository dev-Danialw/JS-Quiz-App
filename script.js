const quizData = [
  {
    question: "How old are You?",
    a: "10",
    b: "12",
    c: "18",
    d: "21",
    correct: "d",
  },
  {
    question: "What is the best programming language?",
    a: "JavaScript",
    b: "C++",
    c: "JAVA",
    d: "Python",
    correct: "a",
  },
  {
    question: "When was JavaScript launched?",
    a: "2020",
    b: "2019",
    c: "2018",
    d: "none of the above",
    correct: "d",
  },
  {
    question: "What does HTML stands for?",
    a: "Hyper Text Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Hell To My Language",
    correct: "a",
  },
  {
    question: "What is the best programming language?",
    a: "JavaScript",
    b: "C++",
    c: "JAVA",
    d: "Python",
    correct: "a",
  },
  {
    question: "What is the tag used for paragraph in HTML",
    a: "<p></p>",
    b: "<paragrapgh>",
    c: "<h1></h1>",
    d: "<span></span>",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};
loadQuiz();

const getSlected = () => {
  let answer = undefined;
  answerEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
};

submitBtn.addEventListener("click", () => {
  const answer = getSlected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>
          You have answerd ${score}/${quizData.length} questions.
        </h2>
        <button onClick="location.reload()">Reload</button>`;
    }
  }
});
