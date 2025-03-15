import { cohesionDeck, couplingDeck } from "./modules/decks.js";
console.log("Cohesion Deck:", cohesionDeck);
console.log("Coupling Deck:", couplingDeck);


import { shuffleDeck } from "./modules/shuffle.js";
import { updateStats } from "./modules/stats.js";
import { showCard } from "./modules/ui.js";
import { setupEventHandlers } from "./modules/handlers.js";

document.addEventListener("DOMContentLoaded", function () {
    const flashcard = document.getElementById("flashcard");
    const deckTitle = document.getElementById("deckTitle");
    let deck, totalCards, learnedSet = new Set();

    function initializeGame() {
        totalCards = cohesionDeck.length + couplingDeck.length;
        learnedSet.clear();
        document.getElementById("percentLearned").textContent = "Learned: 0%";

        shuffleDeck(cohesionDeck);
        shuffleDeck(couplingDeck);

        loadDeck("Cohesion", cohesionDeck);
    }

    function loadDeck(name, selectedDeck) {
        deck = [...selectedDeck];
        shuffleDeck(deck);
        deckTitle.textContent = name;

        document.getElementById("startOver").style.display = "none";
        document.getElementById("nextDeck").style.display = "none";
        document.getElementById("remindMe").style.display = "inline-block";
        document.getElementById("gotIt").style.display = "inline-block";

        showCard(deck, flashcard, updateStats, totalCards, learnedSet, deckTitle);
        setupEventHandlers(deck, flashcard, learnedSet, totalCards, deckTitle);
    }

    document.getElementById("nextDeck").addEventListener("click", function () {
        loadDeck("Coupling", couplingDeck);
    });

    document.getElementById("startOver").addEventListener("click", function () {
        initializeGame();
    });

    initializeGame();
});
