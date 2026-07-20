let currentLevel = 0;
let coins = Number(localStorage.getItem("coins")) || 100;

function startGame() {
    document.getElementById("home").style.display = "none";
    document.getElementById("game").style.display = "block";
    loadLevel();
}

function loadLevel() {

    if (currentLevel >= levels.length) {
        alert("🎉 مبروك! لقد أنهيت جميع المراحل.");
        return;
    }

    const level = levels[currentLevel];

    document.getElementById("coins").textContent = coins;
    document.getElementById("level").textContent = "المرحلة " + (currentLevel + 1);
    document.getElementById("question").textContent = level.question;
    document.getElementById("image").src = level.image;

    const word = document.getElementById("word");
    word.innerHTML = "";

    for (let i = 0; i < level.answer.length; i++) {
        const box = document.createElement("span");
        box.className = "box";
        box.dataset.index = i;
        word.appendChild(box);
    }

    const letters = document.getElementById("letters");
    letters.innerHTML = "";

    level.letters.forEach(letter => {

        const btn = document.createElement("div");

        btn.className = "letter";
        btn.textContent = letter;

        btn.onclick = function () {
            addLetter(btn);
        };

        letters.appendChild(btn);

    });

}

function addLetter(btn) {

    const boxes = document.querySelectorAll(".box");

    for (let box of boxes) {

        if (box.textContent === "") {

            box.textContent = btn.textContent;

            btn.style.visibility = "hidden";

            break;

        }

    }

    checkAnswer();

}

function checkAnswer() {

    const boxes = document.querySelectorAll(".box");

    let answer = "";

    boxes.forEach(box => answer += box.textContent);

    if (answer.length !== levels[currentLevel].answer.length)
        return;

    if (answer === levels[currentLevel].answer) {

        coins += 10;

        localStorage.setItem("coins", coins);

        setTimeout(() => {

            alert("✅ إجابة صحيحة");

            currentLevel++;

            loadLevel();

        }, 300);

    } else {

        setTimeout(() => {

            alert("❌ إجابة خاطئة");

            loadLevel();

        }, 300);

    }

}

function hint() {

    if (coins < 20) {

        alert("ليس لديك عملات كافية");

        return;

    }

    coins -= 20;

    localStorage.setItem("coins", coins);

    alert("💡 التلميح: أول حرف هو " + levels[currentLevel].answer[0]);

    document.getElementById("coins").textContent = coins;

}
