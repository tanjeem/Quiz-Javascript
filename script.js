//quiz data base
const quizData=[
    {
        question: 'When shingara production was founded',
        a:'2016',
        b:'2015',
        c:'2018',
        d:'2020',
        correct:'c'
    },{
        question: 'whats the passing year of Tanzeem',
        a:'2016',
        b:'2015',
        c:'2018',
        d:'2021',
        correct:'d'

    }, {
        question: 'what is flexbox',
        a:'an ice cream',
        b:'a box where everyone flex',
        c:'a boy named flexbox',
        d:'a box model layout used in css',
        correct:'d'
    }
];
//quiz card
const quiz =document.getElementById("quiz");
//class 'answer' from input
const answersElement =document.querySelectorAll(".answer");
//id 'ques' from ques header
const quesElement=document.getElementById('question');

//calling lable id 
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById('submit');

let currentQuiz=0;
let answer=undefined;
let score=0;

loadQuiz();

function loadQuiz(){
    //deselecting radio buttons for next question
    deSelectedAnswers();
    //storing currentQuiz number in currentQuizData from quizData
    const currentQuizData=quizData[currentQuiz];

    //storing question header in quesElement using DOM
    quesElement.innerHTML=currentQuizData.question;

    //calling question answer from currentQuizData and storing in label id
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;

}
function getSelected(){
    let answer= undefined;
    //condition: if input is checked , answerElement will call the id that is selected and store it in answer
    answersElement.forEach((answersElement) => {
        if(answersElement.checked){
             answer= answersElement.id;
        }
    });
    return answer;
}

function deSelectedAnswers(){
    //loop: unchecking radio button for each question using loop
    answersElement.forEach((answersElement) => {
        answersElement.checked=false;
    });
}

submitBtn.addEventListener('click',()=>{
    //check to see the answer
    const answer = getSelected();
    if(answer){
        if(answer ===quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz< quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML=`<h2> ${score}/${quizData.length} questions</h2>`
        }
    }

});