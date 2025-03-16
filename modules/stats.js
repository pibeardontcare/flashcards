
export function updateStats(deckLength, totalCards, learnedSet, deckTitle) {
    let percentLearned = (learnedSet.size / totalCards) * 100;
    if (learnedSet.size === totalCards) {
        percentLearned = 100;
    }

    document.getElementById("cardsLeft").textContent = `Cards Left: ${deckLength}`;
    document.getElementById("percentLearned").textContent = `Learned: ${Math.round(percentLearned)}%`;

    // Check if all cards are learned and trigger the final "Done" card
    if (learnedSet.size === totalCards) {
        showCard([], document.getElementById("flashcard"), updateStats, totalCards, learnedSet, deckTitle);
    }
}
