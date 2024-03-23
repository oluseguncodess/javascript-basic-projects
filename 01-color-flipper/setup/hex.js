
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Access the click me button
const clickMeBtn = document.querySelector("#btn");

// Access the hex color
let color = document.querySelector(".color");

//Create a random number generation function


function randomNumberGenerator() {
    return Math.floor(Math.random() * hex.length);
}

// console.log(randomNumberGenerator());

//Create an event listener for the click me btn 
clickMeBtn.addEventListener("click", function() {
    let hexCode = "#";

    for (let i = 0; i < 6; i++) {
        hexCode += hex[randomNumberGenerator()];
    }

    color.textContent = hexCode;
    document.body.style.backgroundColor = hexCode;
});