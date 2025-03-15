import { updateStats } from "./stats.js";
import { showCard } from "./ui.js";

export function setupEventHandlers(deck, flashcard, learnedSet, totalCards, deckTitle) {
    document.getElementById("remindMe").addEventListener("click", function () {
        let currentCard = deck.shift(); // Remove first card
        deck.push(currentCard); // Add it back to the end
        flashcard.classList.remove("flipped");
        showCard(deck, flashcard, updateStats, totalCards, learnedSet, deckTitle);
    });

    document.getElementById("gotIt").addEventListener("click", function () {
        let learnedCard = deck.shift();
        learnedSet.add(learnedCard.id);
        flashcard.classList.remove("flipped");
        showCard(deck, flashcard, updateStats, totalCards, learnedSet, deckTitle);
    });

    flashcard.addEventListener("click", function () {
        flashcard.classList.toggle("flipped");
    });
}
