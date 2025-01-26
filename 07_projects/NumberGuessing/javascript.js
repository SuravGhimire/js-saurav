
const randomNumber = Math.floor(Math.random() * 100) + 1;   //// Generate a random number between 1 and 100

function checkGuess() {
    const Guess = document.getElementById('guess').value;
    const result = document.getElementById('result');

    if (Guess == randomNumber) {
        result.textContent = "Congratulations! You guessed right number";
        result.style.color = "green";
    } else if (Guess < randomNumber) {
        result.textContent = "Too low! Try again";
        result.style.color = "red";
    } else if (Guess > randomNumber) {
        result.textContent = "Too high! Try again";
        result.style.color = "red";
    } else {
        result.textContent = "Please enter a valid number";
        result.style.color = "orange";
    }
}
