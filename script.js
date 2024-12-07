
document.addEventListener("DOMContentLoaded", () => {
    const accueilPage = document.getElementById("page-accueil");
    const quetePage = document.getElementById("page-quete");
    const finalePage = document.getElementById("page-finale");

    const startButton = document.getElementById("start-button");
    const validateButton = document.getElementById("validate-button");
    const restartButton = document.getElementById("restart-button");
    const hintButton = document.getElementById("hint-button");
    const hintText = document.getElementById("hint-text");

    let currentQuestIndex = 0;

    const quests = [
        { question: "“La soirée, là où il fait tout noir et où vivent les siens, démarre.“", hint: "Cherchez les lutins basques.", answer: "Grottes de Sare" },
        { question: "Ils n’osent s’y gaver car la plus belle leur y fût offerte.", hint: "On y tourne tous en rond.", answer: "Le pont des Laminaks." },
        { question: "“A l’ouest ils aiment être, et pour une fois au Nord ils partirent”.", hint: "Plus d'un an normal.", answer: "366" },
        { question: "Quel métal précieux est symbolisé par Au ?", hint: "C'est jaune et très cher.", answer: "or" },
        { question: "Quel est le plus grand mammifère marin ?", hint: "Il vit dans les océans.", answer: "baleine" },
        { question: "Combien de couleurs sur un arc-en-ciel ?", hint: "Pensez aux sept nains.", answer: "7" },
        { question: "Quel oiseau est souvent associé à la paix ?", hint: "Il est blanc.", answer: "colombe" },
        { question: "Quelle planète est la plus proche du Soleil ?", hint: "C'est aussi un métal liquide.", answer: "mercure" },
        { question: "Quel est le carré de 12 ?", hint: "C'est plus que 100.", answer: "144" },
        { question: "Quel instrument a 88 touches ?", hint: "Il est souvent noir et blanc.", answer: "piano" },
        { question: "Quel animal est connu pour sa mémoire ?", hint: "C'est très grand.", answer: "éléphant" }
    ];

    function loadQuest(index) {
        const quest = quests[index];
        document.querySelector(".question").textContent = quest.question;
        document.querySelector("#hint-text").textContent = quest.hint;
        document.querySelector("#response").value = ""; // Clear input field
        hintText.classList.add("hidden"); // Hide the hint initially
    }

    startButton.addEventListener("click", () => {
        accueilPage.classList.remove("active");
        accueilPage.classList.add("hidden");
        quetePage.classList.remove("hidden");
        quetePage.classList.add("active");
        loadQuest(currentQuestIndex); // Load the first quest
    });

    validateButton.addEventListener("click", () => {
        const userResponse = document.querySelector("#response").value.trim().toLowerCase();
        if (userResponse === quests[currentQuestIndex].answer) {
            currentQuestIndex++;
            if (currentQuestIndex < quests.length) {
                loadQuest(currentQuestIndex);
            } else {
                quetePage.classList.remove("active");
                quetePage.classList.add("hidden");
                finalePage.classList.remove("hidden");
                finalePage.classList.add("active");
            }
        } else {
            alert("Mauvaise réponse, essayez encore !");
        }
    });

    hintButton.addEventListener("click", () => {
        hintText.classList.remove("hidden");
    });

    restartButton.addEventListener("click", () => {
        finalePage.classList.remove("active");
        finalePage.classList.add("hidden");
        accueilPage.classList.remove("hidden");
        accueilPage.classList.add("active");
        currentQuestIndex = 0; // Reset the quest index
    });

    // Set the initial page
    accueilPage.classList.add("active");

    document.addEventListener("DOMContentLoaded", () => {
        const music = document.getElementById("background-music");
        const toggleMusicButton = document.getElementById("toggle-music");
    
        toggleMusicButton.addEventListener("click", () => {
            if (music.paused) {
                music.play();
                toggleMusicButton.textContent = "Couper la musique";
            } else {
                music.pause();
                toggleMusicButton.textContent = "Reprendre la musique";
            }
        });
    });

});
