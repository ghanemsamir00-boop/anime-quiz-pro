let currentCategory = "";
let currentQuestion = 0;
let score = 0;
let lives = 3;
let timer = 20;
let interval;

function startQuiz(category) {
    currentCategory = category;
    currentQuestion = 0;
    score = 0;
    lives = 3;

    document.querySelector(".menu").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    loadQuestion();
}

function loadQuestion() {

    clearInterval(interval);

    const q = questions[currentCategory][currentQuestion];

    if (!q) {
        finishGame();
        return;
    }

    document.getElementById("question").innerHTML = q.question;

    document.getElementById("score").innerHTML = score;
    document.getElementById("lives").innerHTML = lives;

    let answers = "";

    q.answers.forEach((answer, index) => {

        answers += `
        <button class="answer"
        onclick="checkAnswer(${index})">
        ${answer}
        </button>
        `;

    });

    document.getElementById("answers").innerHTML = answers;

    timer = 20;

    document.getElementById("timer").innerHTML = timer;

    document.getElementById("progressBar").style.width =
    ((currentQuestion+1)/questions[currentCategory].length*100)+"%";

    interval = setInterval(updateTimer,1000);

}

function updateTimer(){

    timer--;

    document.getElementById("timer").innerHTML = timer;

    if(timer<=0){

        lives--;

        clearInterval(interval);

        if(lives<=0){

            finishGame();

        }else{

            currentQuestion++;

            loadQuestion();

        }

    }

}

function checkAnswer(index){

    clearInterval(interval);

    const q = questions[currentCategory][currentQuestion];

    const buttons=document.querySelectorAll(".answer");

    if(index===q.correct){

        buttons[index].classList.add("correct");

        score+=10;

    }else{

        buttons[index].classList.add("wrong");

        buttons[q.correct].classList.add("correct");

        lives--;

    }

    document.getElementById("score").innerHTML=score;
    document.getElementById("lives").innerHTML=lives;

    setTimeout(()=>{

        if(lives<=0){

            finishGame();

        }else{

            currentQuestion++;

            loadQuestion();

        }

    },1200);

}

function finishGame(){

    alert("انتهى الاختبار 🎉\n\nالنقاط : "+score);

    location.reload();

}
