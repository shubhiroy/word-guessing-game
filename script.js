let secretWord = getRandomWord();
console.log("Secret word:", secretWord); // For debugging

const board = document.getElementById("board");
const input = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const hint = document.getElementById("hint");

function updateHint() {
  hint.textContent = `Guess the ${secretWord.length}-letter word!`;
  input.placeholder = `Enter ${secretWord.length} letters`;
}

function createRow(word = "") {
  const row = document.createElement("div");
  row.classList.add("row");

  for (let i = 0; i < secretWord.length; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    if (word) box.textContent = word[i] ? word[i].toUpperCase() : "";
    row.appendChild(box);
  }
  return row;
}

function handleGuess() {
  const guess = input.value.trim().toLowerCase();
  
  // Input validation
  if (!guess) {
    alert("Please enter a word!");
    return;
  }
  
  if (guess.length !== secretWord.length) {
    alert(`Please enter a ${secretWord.length}-letter word!`);
    return;
  }
  
  // Check if word contains only letters
  if (!/^[a-zA-Z]+$/.test(guess)) {
    alert("Please enter only letters!");
    return;
  }

  // Remove any existing empty row
  const emptyRow = board.querySelector('.row:not([data-filled])');
  if (emptyRow) {
    emptyRow.remove();
  }

  // Create and add the guess row
  const row = createRow(guess);
  row.setAttribute('data-filled', 'true');
  board.appendChild(row);

  // color boxes
  [...row.children].forEach((box, i) => {
    const letter = guess[i];
    if (letter === secretWord[i]) {
      box.classList.add("correct");
    } else if (secretWord.includes(letter)) {
      box.classList.add("present");
    } else {
      box.classList.add("absent");
    }
  });

  // correct guess animation
  if (guess === secretWord) {
    row.classList.add("correct-row");
    setTimeout(() => {
      alert("🎉 You guessed it!");
    }, 500);
  } else {
    // Add new empty row at the bottom for next guess
    const newEmptyRow = createRow();
    board.appendChild(newEmptyRow);
  }

  input.value = "";
}

// Reset game
resetBtn.addEventListener("click", () => {
  resetBtn.classList.add("animate");
  setTimeout(() => resetBtn.classList.remove("animate"), 400);

  board.innerHTML = "";
  secretWord = getRandomWord();
  console.log("New secret word:", secretWord); // Debugging
  updateHint();
  
  // Add initial empty row at the bottom
  const initialRow = createRow();
  board.appendChild(initialRow);
  
  input.value = "";
});

// Event listeners
checkBtn.addEventListener("click", handleGuess);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleGuess();
});

// Start game
updateHint();
// Add initial empty row at the bottom
const initialRow = createRow();
board.appendChild(initialRow);
