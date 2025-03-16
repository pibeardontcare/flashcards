


// export function showCard(deck, flashcard, updateStats, totalCards, learnedSet, deckTitle) {
//     console.log(`🔄 Showing card. Deck size: ${deck.length}`);

//     if (deck.length === 0) {
//         console.log("🎉 No cards left, showing final message.");
//         flashcard.innerHTML = `
//             <div class="card-inner">
//                 <div class="front" style="background-color: #4CAF50; font-size: 22px;">
//                     🎉 You did it! 🎉
//                 </div>
//             </div>
//         `;
//         document.getElementById("remindMe").style.display = "none";
//         document.getElementById("gotIt").style.display = "none";
//         return;
//     }

//     let card = deck[0]; // Get the first card
//     flashcard.innerHTML = `
//         <div class="card-inner">
//             <div class="front" style="background-color: ${card.color};">${card.front}</div>
//             <div class="back" style="background-color: ${card.color};">${card.back}</div>
//         </div>
//     `;

//     // ✅ Ensure buttons are visible for every new card
//     document.getElementById("remindMe").style.display = "inline-block";
//     document.getElementById("gotIt").style.display = "inline-block";
//     console.log("✅ Buttons are visible after card update.");

//     updateStats(deck.length, totalCards, learnedSet);
// }


// export function showCard(deck, flashcard, updateStats, totalCards, learnedSet, deckTitle) {
//     console.log(`🔄 Showing card. Deck size: ${deck.length}`);

//     if (deck.length === 0) {
//         console.log("🎉 No cards left, showing final message.");
//         flashcard.innerHTML = `
//             <div class="card-inner">
//                 <div class="front" style="background-color: #4CAF50; font-size: 22px;">
//                     🎉 You did it! 🎉
//                 </div>
//             </div>
//         `;
//         document.getElementById("remindMe").style.display = "none";
//         document.getElementById("gotIt").style.display = "none";
//         return;
//     }

//     let card = deck[0]; // Get the first card
//     flashcard.innerHTML = `
//         <div class="card-inner">
//             <div class="front" style="background-color: ${card.color};">${card.front}</div>
//             <div class="back" style="background-color: ${card.color};">${card.back}</div>
//         </div>
//     `;

//     // ✅ Log when cards are flipped
//     let cardInner = flashcard.querySelector(".card-inner");
//     cardInner.addEventListener("click", function () {
//         cardInner.classList.toggle("flipped");
//         console.log("Card flipped. Flipped state:", cardInner.classList.contains("flipped"));
//     });

//     document.getElementById("remindMe").style.display = "inline-block";
//     document.getElementById("gotIt").style.display = "inline-block";
//     console.log("✅ Buttons are visible after card update.");

//     updateStats(deck.length, totalCards, learnedSet);
// }


// export function showCard(deck, flashcard, updateStats, totalCards, learnedSet, deckTitle) {
//     console.log(`🔄 Showing card. Deck size: ${deck.length}`);

//     if (deck.length === 0) {
//         console.log("🎉 No cards left, showing final message.");
//         flashcard.innerHTML = `
//             <div class="card-inner">
//                 <div class="front" style="background-color: #4CAF50; font-size: 22px;">
//                     🎉 You did it! 🎉
//                 </div>
//             </div>
//         `;
//         document.getElementById("remindMe").style.display = "none";
//         document.getElementById("gotIt").style.display = "none";
//         return;
//     }

//     let card = deck[0]; // Get the first card
//     flashcard.innerHTML = `
//         <div class="card-inner">
//             <div class="front" style="background-color: ${card.color};">${card.front}</div>
//             <div class="back" style="background-color: ${card.color};">${card.back}</div>
//         </div>
//     `;

//     // ✅ Ensure only ONE event listener is attached per card
//     let cardInner = flashcard.querySelector(".card-inner");
    
//     // Remove any existing click event listeners to prevent duplication
//     let newCardInner = cardInner.cloneNode(true);
//     cardInner.replaceWith(newCardInner);

//     newCardInner.addEventListener("click", function () {
//         newCardInner.classList.toggle("flipped");
//         console.log("Card clicked. Flipped state:", newCardInner.classList.contains("flipped"));
//     });

