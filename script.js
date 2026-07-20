// مصفوفة الحروف العربية لتوليد الكيبورد العشوائي المساعد
const ARABIC_LETTERS = "أبتثجحخدذرزسشصضطظعغفقكلمنهويءىة";

// الحالة الافتراضية للعبة في حال لم تكن محفوظة مسبقًا
let gameState = {
    currentLevelIndex: 0,
    coins: 100,
    xp: 0,
    hearts: 5,
    lastHeartRegen: Date.now(),
    soundEnabled: true,
    musicEnabled: false,
    theme: "light",
    completedLevels: [],
    unlockedAchievements: []
};

// تعريف الإنجازات المتوفرة في اللعبة
const ACHIEVEMENTS = [
    { id: "first_win", title: "البداية الأسطورية", desc: "أجب عن أول مرحلة لك بشكل صحيح.", target: 1, type: "levels" },
    { id: "otaku_level_10", title: "أوتاكو مبتدئ", desc: "أكمل 10 مراحل بنجاح.", target: 10, type: "levels" },
    { id: "otaku_level_50", title: "خبير الأنمي", desc: "أكمل 50 مرحلة بنجاح.", target: 50, type: "levels" },
    { id: "otaku_master", title: "ملك الأوتاكو الأكبر", desc: "أكمل جميع الـ 100 مرحلة كاملة.", target: 100, type: "levels" },
    { id: "rich_player", title: "جامع الكنوز", desc: "اجمع 300 عملة رقمية 🪙", target: 300, type: "coins" }
];

// المتغيرات التشغيلية للمرحلة الحالية
let currentAnswerArray = [];
let selectedKeyElements = [];

// استدعاء عناصر الواجهة البرمجية عند تحميل المستند
document.addEventListener("DOMContentLoaded", () => {
    loadGameData();
    initApp();
    setupEventListeners();
    updateUIElements();
    checkHeartRegen();
    
    // إخفاء شاشة الـ Splash بعد 2.5 ثانية تلقائيًا والانتقال للشاشة الرئيسية
    setTimeout(() => {
        switchScreen("main-menu-screen");
        document.getElementById("global-top-bar").classList.remove("hidden");
    }, 2500);

    // فحص دوري لتجديد القلوب تلقائيًا كل دقيقة
    setInterval(checkHeartRegen, 60000);
});

// تحميل البيانات من LocalStorage
function loadGameData() {
    const savedData = localStorage.getItem("anime_words_save_data");
    if (savedData) {
        try {
            gameState = { ...gameState, ...JSON.parse(savedData) };
        } catch (e) {
            console.error("خطأ في قراءة ملف الحفظ التلقائي", e);
        }
    }
}

// حفظ البيانات في LocalStorage
function saveGameData() {
    localStorage.setItem("anime_words_save_data", JSON.stringify(gameState));
}

// تهيئة التطبيق الأساسية والوضع الليلي
function initApp() {
    if (gameState.theme === "dark") {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    }
    
    document.getElementById("setting-sound").checked = gameState.soundEnabled;
    document.getElementById("setting-music").checked = gameState.musicEnabled;
}

