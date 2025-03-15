export function showCard(deck, flashcard, updateStats, totalCards, learnedSet, deckTitle) {
    if (deck.length === 0) {
        flashcard.innerHTML = `<div class="back">✅ ${deckTitle.textContent} Complete!</div>`;
        document.getElementById("remindMe").style.display = "none";
        document.getElementById("gotIt").style.display = "none";

        if (deckTitle.textContent === "Cohesion") {
            document.getElementById("nextDeck").style.display = "inline-block";
        } else {
            document.getElementById("startOver").style.display = "inline-block";
        }
        return;
    }

    let card = deck[0];
    flashcard.innerHTML = `
        <div class="card-inner">
            <div class="front" style="background-color: ${card.color};">${card.front}</div>
            <div class="back" style="background-color: ${card.color};">${card.back}</div>
        </div>
    `;

    updateStats(deck, totalCards, learnedSet, deckTitle);
}
