export function updateStats(deck, totalCards, learnedSet, deckTitle) {
    let remainingCards = deck.length + (deckTitle.textContent === "Cohesion" ? 6 : 0);
    let percentLearned = (learnedSet.size / totalCards) * 100;

    if (learnedSet.size === totalCards) {
        percentLearned = 100;
    }

    document.getElementById("cardsLeft").textContent = `Cards Left: ${remainingCards}`;
    document.getElementById("percentLearned").textContent = `Learned: ${Math.round(percentLearned)}%`;
}
