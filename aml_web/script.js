// script.js
document.querySelector(".move-button").addEventListener("click", () => {
    const square = document.querySelector(".square");

    // Move the square to the top
    square.style.top = "10%"; // Adjust this value as needed
    square.style.transform = "rotate(45deg)";
});
