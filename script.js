
document.addEventListener("DOMContentLoaded", () => {
    const accueilPage = document.getElementById("page-accueil");
    const quetePage = document.getElementById("page-quete");
    const finalePage = document.getElementById("page-finale");

    const startButton = document.getElementById("start-button");
    const validateButton = document.getElementById("validate-button");
    const restartButton = document.getElementById("restart-button");
    const hintButton = document.getElementById("hint-button");
    const hintText = document.getElementById("hint-text");

    startButton.addEventListener("click", () => {
        accueilPage.classList.remove("active");
        accueilPage.classList.add("hidden");
        quetePage.classList.remove("hidden");
        quetePage.classList.add("active");
    });

    validateButton.addEventListener("click", () => {
        const response = document.getElementById("response").value.trim().toLowerCase();
        if (response === "nain") { // Replace "nain" with your correct answer
            quetePage.classList.remove("active");
            quetePage.classList.add("hidden");
            finalePage.classList.remove("hidden");
            finalePage.classList.add("active");
        } else {
            alert("Mauvaise réponse, réessayez !");
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
    });

    // Set initial state
    accueilPage.classList.add("active");
});
