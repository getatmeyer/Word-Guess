// Word List
var selectWords = [
    "bodychecking",
    "knucklebones",
    "crackerjacks",
    "bedazzlement",
    "extravaganza",
    "tranquilizer",
    "shadowboxing",
];
const maxError= 12; // The number of tries user get to guess

   // 
var guessedLetter = []; // Stores the letters the user guess
var currentWordIndex;
var guessedWord = [];  // the word that matches Word
var remainingGuesses = 0; //How many tries the user has left
var gameStarted = false;
var hasFinished = false;
var wins = 0

// -- GAME START FUNCTION -- \\ 
function resetGame () {
    remainingGuesses = maxTries;
    gameStarted = false;
    
    //Math.floor formula
    currentWordIndex = Math.floor(Math.random() * (selectWords.length));
    console.log(currentWordIndex.selectWords = "TEST");

    guessedLetter = [];
    guessedWord = [];

    for (var i = 0; i < selectWords[currentWordIndex].length; i++) {
        guessedWord.push("_");
        console.log(selectWords.currentWordIndex = "WERID");
        
    }

}

