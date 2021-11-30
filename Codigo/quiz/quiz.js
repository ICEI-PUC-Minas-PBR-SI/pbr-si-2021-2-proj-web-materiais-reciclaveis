const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];

fetch(
        "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
      
    ) 
    .then(res => {        

        // return res.json();
        return {
            "response_code":0,
            "results":[
               {
                  "category":"Reciclagem",
                  "type":"multiple",
                  "difficulty":"easy",
                  "question":"Dos materiais apresentados abaixo, qual não é reciclável?",
                  "correct_answer":"Seringas usadas",
                  "incorrect_answers":[
                     "Papel",
                     "Plástico",
                     "Metal"
                  ]
               },
               {
                  "category":"Reciclagem",
                  "type":"multiple",
                  "difficulty":"easy",
                  "question":"Qual a cor da lixeira de reciclagem para papel?",
                  "correct_answer":"Azul",
                  "incorrect_answers":[
                     "Vermelho",
                     "Verde",
                     "Roxo"
                  ]
               },
               {
                  "category":"Reciclagem",
                  "type":"multiple",
                  "difficulty":"easy",
                  "question":"Qual a cor da lixeira de reciclagem para plastico?",
                  "correct_answer":"Vermelho",
                  "incorrect_answers":[
                     "Azul",
                     "Morrom",
                     "Preto"
                  ]
               },
               {
                  "category":"Reciclagem",
                  "type":"multiple",
                  "difficulty":"easy",
                  "question":"Qual a cor da lixeira de reciclagem para Vidro?",
                  "correct_answer":"Verde",
                  "incorrect_answers":[
                     "Amarelo",
                     "Cinza",
                     "Roza"
                  ]
               },
               {
                  "category":"Reciclagem",
                  "type":"multiple",
                  "difficulty":"easy",
                  "question":"Qual a cor da lixeira de reciclagem para Metal?",
                  "correct_answer":"Amarelo",
                  "incorrect_answers":[
                     "Azul",
                     "Laranja",
                     "Branco"
                  ]
               },
               {
                  "category":"Reciclagem",
                  "type":"multiple",
                  "difficulty":"easy",
                  "question":"Qual a cor da lixeira de reciclagem para Orgânico?",
                  "correct_answer":"Amarrom",
                  "incorrect_answers":[
                     "Cinza",
                     "Vermelho",
                     "Roxo"
                  ]
               },
               {
                  "category":"Reciclagem",
                  "type":"multiple",
                  "difficulty":"easy",
                  "question":"Qual a cor da lixeira de reciclagem para Não Reciclável?",
                  "correct_answer":"Cinza",
                  "incorrect_answers":[
                     "Vermelho",
                     "Verde",
                     "Roxo"
                  ]
               }
            ]
         };
    })
    .then(loadedQuestions => {   
        console.log(loadedQuestions.results); 
        questions = loadedQuestions.results.map(loadedQuestion => {
            const formattedQuestion = {
                question: loadedQuestion.question
            };

            const answerChoices = [...loadedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
            answerChoices.splice(
                formattedQuestion.answer - 1, 
                0, 
                loadedQuestion.correct_answer
            );

            answerChoices.forEach((choice, index) => {
                formattedQuestion["choice" + (index + 1)] = choice;
            })

            return formattedQuestion;
        }); 
        
        startGame();
    })
    .catch(err => { 
        console.error(err);
    });

/* constants */
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    game.classList.remove("hidden");
    loader.classList.add("hidden");
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem("mostRecentScore", score);
        
        return window.location.assign("./fimQuiz.html");
    }

    questionCounter++;
    progressText.innerHTML = `Pergunta ${questionCounter}/${MAX_QUESTIONS}`;
    
    //Atualizando a barra de progresso.
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;

};

choices.forEach(choice => {
    choice.addEventListener("click", e =>{
        if(!acceptingAnswers) return ;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectAnswer = selectedChoice.dataset["number"];

        const classToApply = selectAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        
        if(classToApply === "correct"){
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerHTML = score;
}