// ربط أحداث الضغط لجميع الأزرار والشاشات
function setupEventListeners() {
    // التنقل العام بين الشاشات باستخدام أزرار العودة الـ Back
    document.querySelectorAll(".back-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            playSound("click");
            switchScreen(btn.getAttribute("data-target"));
        });
    });

    // أزرار القائمة الرئيسية
    document.getElementById("btn-play").addEventListener("click", () => {
        playSound("click");
        launchGameAtLevel(gameState.currentLevelIndex);
    });

    document.getElementById("btn-levels").addEventListener("click", () => {
        playSound("click");
        renderLevelsGrid();
        switchScreen("levels-screen");
    });

    document.getElementById("btn-achievements").addEventListener("click", () => {
        playSound("click");
        renderAchievements();
        switchScreen("achievements-screen");
    });

    document.getElementById("btn-settings").addEventListener("click", () => {
        playSound("click");
        switchScreen("settings-screen");
    });

    document.getElementById("theme-toggle-btn").addEventListener("click", () => {
        playSound("click");
        if (document.body.classList.contains("light-theme")) {
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
            gameState.theme = "dark";
        } else {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
            gameState.theme = "light";
        }
        saveGameData();
    });

    // أزرار آليات اللعبة والمساعدات
    document.getElementById("btn-delete").addEventListener("click", () => {
        playSound("click");
        clearLastSlot();
    });

    document.getElementById("btn-hint").addEventListener("click", () => {
        triggerHint();
    });

    document.getElementById("btn-skip").addEventListener("click", () => {
        triggerSkip();
    });

    // الأزرار التفاعلية للنوافذ المنبثقة للنتائج
    document.getElementById("btn-next-level").addEventListener("click", () => {
        playSound("click");
        document.getElementById("result-overlay").classList.add("hidden");
        launchGameAtLevel(gameState.currentLevelIndex);
    });

    document.getElementById("btn-refill-hearts").addEventListener("click", () => {
        if (gameState.coins >= 30) {
            gameState.coins -= 30;
            gameState.hearts = 5;
            gameState.lastHeartRegen = Date.now();
            saveGameData();
            updateUIElements();
            playSound("win");
            document.getElementById("result-overlay").classList.add("hidden");
        } else {
            alert("ليس لديك عملات كافية لشراء قلوب! 🪙");
        }
    });

    document.getElementById("btn-fail-back").addEventListener("click", () => {
        playSound("click");
        document.getElementById("result-overlay").classList.add("hidden");
        switchScreen("main-menu-screen");
    });

    // تبديل إعدادات الصوت من شاشة الإعدادات
    document.getElementById("setting-sound").addEventListener("change", (e) => {
        gameState.soundEnabled = e.target.checked;
        saveGameData();
    });

    document.getElementById("setting-music").addEventListener("change", (e) => {
        gameState.musicEnabled = e.target.checked;
        saveGameData();
    });

    // مسح كافة البيانات وإعادة تصفير اللعبة بالكامل
    document.getElementById("btn-reset-data").addEventListener("click", () => {
        if (confirm("هل أنت متأكد تمامًا من رغبتك في مسح كافة تقدمك وإنجازاتك؟ لا يمكن التراجع عن هذا الإجراء.")) {
            localStorage.removeItem("anime_words_save_data");
            window.location.reload();
        }
    });
}

// التنقل المرن بين الشاشات
function switchScreen(screenId) {
    document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
    document.getElementById(screenId).classList.remove("hidden");
}

// تحديث عدادات الحالة العلوية والملف الشخصي
function updateUIElements() {
    document.getElementById("hearts-count").innerText = gameState.hearts;
    document.getElementById("coins-count").innerText = gameState.coins;
    document.getElementById("xp-count").innerText = `${gameState.xp} XP`;

    // حساب المستوى الحالي بناءً على الـ XP (كل 100 XP تساوي مستوى)
    let computedLevel = Math.floor(gameState.xp / 100) + 1;
    document.getElementById("player-level-title").innerText = `المستوى الحالي: ${computedLevel}`;
    
    let xpInCurrentLevel = gameState.xp % 100;
    document.getElementById("xp-bar-fill").style.width = `${xpInCurrentLevel}%`;
}

// آلية توليد وعرض شبكة المراحل المتاحة والمغلقة
function renderLevelsGrid() {
    const container = document.getElementById("levels-grid-container");
    container.innerHTML = "";

    ANIME_LEVELS.forEach((level, index) => {
        const node = document.createElement("div");
        node.classList.add("level-node");

        if (index < gameState.currentLevelIndex) {
            node.classList.add("completed");
            node.innerText = level.id;
        } else if (index === gameState.currentLevelIndex) {
            node.classList.add("current");
            node.innerText = level.id;
        } else {
            node.classList.add("locked");
            node.innerText = "🔒";
        }

        node.addEventListener("click", () => {
            if (!node.classList.contains("locked")) {
                playSound("click");
                launchGameAtLevel(index);
            }
        });

        container.appendChild(node);
    });
}

// بدء تشغيل اللعبة وتجهيز مرحلة معينة
function launchGameAtLevel(index) {
    if (index >= ANIME_LEVELS.length) {
        alert("تهانينا الحارة! لقد أنهيت جميع المراحل المتاحة في اللعبة بنجاح! انتظر تحديثاتنا القادمة.");
        switchScreen("main-menu-screen");
        return;
    }

    if (gameState.hearts <= 0) {
        showGameOverOverlay();
        return;
    }

    const currentLevelData = ANIME_LEVELS[index];
    currentAnswerArray = new Array(currentLevelData.answer.length).fill("");
    selectedKeyElements = new Array(currentLevelData.answer.length).fill(null);

    // تحديث بيانات السؤال والأنمي والشاشات
    document.getElementById("current-level-num").innerText = currentLevelData.id;
    document.getElementById("anime-category-tag").innerText = currentLevelData.anime;
    document.getElementById("question-text").innerText = currentLevelData.question;
    
    // ربط الصور الافتراضية
    document.getElementById("question-image").src = currentLevelData.image;

    // بناء المربعات الفارغة للإجابة
    const slotsContainer = document.getElementById("answer-slots");
    slotsContainer.innerHTML = "";
    for (let i = 0; i < currentLevelData.answer.length; i++) {
        const slot = document.createElement("div");
        slot.classList.add("slot");
        slot.setAttribute("data-index", i);
        slot.addEventListener("click", () => removeSlotChar(i));
        slotsContainer.appendChild(slot);
    }

    // بناء الكيبورد العشوائي للمرحلة (الإجابة الحقيقية + أحرف مكملة لتصل إلى 14 حرفًا)
    buildKeyboard(currentLevelData.answer);
    switchScreen("game-screen");
}