//     document.getElementById("remindMe").style.display = "inline-block";
//     document.getElementById("gotIt").style.display = "inline-block";
//     console.log("✅ Buttons are visible after card update.");

//     updateStats(deck.length, totalCards, learnedSet);
// }



// export function showCard(deck, flashcard, updateStats, totalCards, learnedSet, deckTitle) {
//     console.log(`🔄 Showing card. Deck size: ${deck.length}`);

//     if (deck.length === 0) {
//         console.log("🎉 No cards left, showing final message.");
//         flashcard.innerHTML = `
//             <div class="card-inner">
//                 <div class="front" style="background-color: #4CAF50; font-size: 22px;">
//                     🎉 You did it! 🎉
//                 </div>
//             </div>
//         `;
//         document.getElementById("remindMe").style.display = "none";
//         document.getElementById("gotIt").style.display = "none";
//         return;
//     }

//     let card = deck[0]; // Get the first card
//     flashcard.innerHTML = `
//         <div class="card-inner">
//             <div class="front" style="background-color: ${card.color};">${card.front}</div>
//             <div class="back" style="background-color: ${card.color};">${card.back}</div>
//         </div>
//     `;

//     // ✅ Debugging: Check event listeners before modifying
//     console.log("📌 Checking existing event listeners before modifying...");

//     let cardInner = flashcard.querySelector(".card-inner");

//     // Clone node to remove previous event listeners
//     let newCardInner = cardInner.cloneNode(true);
//     cardInner.replaceWith(newCardInner);
//     console.log("🗑️ Removed old event listeners by replacing the node.");

//     // ✅ Debugging: Verify new element state
//     console.log("✅ New element inserted. Adding event listener...");

//     newCardInner.addEventListener("click", function () {
//         newCardInner.classList.toggle("flipped");
//         console.log("🔄 Card clicked! Flipped state:", newCardInner.classList.contains("flipped"));
//     });

//     console.log("🎯 Event listener successfully added to new card.");

//     document.getElementById("remindMe").style.display = "inline-block";
//     document.getElementById("gotIt").style.display = "inline-block";
//     console.log("✅ Buttons are visible after card update.");

//     updateStats(deck.length, totalCards, learnedSet);
// }

// export function showCard(deck, flashcard, updateStats, totalCards, learnedSet, deckTitle) {
//     console.log(`🔄 Showing card. Deck size: ${deck.length}`);

//     if (deck.length === 0) {
//         console.log("🎉 No cards left, showing final message.");
//         flashcard.innerHTML = `
//             <div class="card-inner">
//                 <div class="front" style="background-color: #4CAF50; font-size: 22px;">
//                     🎉 You did it! 🎉
//                 </div>
//             </div>
//         `;
//         document.getElementById("remindMe").style.display = "none";
//         document.getElementById("gotIt").style.display = "none";
//         return;
//     }

//     let card = deck[0]; // Get the first card
//     flashcard.innerHTML = `
//         <div class="card-inner">
//             <div class="front" style="background-color: ${card.color};">${card.front}</div>
//             <div class="back" style="background-color: ${card.color};">${card.back}</div>
//         </div>
//     `;

//     let cardInner = flashcard.querySelector(".card-inner");

//     if (!cardInner) {
//         console.error("🚨 Error: .card-inner not found!");
//         return;
//     }

//     console.log("✅ Card inner exists, ensuring only one event listener is active...");

//     // 🛑 **Remove existing event listeners properly** before adding a new one
//     let newCardInner = cardInner.cloneNode(true);
//     cardInner.replaceWith(newCardInner);
//     cardInner = newCardInner; // Update reference

//     // ✅ Add click event listener **only once**
//     cardInner.onclick = function () {
//         cardInner.classList.toggle("flipped");
//         console.log("✅ Card clicked. Flipped state:", cardInner.classList.contains("flipped"));
//     };

//     console.log("✅ Event listener added successfully for this card.");

//     document.getElementById("remindMe").style.display = "inline-block";
//     document.getElementById("gotIt").style.display = "inline-block";
//     console.log("✅ Buttons are visible after card update.");

