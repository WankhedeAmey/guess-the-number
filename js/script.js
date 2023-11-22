"use strict";

// random number
let number = Math.floor(Math.random() * 20) + 1;
console.log(number);

//score tracking
let score = 20;

//highscore
let highScore = 0;

// reset on Again
document.querySelector("#again-btn").addEventListener("click", function () {
    event.preventDefault();
    document.querySelector("#container").style.backgroundColor = "#222";
    document.querySelector("#info-text").textContent = "Start Guessing...";

    score = 20;
    document.querySelector("#score").textContent = `${score}`;
    document.querySelector("#number").textContent = "?";
    document.querySelector("#guessed-number").value = 0;
    number = Math.floor(Math.random() * 20) + 1
    console.log(number);
});

//game logic
document.querySelector("#check-btn").addEventListener("click", function () {
    event.preventDefault();
    const guess = Number(document.querySelector("#guessed-number").value);
    console.log(guess);
    // when guess is correct
    if (!guess) {
        document.querySelector("#info-text").textContent = "⛔️ No Number!";
    } else if (guess) {
        // if guess is correct
        if (guess === number) {
            document.querySelector("#info-text").textContent =
                "🎉 Correct Number !";
            document.querySelector("#number").textContent = guess;
            document.querySelector("#score").textContent = `${score}`;
            highScore = Math.max(score, highScore);
            document.querySelector("#high-score").textContent =
                String(highScore);
            document.querySelector("#container").style.backgroundColor =
                "#60b347";
        } else if (guess !== number) {
            // if guess is lower
            if (guess < number) {
                document.querySelector("#info-text").textContent =
                    "📉 Number too low.";
            }
            // if guess is greater
            else if (guess > number) {
                document.querySelector("#info-text").textContent =
                    "📈 Number too high.";
            }
            // set the score
            if (score >= 1) {
                score--;
                document.querySelector("#score").textContent = String(score);
            } else if (score === 0) {
                document.querySelector("#info-text").textContent =
                    "🚨 Game Over !. Restart to try again!";
                document.querySelector("#container").style.backgroundColor =
                    "#FF0000";
            }
        }
    }
});