// توليد أحرف عشوائية للكيبورد وخلطها
function buildKeyboard(correctAnswer) {
    const keyboardContainer = document.getElementById("keyboard-container");
    keyboardContainer.innerHTML = "";

    let lettersPool = correctAnswer.split("");
    while (lettersPool.length < 14) {
        let randChar = ARABIC_LETTERS[Math.floor(Math.random() * ARABIC_LETTERS.length)];
        if (!lettersPool.includes(randChar)) {
            lettersPool.push(randChar);
        }
    }

    // خوارزمية Fisher-Yates لخلط مصفوفة الحروف بشكل حقيقي
    for (let i = lettersPool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lettersPool[i], lettersPool[j]] = [lettersPool[j], lettersPool[i]];
    }

    // إنشاء الأزرار داخل الواجهة
    lettersPool.forEach((char) => {
        const btn = document.createElement("button");
        btn.classList.add("key-btn");
        btn.innerText = char;
        btn.addEventListener("click", () => handleKeyClick(char, btn));
        keyboardContainer.appendChild(btn);
    });
}

// التعامل مع الضغط على حرف من الحروف المعروضة
function handleKeyClick(char, btnElement) {
    // العثور على أول مربع فارغ متاح
    let firstEmptyIndex = currentAnswerArray.indexOf("");
    if (firstEmptyIndex !== -1) {
        playSound("click");
        currentAnswerArray[firstEmptyIndex] = char;
        selectedKeyElements[firstEmptyIndex] = btnElement;
        
        // تحديث المربع في الواجهة وعمل أنيميشن خفيف
        const targetSlot = document.querySelector(`.slot[data-index='${firstEmptyIndex}']`);
        targetSlot.innerText = char;
        targetSlot.classList.add("filled");
        btnElement.classList.add("hidden-key");

        // التحقق من اكتمال الكلمة بالكامل فورا
        if (!currentAnswerArray.includes("")) {
            checkPlayerAnswer();
        }
    }
}

// حذف الحرف الأخير الذي تم إدخاله بواسطة زر مسح
function clearLastSlot() {
    for (let i = currentAnswerArray.length - 1; i >= 0; i--) {
        if (currentAnswerArray[i] !== "") {
            removeSlotChar(i);
            break;
        }
    }
}

// إزالة حرف من مربع محدد وإعادته إلى الكيبورد
function removeSlotChar(index) {
    if (currentAnswerArray[index] !== "") {
        const char = currentAnswerArray[index];
        const linkedBtn = selectedKeyElements[index];
        
        currentAnswerArray[index] = "";
        selectedKeyElements[index] = null;

        const targetSlot = document.querySelector(`.slot[data-index='${index}']`);
        targetSlot.innerText = "";
        targetSlot.classList.remove("filled");

        if (linkedBtn) {
            linkedBtn.classList.remove("hidden-key");
        }
        playSound("click");
    }
}

// التحقق من صحة الإجابة ومقارنتها بالحل الصحيح للمرحلة
function checkPlayerAnswer() {
    const currentLevelData = ANIME_LEVELS[gameState.currentLevelIndex];
    const fullSubmittedAnswer = currentAnswerArray.join("");

    if (fullSubmittedAnswer === currentLevelData.answer) {
        // إجابة صحيحة
        gameState.coins += 10;
        gameState.xp += 20;
        
        if (!gameState.completedLevels.includes(currentLevelData.id)) {
            gameState.completedLevels.push(currentLevelData.id);
        }
        
        gameState.currentLevelIndex += 1;
        checkAchievementsProgress();
        saveGameData();
        updateUIElements();
        
        // عرض شاشة الفوز المودال والتأثير الصوتي
        playSound("success");
        document.getElementById("success-card").classList.remove("hidden");
        document.getElementById("fail-card").classList.add("hidden");
        document.getElementById("result-overlay").classList.remove("hidden");
    } else {
        // إجابة خاطئة - خصم قلب واحد
        gameState.hearts -= 1;
        if (gameState.hearts < 0) gameState.hearts = 0;
        saveGameData();
        updateUIElements();
        playSound("fail");

        // هز مربعات الإجابة للإشارة بالخطأ
        document.getElementById("answer-slots").style.animation = "shake 0.4s ease";
        setTimeout(() => {
            document.getElementById("answer-slots").style.animation = "";
        }, 400);

        if (gameState.hearts <= 0) {
            showGameOverOverlay();
        }
    }
}

