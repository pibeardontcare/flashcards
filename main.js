

// import { 
//     cohesionDeck, 
//     couplingDeck, 
//     tddDeck, 
//     unitTestingDeck, 
//     cppTestingDeck, 
//     jsWebApiTestingDeck, 
//     secureProgrammingDeck 
// } from "./modules/decks.js";

// import { shuffleDeck } from "./modules/shuffle.js";
// import { updateStats } from "./modules/stats.js";
// import { showCard } from "./modules/ui.js";
// import { setupEventHandlers } from "./modules/handlers.js";
// //import { loadQuizQuestion, revealAnswer, nextQuizQuestion } from "./modules/quiz.js";

// let deck = [];
// let totalCards = 0;
// let learnedSet = new Set();
// const flashcard = document.getElementById("flashcard");
// const deckTitle = document.getElementById("deckTitle");

// // 📌 Map Dropdown Options to Decks
// const decks = {
//     "cohesion": { name: "Module Cohesion", deck: cohesionDeck },
//     "coupling": { name: "Module Coupling", deck: couplingDeck },
//     "tdd": { name: "Test-Driven Development (TDD)", deck: tddDeck },
//     "unitTesting": { name: "Unit Testing in Python", deck: unitTestingDeck },
//     "cppTesting": { name: "C++ and Physics Engine Testing", deck: cppTestingDeck },
//     "jsWebApiTesting": { name: "JavaScript and Web API Testing", deck: jsWebApiTestingDeck },
//     "secureProgramming": { name: "Assertions and Secure Programming", deck: secureProgrammingDeck }
// };


// function loadDeck(name, selectedDeck) {
//     console.log(`🔄 Loading deck: ${name}`);

//     if (!selectedDeck || selectedDeck.length === 0) {
//         console.error(`🚨 Error: ${name} deck is empty!`);
//         return;
//     }

//     deck = [...selectedDeck];  
//     shuffleDeck(deck);
//     deckTitle.textContent = name;
//     learnedSet.clear();  
//     totalCards = deck.length;

//     // ✅ Ensure buttons are visible when a new deck is loaded
//     document.getElementById("remindMe").style.display = "inline-block";
//     document.getElementById("gotIt").style.display = "inline-block";
//     console.log(`✅ Buttons restored for new deck: ${name}`);

//     console.log(`📌 Deck switched to: ${name}, Total cards: ${deck.length}`);

//     showCard(deck, flashcard, updateStats, totalCards, learnedSet, deckTitle);
//     setupEventHandlers(deck, flashcard, learnedSet, totalCards, deckTitle);
// }




// // 🔄 Load New Deck When Selected
// document.getElementById("deckSelector").addEventListener("change", function () {
//     const selectedDeck = this.value;
//     if (decks[selectedDeck]) {
//         loadDeck(decks[selectedDeck].name, decks[selectedDeck].deck);
//     } else {
//         console.error(`Deck "${selectedDeck}" not found.`);
//     }
// });

// // 🔄 Switch to Flashcard Mode
// function switchToFlashcardMode() {
//     console.log("Switching to Flashcard Mode...");

//     document.getElementById("flashcardContainer").style.display = "block";
//     document.getElementById("quizContainer").style.display = "none";

//     if (deck.length > 0) {
//         showCard(deck, flashcard, updateStats, totalCards, learnedSet, deckTitle);
//     } else {
//         console.warn("Deck is empty, reloading Cohesion Deck...");
//         initializeGame();
//     }
// }

// // ✍️ Switch to Quiz Mode
// function switchToQuizMode() {
//     console.log("Switching to Quiz Mode...");

//     document.getElementById("flashcardContainer").style.display = "none";
//     document.getElementById("quizContainer").style.display = "block";

//     loadQuizQuestion(); // Load the first quiz question
// }

// // 🟢 Initializes the Flashcard Game
// function initializeGame() {
//     console.log("Initializing game...");

//     totalCards = cohesionDeck.length + couplingDeck.length; // Total number of flashcards
//     learnedSet.clear(); // Reset learned cards

//     document.getElementById("percentLearned").textContent = "Learned: 0%";

//     // Default to Cohesion Deck
//     deck = [...cohesionDeck];
//     shuffleDeck(deck);

//     showCard(deck, flashcard, updateStats, totalCards, learnedSet, deckTitle);
//     setupEventHandlers(deck, flashcard, learnedSet, totalCards, deckTitle);
// }

// // 🟢 Run When Page Loads
// document.addEventListener("DOMContentLoaded", function () {
//     console.log("DOMContentLoaded event fired. Ensuring all elements exist...");

//     // Wait for the element before using it
//     const percentLearnedElement = document.getElementById("percentLearned");
//     if (!percentLearnedElement) {
//         console.error("Error: Element 'percentLearned' not found!");
//         return; // Exit script to prevent crashing
//     }

//     initializeGame(); // ✅ Now it's safe to call initializeGame()

//     // // Attach Mode Switching Event Listeners
//      document.getElementById("flashcardMode").addEventListener("click", switchToFlashcardMode);
//     // document.getElementById("quizMode").addEventListener("click", switchToQuizMode);

