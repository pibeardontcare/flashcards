document.addEventListener("DOMContentLoaded", function () {
    const flashcard = document.getElementById("flashcard");
    const remindMeBtn = document.getElementById("remindMe");
    const gotItBtn = document.getElementById("gotIt");
    const startOverBtn = document.getElementById("startOver");
    const nextDeckBtn = document.getElementById("nextDeck");
    const cardsLeftDisplay = document.getElementById("cardsLeft");
    const percentLearnedDisplay = document.getElementById("percentLearned");
    const deckTitle = document.getElementById("deckTitle");

    let cohesionDeck = [
        { id: 1, front: "Module performs one well-defined task 🛠️", back: "Functional", color: "#B71C1C" },
        { id: 2, front: "Module elements handle the same input/output data 📥", back: "Communicational", color: "#FF6F00" },
        { id: 3, front: "Output of one function is the input of another function 🤝", back: "Sequential", color: "#F9A825" },
        { id: 4, front: "Groups together tasks that need to be handled in a specific order 🪜", back: "Procedural", color: "#388E3C" },
        { id: 5, front: "Groups together similar operations that don’t depend on each other 🧠", back: "Logical", color: "#455A64" },
        { id: 6, front: "Groups together things that happen at the same time ⏳", back: "Temporal", color: "#1565C0" },
        { id: 7, front: "Just random and not good 💀", back: "Coincidental", color: "#4527A0" }
    ];

    let couplingDeck = [
        { id: 8, front: "Modules share a common data area 🏠", back: "Common Environment Coupling", color: "#D32F2F" },
        { id: 9, front: "One module is entirely contained inside another 📦", back: "Content Coupling", color: "#FFA000" },
        { id: 10, front: "One module controls another via flags ⚙️", back: "Control Coupling", color: "#FBC02D" },
        { id: 11, front: "Modules only share data without controlling execution 🔄", back: "Data Coupling", color: "#388E3C" },
        { id: 12, front: "Different modules use the same data in different ways 🔀", back: "Hybrid Coupling", color: "#1976D2" },
        { id: 13, front: "One module can completely alter another’s behavior ❌", back: "Pathological Coupling", color: "#512DA8" }
    ];

    let deck, donePile, currentCardIndex, totalCards;
    let learnedSet = new Set(); 

    function initializeGame() {
        totalCards = cohesionDeck.length + couplingDeck.length; 
        learnedSet.clear(); 
        loadDeck("Cohesion", cohesionDeck);
    }

    function loadDeck(name, selectedDeck) {
        deck = [...selectedDeck];
        donePile = [];
        currentCardIndex = 0;
        deckTitle.textContent = name;

        startOverBtn.style.display = "none";
        nextDeckBtn.style.display = "none";
        remindMeBtn.style.display = "inline-block";
        gotItBtn.style.display = "inline-block";

        showCard();
    }

    function updateStats() {
        let remainingCards = deck.length + (couplingDeck.includes(deck[0]) ? cohesionDeck.length : 0);
        let percentLearned = (learnedSet.size - 1 / totalCards) * 100; 

        cardsLeftDisplay.textContent = `Cards Left: ${remainingCards}`;
        percentLearnedDisplay.textContent = `Learned: ${Math.round(percentLearned)}%`;
    }

    function showCard() {
        if (deck.length === 0) {
            flashcard.innerHTML = `<div class="back">✅ ${deckTitle.textContent} Complete!</div>`;
            remindMeBtn.style.display = "none";
            gotItBtn.style.display = "none";

            if (deckTitle.textContent === "Cohesion") {
                nextDeckBtn.style.display = "inline-block";
            } else {
                startOverBtn.style.display = "inline-block";
            }
            return;
        }

        let card = deck[currentCardIndex];
        flashcard.innerHTML = `
            <div class="card-inner">
                <div class="front" style="background-color: ${card.color};">${card.front}</div>
                <div class="back" style="background-color: ${card.color};">${card.back}</div>
            </div>
        `;
        updateStats();
    }


    flashcard.addEventListener("click", function () {
        flashcard.classList.toggle("flipped");
    });

    remindMeBtn.addEventListener("click", function () {
        let currentCard = deck.splice(currentCardIndex, 1)[0];
        deck.push(currentCard); 
        flashcard.classList.remove("flipped");
        showCard();
    });

    gotItBtn.addEventListener("click", function () {
        let learnedCard = deck.splice(currentCardIndex, 1)[0];
        donePile.push(learnedCard);
        learnedSet.add(learnedCard.id); 
        flashcard.classList.remove("flipped");
        showCard();
    });

    nextDeckBtn.addEventListener("click", function () {
        loadDeck("Coupling", couplingDeck);
    });

    startOverBtn.addEventListener("click", function () {
        initializeGame();
    });

    initializeGame();
});