//     updateStats(deck.length, totalCards, learnedSet);
// }


let flipListener; // Store the event listener function
// export function showCard(deck, flashcard, updateStats, totalCards, learnedSet, deckTitle) {
//     console.log(`🔄 Showing card. Deck size: ${deck.length}`);

//     if (deck.length === 0) {
//         console.log("🎉 No cards left, showing final message.");
//         flashcard.innerHTML = `
//             <div class="card-inner">
//                 <div class="front" style="background-color: #4CAF50; font-size: 22px;">
//                     🎉 You did it! 🎉
//                 </div>
//             </div>
//         `;
//         document.getElementById("remindMe").style.display = "none";
//         document.getElementById("gotIt").style.display = "none";
//         return;
//     }

//     let card = deck[0]; // Get the first card
//     flashcard.innerHTML = `
//         <div class="card-inner">
//             <div class="front" style="background-color: ${card.color};">${card.front}</div>
//             <div class="back" style="background-color: ${card.color};">${card.back}</div>
//         </div>
//     `;

//     let cardInner = flashcard.querySelector(".card-inner");

//     if (!cardInner) {
//         console.error("🚨 Error: .card-inner not found!");
//         return;
//     }

//     console.log("✅ Card inner exists, ensuring only one event listener is active...");

//     // ❌ Remove all event listeners first to avoid stacking
//     let newCardInner = cardInner.cloneNode(true);
//     cardInner.replaceWith(newCardInner);

//     // ✅ Attach a one-time listener (fires once and removes itself)
//     newCardInner.addEventListener(
//         "click",
//         function () {
//             console.log("🛠 Flashcard Clicked!");
//             newCardInner.classList.toggle("flipped");
//             console.log("✅ Card flipped. Flipped state:", newCardInner.classList.contains("flipped"));
//         },
//         { once: true } // ✅ Ensures the event fires only ONCE per card
//     );

//     console.log("✅ Event listener added with { once: true }");

//     document.getElementById("remindMe").style.display = "inline-block";
//     document.getElementById("gotIt").style.display = "inline-block";
//     console.log("✅ Buttons are visible after card update.");

//     updateStats(deck.length, totalCards, learnedSet);
// }


export function showCard(deck, flashcard, updateStats, totalCards, learnedSet, deckTitle) {
    console.log(`🔄 Showing card. Deck size: ${deck.length}`);

    if (deck.length === 0) {
        console.log("🎉 No cards left, showing final message.");
        flashcard.innerHTML = `
            <div class="card-inner">
                <div class="front" style="background-color: #4CAF50; font-size: 22px;">
                    🎉 You did it! 🎉
                </div>
            </div>
        `;
        document.getElementById("remindMe").style.display = "none";
        document.getElementById("gotIt").style.display = "none";
        return;
    }

    let card = deck[0]; // Get the first card
    flashcard.innerHTML = `
        <div class="card-inner">
            <div class="front" style="background-color: ${card.color};">${card.front}</div>
            <div class="back" style="background-color: ${card.color};">${card.back}</div>
        </div>
    `;

    let cardInner = flashcard.querySelector(".card-inner");
    if (!cardInner) {
        console.error("🚨 Error: .card-inner not found!");
        return;
    }

    console.log("✅ Card inner exists, attaching event listener...");

    // ❌ Remove old event listeners (fixes double flips)
    let newCardInner = cardInner.cloneNode(true);
    cardInner.replaceWith(newCardInner);

    // ✅ Attach a fresh click event listener
    let finalCardInner = flashcard.querySelector(".card-inner");
    finalCardInner.addEventListener("click", function () {
        finalCardInner.classList.toggle("flipped");
        console.log("✅ Card clicked. Flipped state:", finalCardInner.classList.contains("flipped"));
    });

    // Ensure buttons are visible
    document.getElementById("remindMe").style.display = "inline-block";
    document.getElementById("gotIt").style.display = "inline-block";

    console.log("✅ Buttons are visible after card update.");

    updateStats(deck.length, totalCards, learnedSet);
}