//     // // Attach Quiz Button Listeners
//     // document.getElementById("revealAnswer").addEventListener("click", revealAnswer);
//     // document.getElementById("nextQuiz").addEventListener("click", nextQuizQuestion);
// });


import { 
    cohesionDeck, 
    couplingDeck, 
    tddDeck, 
    unitTestingDeck, 
    cppTestingDeck, 
    jsWebApiTestingDeck, 
    secureProgrammingDeck 
} from "./modules/decks.js";

import { shuffleDeck } from "./modules/shuffle.js";
import { updateStats } from "./modules/stats.js";
import { showCard } from "./modules/ui.js";
import { setupEventHandlers } from "./modules/handlers.js";

let deck = [];
let totalCards = 0;
let learnedSet = new Set();
const flashcard = document.getElementById("flashcard");
const deckTitle = document.getElementById("deckTitle");

const decks = {
    "cohesion": { name: "Module Cohesion", deck: cohesionDeck },
    "coupling": { name: "Module Coupling", deck: couplingDeck },
    "tdd": { name: "Test-Driven Development (TDD)", deck: tddDeck },
    "unitTesting": { name: "Unit Testing in Python", deck: unitTestingDeck },
    "cppTesting": { name: "C++ and Physics Engine Testing", deck: cppTestingDeck },
    "jsWebApiTesting": { name: "JavaScript and Web API Testing", deck: jsWebApiTestingDeck },
    "secureProgramming": { name: "Assertions and Secure Programming", deck: secureProgrammingDeck }
};

/**
 * 🔄 Load Selected Deck
//  */
// function loadDeck(name, selectedDeck) {
//     console.log(`🔄 Loading deck: ${name}`);

//     if (!selectedDeck || selectedDeck.length === 0) {
//         console.error(`🚨 Error: ${name} deck is empty!`);
//         return;
//     }

//     deck = [...selectedDeck];  
//     shuffleDeck(deck);
//     deckTitle.textContent = name;
//     learnedSet.clear();
//     totalCards = deck.length;

//     // ✅ Ensure buttons are visible when a new deck is loaded
//     document.getElementById("remindMe").style.display = "inline-block";
//     document.getElementById("gotIt").style.display = "inline-block";

//     console.log(`✅ Deck switched to: ${name}, Total cards: ${deck.length}`);

//     showCard(deck, flashcard, updateStats, totalCards, learnedSet, deckTitle);
//     setupEventHandlers(deck, flashcard, learnedSet, totalCards, deckTitle);
// }

function loadDeck(name, selectedDeck) {
    console.log(`🔄 Loading deck: ${name}`);

    if (!selectedDeck || selectedDeck.length === 0) {
        console.error(`🚨 Error: ${name} deck is empty!`);
        return;
    }

    deck = [...selectedDeck];  // ✅ Assign new deck
    shuffleDeck(deck);
    deckTitle.textContent = name;
    learnedSet.clear();
    totalCards = deck.length;

    // ✅ Ensure buttons are visible when a new deck is loaded
    document.getElementById("remindMe").style.display = "inline-block";
    document.getElementById("gotIt").style.display = "inline-block";

    console.log(`📌 Deck switched to: ${name}, Total cards: ${deck.length}`);

    // 🔥 `showCard()` is called here to update the UI
    showCard(deck, flashcard, updateStats, totalCards, learnedSet, deckTitle);
    setupEventHandlers(deck, flashcard, learnedSet, totalCards, deckTitle);
}


/**
 * 🚀 Toggle Deck Selection Buttons
 */
document.querySelectorAll(".deck-toggle").forEach(button => {
    button.addEventListener("click", function () {
        // Remove active state from all buttons
        document.querySelectorAll(".deck-toggle").forEach(btn => btn.classList.remove("active"));
        
        // Add active state to clicked button
        this.classList.add("active");

        // Load selected deck
        const selectedDeck = this.dataset.deck;
        if (decks[selectedDeck]) {
            loadDeck(decks[selectedDeck].name, decks[selectedDeck].deck);
        } else {
            console.error(`Deck "${selectedDeck}" not found.`);
        }
    });
});

/**
 * 🟢 Initializes the Flashcard Game
 */
function initializeGame() {
    console.log("Initializing game...");

    totalCards = cohesionDeck.length + couplingDeck.length; 
    learnedSet.clear(); 

    document.getElementById("percentLearned").textContent = "Learned: 0%";

    // Default to Cohesion Deck
    deck = [...cohesionDeck];
    shuffleDeck(deck);

    showCard(deck, flashcard, updateStats, totalCards, learnedSet, deckTitle);
    setupEventHandlers(deck, flashcard, learnedSet, totalCards, deckTitle);
}

/**
 * 🟢 Run When Page Loads
 */
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired. Ensuring all elements exist...");

    if (!document.getElementById("percentLearned")) {
        console.error("Error: Element 'percentLearned' not found!");
        return;
    }

    initializeGame();
});
