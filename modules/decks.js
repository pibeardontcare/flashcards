export const cohesionDeck = [
    { id: 1, front: "Module performs one well-defined task 🛠️", back: "Functional", color: "#B71C1C" },
    { id: 2, front: "Module elements handle the same input/output data 📥", back: "Communicational", color: "#FF6F00" },
    { id: 3, front: "Output of one function is the input of another function 🤝", back: "Sequential", color: "#F9A825" },
    { id: 4, front: "Groups together tasks that need to be handled in a specific order 🪜", back: "Procedural", color: "#388E3C" },
    { id: 5, front: "Groups together similar operations that don’t depend on each other 🧠", back: "Logical", color: "#455A64" },
    { id: 6, front: "Groups together things that happen at the same time ⏳", back: "Temporal", color: "#1565C0" },
    { id: 7, front: "Just random and not good 💀", back: "Coincidental", color: "#4527A0" }
];

export const couplingDeck = [
    { id: 8, front: "Modules share a common data area 🏠", back: "Common Environment Coupling", color: "#D32F2F" },
    { id: 9, front: "One module is entirely contained inside another 📦", back: "Content Coupling", color: "#FFA000" },
    { id: 10, front: "One module controls another via flags ⚙️", back: "Control Coupling", color: "#FBC02D" },
    { id: 11, front: "Modules only share data without controlling execution 🔄", back: "Data Coupling", color: "#388E3C" },
    { id: 12, front: "Different modules use the same data in different ways 🔀", back: "Hybrid Coupling", color: "#1976D2" },
    { id: 13, front: "One module can completely alter another’s behavior ❌", back: "Pathological Coupling", color: "#512DA8" }
];