// تفعيل نظام التلميحات المساعد (كشف حرف صحيح واحد)
function triggerHint() {
    if (gameState.coins >= 20) {
        const currentLevelData = ANIME_LEVELS[gameState.currentLevelIndex];
        let emptyIndex = currentAnswerArray.indexOf("");
        
        if (emptyIndex !== -1) {
            gameState.coins -= 20;
            saveGameData();
            updateUIElements();

            const correctChar = currentLevelData.answer[emptyIndex];
            
            // البحث عن هذا الحرف في الكيبورد ومحاكاة الضغط عليه في الخانة الصحيحة
            const keys = document.querySelectorAll(".key-btn");
            for (let key of keys) {
                if (key.innerText === correctChar && !key.classList.contains("hidden-key")) {
                    handleKeyClick(correctChar, key);
                    break;
                }
            }
        }
    } else {
        alert("ليس لديك ما يكفي من العملات لتفعيل التلميح! 🪙");
    }
}

// تفعيل ميزة التخطي للمرحلة الحالية بالكامل مقابل عملات
function triggerSkip() {
    if (gameState.coins >= 50) {
        gameState.coins -= 50;
        const currentLevelData = ANIME_LEVELS[gameState.currentLevelIndex];
        
        if (!gameState.completedLevels.includes(currentLevelData.id)) {
            gameState.completedLevels.push(currentLevelData.id);
        }
        
        gameState.currentLevelIndex += 1;
        checkAchievementsProgress();
        saveGameData();
        updateUIElements();
        playSound("win");
        
        launchGameAtLevel(gameState.currentLevelIndex);
    } else {
        alert("ليس لديك ما يكفي من العملات لتخطي هذه المرحلة! 🪙");
    }
}

// عرض شاشة انتهاء المحاولات والقلوب
function showGameOverOverlay() {
    document.getElementById("success-card").classList.add("hidden");
    document.getElementById("fail-card").classList.remove("hidden");
    document.getElementById("result-overlay").classList.remove("hidden");
}

// معالجة تجديد القلوب تلقائيًا بمرور الوقت المكتسب (قلب كل 15 دقيقة كأقصى تقدير)
function checkHeartRegen() {
    if (gameState.hearts < 5) {
        const now = Date.now();
        const diffMs = now - gameState.lastHeartRegen;
        const regenInterval = 15 * 60 * 1000; // 15 دقيقة بالملي ثانية

        if (diffMs >= regenInterval) {
            let heartsToAdd = Math.floor(diffMs / regenInterval);
            gameState.hearts = Math.min(5, gameState.hearts + heartsToAdd);
            gameState.lastHeartRegen = now - (diffMs % regenInterval);
            saveGameData();
            updateUIElements();
        }
    } else {
        gameState.lastHeartRegen = Date.now();
    }
}

// تتبع وإدارة الإنجازات وفتحها ديناميكيًا
function checkAchievementsProgress() {
    ACHIEVEMENTS.forEach(ach => {
        if (!gameState.unlockedAchievements.includes(ach.id)) {
            let isUnlocked = false;
            if (ach.type === "levels" && gameState.completedLevels.length >= ach.target) {
                isUnlocked = true;
            } else if (ach.type === "coins" && gameState.coins >= ach.target) {
                isUnlocked = true;
            }

            if (isUnlocked) {
                gameState.unlockedAchievements.push(ach.id);
                // مكافأة فتح إنجاز خاص
                gameState.coins += 30;
                alert(`🏆 تم فتح إنجاز أسطوري جديد: "${ach.title}" المطور! (+30 عملة)`);
            }
        }
    });
}

// عرض قائمة الإنجازات في شاشتها الخاصة
function renderAchievements() {
    const container = document.getElementById("achievements-container");
    container.innerHTML = "";

    ACHIEVEMENTS.forEach(ach => {
        const isUnlocked = gameState.unlockedAchievements.includes(ach.id);
        const card = document.createElement("div");
        card.classList.add("achievement-card");
        if (!isUnlocked) card.classList.add("locked");

        card.innerHTML = `
            <div class="ach-icon">${isUnlocked ? "🏆" : "🔒"}</div>
            <div class="ach-details">
                <h3>${ach.title}</h3>
                <p>${ach.desc}</p>
            </div>
            <div class="ach-status">${isUnlocked ? "✅" : "❌"}</div>
        `;
        container.appendChild(card);
    });
}

// تشغيل الأصوات المخزنة
function playSound(soundId) {
    if (gameState.soundEnabled) {
        const audio = document.getElementById(`audio-${soundId}`);
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(e => console.log("الصوت بانتظار تفاعل المستخدم الأساسي."));
        }
    }
}
