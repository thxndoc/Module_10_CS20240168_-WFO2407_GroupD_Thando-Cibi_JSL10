const solveRoom1Btn = document.getElementById("solveRoom1")
const room1Result = document.getElementById("room1Result")
const solveRoom2Btn = document.getElementById("solveRoom2")
const room2Result = document.getElementById("room2Result")
const solveRoom3Btn = document.getElementById("solveRoom3")
const room3Result = document.getElementById("room3Result")

document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener ✔️
    solveRoom1Btn.addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID ✔️
                room1Result.textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    solveRoom2Btn.addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']);
        // 🪲 Bug: What's mssing from JS concepts? ✔️
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // 🪲 Bug: Incorrect function call ✔️
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        room2Result.textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🪲 Bug: Asynchronous function ? ✔️
    solveRoom3Btn.addEventListener("click", async () => {
        try {
            const response = await fetch('directions.json') 
            const directions = await response.json()
            const message = await navigateLabyrinth(directions)
            room3Result.innerHTML = message;
        } catch (error) {
            room3Result.innerHTML = `An error occurred while solving Room 3`;
        }
    });
});

function findMostRecentBook(books) {
    // 🪲 Bug: Logic error ✔️
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent);
}

function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic ✔️
    const intersection = new Set();

    for (const item of setA) {
        if (setB.has(item)) {
            intersection.add(item)
        }
    }
    return intersection;
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay ✔️
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

