   var guesses = 0;
   var message = "Guess The Letter From a to z";
   var letters = [
               "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
               "p","q","r","s","t","u","v","w","x","y","z"
               ];
   var letterToGuess = "";
   var higherOrLower = "";
   var lettersGuessed;
   var gameOver = false;

   var letterIndex = Math.floor(Math.random() * letters.length);
   letterToGuess = letters[letterIndex];