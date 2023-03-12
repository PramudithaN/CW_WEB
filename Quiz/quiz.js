const quizData = [
  {
    question: "Which of the following is not a primary color?",
    a: "Red",
    b: "Yellow",
    c: "Green",
    d: "Blue",
    correct: "c",
  },

  {
    question: "Which software is commonly used for digital painting?",
    a: "Adobe Photoshop",
    b: "Final Cut Pro",
    c: "Microsoft Word",
    d: "Windows Paint",
    correct: "a",
  },

  {
    question: "Which art movement is often associated with the use of bright colors and geometric shapes?",
    a: "Impressionism",
    b: "Baroque",
    c: "Pop Art",
    d: "Realism",
    correct: "c",
  },

  {
    question: "What brush is used to blend the paint?",
    a: "Blur",
    b: "Blender",
    c: "Diffuser",
    d: "Smudge",
    correct: "c",
  },
  {
    question: "Who painted the Mona Lisa?",
    a: "Michelangelo",
    b: "Leonardo da Vinci",
    c: "Pablo Picasso",
    d: "Vincent van Gogh",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = ` 
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick= "location.reload()">Restart</button>
            `;
    }
  }
});
