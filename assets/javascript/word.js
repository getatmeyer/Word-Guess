// Word List
var selectWords = [
    "bodychecking",
    "knucklebones",
    "crackerjacks",
    "bedazzlement",
    "extravaganza",
    "tranquilizer",
    "shadowboxing",
    "chickenboxes",
    "complexifies",
    "steeplejacks",
];

var losses= 0; // The number of tries user get to guess
var guessedLetter = []; // Stores the letters the user guess
var currentWordIndex;  // Index of the current word in the array
var guessedWord = [];  // the word that matches selectWord
var remainingGuesses = 0; //How many tries the user has left
var gameStarted = false;  // FLag to indict if the game has started
var hasFinished = false;  // Flag for press any key to try again
var wins = 0              // How many wins the user racks up

//Target a selector above the list
var userText = document.getElementById("blank"); 
var lossesText = document.getElementById("losses");
var directionsText = document.getElementsByClassName("directions-text");

/////////////////////////////////////////////////////////////////


// -- GAME START FUNCTION -- \\ 
function resetGame () {

    remainingGuesses =[];
    // gameStarted = false;
    
    //Math.floor formula
    currentWordIndex = Math.floor(Math.random() * (selectWords.length));

    remainingGuesses = 12;

    // clear out array
    guessedLetter = [];
    guessedWord = [];


    for (var i = 0; i < selectWords[currentWordIndex].length; i++) {
        console.log(selectWords[currentWordIndex]);

        guessedWord.push("_");
    }
    }resetGame();

    ///////////////////////////////////////////////

    // -- RENDER SCORE -- \
    var renderScore = function () {

        currentWordIndex = Math.floor(Math.random() * (selectWords.length));
        console.log(selectWords.length);

        // if the user guess right letter
        if (guessedLetter === currentWordIndex) {
            console.log(guessedLetter + "win condition!");

            // NEW
            for (var i = 0; i < selectWords.length; i++)
            guessedWord[i] = ("_");

        
            alert("You're lucky!");
            wins++;

            resetGame();
        
        }
        // if the user doesn't get right letter
        else if (guessedLetter != currentWordIndex) {
            console.log(guessedLetter + "you get wrong letter");

            remainingGuesses -= 1;

            if (remainingGuesses === 0) {
                alert("Try again");

                losses++;
                resetGame();
            }
           
            function displayGuessesLetter () { // function to display letterGuessed}
            document.getElementById("letterGuess").innerHTML = "Guessed Letter : " + guessedLetter;
            }displayGuessesLetter();

            function displayWins () { // function to display wins}
            document.getElementById("totalWins").innerHTML = "Wins : " + wins;
            }displayWins();

            function displaylosses () { //function to display loss in HTML
                document.getElementById("losses").innerHTML = "Losses : " + losses;
                }displaylosses();

            function displayRemaininguess () { //function to display loss in HTML
                document.getElementById("remainingGuesses").innerHTML = "Remaining Guesses : " + remainingGuesses;
                }displayRemaininguess();

        }
    }
    //////////////////////////////////////

    // --  OnKeyUP FUNCTION -- \
    document.onkeyup = function(event) {
        
        userGuess = event.key
        console.log(userGuess);
        
        userText.innerHTML = event.key.toLowerCase();
        
         // Hide the directions
         directionsText.innerHTML = "";
         renderScore();

         
         
      }
      

    
