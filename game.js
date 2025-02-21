const prompt = require('prompt-sync')();
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let guessCorrectly = false;

console.log("Guess the number (between 1 to 100)");

while (!guessCorrectly) {
  let userGuess = parseInt(prompt("Enter your guess: "));
  
  // Increment the guess count
  guessCount++;

  if (userGuess === randomNumber) {
    guessCorrectly = true;
    console.log(`Correct! You guessed the number in ${guessCount} attempts.`);
  } else if (userGuess > randomNumber) {
    console.log("Too high! Try again.");
  } else if (userGuess < randomNumber) {
    console.log("Too low! Try again.");
  }
}

// Calculate the score
let score = Math.max(100 - guessCount, 0); // Ensure the score doesn't go negative
console.log(`Your score is: ${score}`);
