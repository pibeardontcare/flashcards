export const cohesionDeck = [
    { id: 1, front: "Module performs one well-defined task 🛠️", back: "Functional (Good)", color: "#B71C1C" },
    { id: 2, front: "Module elements handle the same input/output data 📥", back: "Communicational (Good)", color: "#FF6F00" },
    { id: 3, front: "Output of one function is the input of another function 🤝", back: "Sequential (Acceptable)", color: "#F9A825" },
    { id: 4, front: "Groups together tasks that need to be handled in a specific order 🪜", back: "Procedural (Acceptable)", color: "#388E3C" },
    { id: 5, front: "Groups together similar operations that don’t depend on each other 🧠", back: "Logical (Weak)", color: "#455A64" },
    { id: 6, front: "Groups together things that happen at the same time ⏳", back: "Temporal (Weak)", color: "#1565C0" },
    { id: 7, front: "Just random and not good 💀", back: "Coincidental (Bad)", color: "#4527A0" }
];

export const couplingDeck = [
    { id: 8, front: "Modules share a common data area 🏠", back: "Common Environment Coupling (Bad)", color: "#D32F2F" },
    { id: 9, front: "One module is entirely contained inside another 📦", back: "Content Coupling (Very Bad)", color: "#FFA000" },
    { id: 10, front: "One module controls another via flags ⚙️", back: "Control Coupling (Weak)", color: "#FBC02D" },
    { id: 11, front: "Modules only share data without controlling execution 🔄", back: "Data Coupling (Good)", color: "#388E3C" },
    { id: 12, front: "Different modules use the same data in different ways 🔀", back: "Hybrid Coupling (Acceptable)", color: "#1976D2" },
    { id: 13, front: "One module can completely alter another’s behavior ❌", back: "Pathological Coupling (Very Bad)", color: "#512DA8" }
];

export const tddDeck = [
    { id: 14, front: "What is Test-Driven Development (TDD)?", back: "TDD is a software development approach where tests are written before writing code.", color: "#E57373" },
    { id: 15, front: "What are the three laws of TDD?", back: "1️⃣ No production code except to pass a failing test.\n2️⃣ Write only enough of a test to fail.\n3️⃣ Write only enough production code to make the failing test pass.", color: "#FFB74D" },
    { id: 16, front: "What is the main benefit of TDD?", back: "Ensures code is well-tested, reduces debugging time, and improves design.", color: "#FFD54F" },
    { id: 17, front: "What does a unit test verify?", back: "It verifies that a small, isolated part of a program behaves as expected.", color: "#AED581" },
    { id: 18, front: "What tool is commonly used for TDD in Python?", back: "The unittest module.", color: "#90A4AE" }
];

export const unitTestingDeck = [
    { id: 19, front: "What is unittest in Python?", back: "unittest is Python’s built-in testing framework.", color: "#E57373" },
    { id: 20, front: "What are assertions in unittest?", back: "Assertions check expected outcomes (assertEqual, assertTrue, assertRaises).", color: "#FFB74D" },
    { id: 21, front: "Steps to write a unit test in Python?", back: "1️⃣ Import unittest\n2️⃣ Create a test class\n3️⃣ Write test methods\n4️⃣ Use assertions\n5️⃣ Run using unittest.main()", color: "#FFD54F" }
];

export const cppTestingDeck = [
    { id: 22, front: "What is cppunit?", back: "cppunit is a C++ unit testing framework.", color: "#E57373" },
    { id: 23, front: "What is a physics engine?", back: "Software that simulates physical interactions in a virtual environment.", color: "#FFB74D" },
    { id: 24, front: "Why test a physics engine?", back: "To verify accuracy of physics simulations.", color: "#AED581" },
    { id: 25, front: "Common tests for a physics engine?", back: "Collision detection, conservation of momentum, gravity consistency, boundary conditions.", color: "#64B5F6" }
];

export const jsWebApiTestingDeck = [
    { id: 26, front: "What is Mocha?", back: "A JavaScript test framework for Node.js and browsers.", color: "#E57373" },
    { id: 27, front: "What is Chai?", back: "An assertion library for JavaScript.", color: "#FFB74D" },
    { id: 28, front: "What is a RESTful Web API?", back: "An API following REST architecture using HTTP methods.", color: "#FFD54F" },
    { id: 29, front: "Tests for a Web API?", back: "1️⃣ Endpoint availability\n2️⃣ HTTP status codes\n3️⃣ Data response structure\n4️⃣ Authentication\n5️⃣ Edge case handling.", color: "#AED581" }
];

export const secureProgrammingDeck = [
    { id: 30, front: "What is an assertion in programming?", back: "A statement that checks if a condition is true.", color: "#E57373" },
    { id: 31, front: "How do assertions differ from control flow?", back: "Assertions are for debugging; control flow directs program execution.", color: "#FFB74D" },
    { id: 32, front: "When should assertions be enabled/disabled?", back: "Enabled during development/testing; disabled in production.", color: "#FFD54F" },
    { id: 33, front: "What is secure programming?", back: "Writing code that prevents vulnerabilities (SQL injection, XSS, buffer overflows).", color: "#AED581" },
    { id: 34, front: "What is parameter checking?", back: "Validating input values to prevent unexpected errors and security risks.", color: "#64B5F6" }
];
