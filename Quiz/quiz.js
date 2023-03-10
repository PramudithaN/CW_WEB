const quizData = [
    {
        question:"What tool do you use to give more contrast to a pencil drawing?",
        a:"Level tool.",
        b:"Color / Contrast tool.",
        c:"Lasso tool.",
        d:"Curve tool.",
        correct: "a",
    },

    {
        question:"What is the application  used to paint the image?",
        a:"Adobe Photoshop",
        b:"Digital Canvas",
        c:"Corel Painter XI",
        d:"WIndows Paint",
        correct: "c",
    },

    {
        question:"What is the main brush tools used to paint the image?",
        a:"Oil pastels",
        b:"Digital watercolors",
        c:"Color pencils",
        d:"Image hose",
        correct: "b",
    },

    {
        question:"What brush is used to blend the paint?",
        a:"Blur",
        b:"Blender",
        c:"Diffuser",
        d:"Smudge",
        correct: "c",
    },
    {
        question:"What is the reason for using the brushes in Question 4?",
        a:"The colors do not paint over the pencil drawing.",
        b:"The colors blend better than other brushes.",
        c:"The brushes are easier to use than others.",
        d:"None of the above",
        correct: "a",
    }
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl= document.getElementById('question')
const a_text= document.getElementById('a_text')
const b_text= document.getElementById('b_text')
const c_text= document.getElementById('c_text')
const d_text= document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

    deselectAnswer()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', ()=>{
    const answer = getSelected()
    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = ` 
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick= "location.reload()">Restart</button>
            `
        }
    }
})
