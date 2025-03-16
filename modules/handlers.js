import { updateStats } from "./stats.js";
import { showCard } from "./ui.js";




export function setupEventHandlers(deck, flashcard, learnedSet, totalCards, deckTitle) {

    console.log("Setting up event handlers...");
console.log("Current deck:", deck);
console.log("Current learnedSet:", learnedSet);
console.log("Total Cards:", totalCards);
console.log("Deck Title:", deckTitle.textContent);

    
    flashcard.addEventListener("click", function () {
        console.log("Flashcard clicked!"); 
        flashcard.classList.toggle("flipped");
        console.log("Flipped class added:", flashcard.classList.contains("flipped"));
    });

    document.getElementById("gotIt").addEventListener("click", function () {
        console.log("Got It! clicked");

        if (deck.length > 0) {
            let learnedCard = deck.shift();
            learnedSet.add(learnedCard.id);
            console.log("Card moved to learned set:", learnedCard);
        }

        if (deck.length === 0 && learnedSet.size === totalCards) {
            console.log("All cards learned! Showing final message.");
            showDoneMessage(flashcard, deckTitle);
        } else {
            console.log("Showing next card...");
            showCard(deck, flashcard, updateStats, totalCards, learnedSet, deckTitle);
        }
    });

    document.getElementById("remindMe").addEventListener("click", function () {
        console.log("Remind Me clicked");

        if (deck.length > 0) {
            let currentCard = deck.shift();
            deck.push(currentCard);
            console.log("Moved card back to deck:", currentCard);
        }

        showCard(deck, flashcard, updateStats, totalCards, learnedSet, deckTitle);
    });
}