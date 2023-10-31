//Assignment code here//
// Below, we are referring to the id #generate in the html. Then, we are giving that id, once clicked, to hear the "click" to write password.
document.querySelector("#generate").addEventListener("click", writePassword);

//These are 4 arrays that contain sets of characters. They contain lower case letters, upper case letters, numbers, and special characters that we are able to use.REFERENCED JAVASCRIPT ACTIVITIES.
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var specialChar = ["!", "$", "@", "#", "$", "%", "^", "=", "+", "-",]


// This is part of the prompt that the user will have to participate in.This function wil be called on later.
function generatePassword() {
  // Line 15 delcares a variable named confirmLength and assigns it the result of a prompt dialog telling user to choose a legnth between 8 and 128.
  var confirmLength = (prompt("Choose a legnth between 8 and 128 characters"));

  // This loop will keep looping as long as the string in the parenthesis is true.//
  while (confirmLength <= 8 || confirmLength >= 128) {
    alert("Passwords length is incorrect");
    // This will keep looping until user enters the correct number that the prompt is asking for.
    var confirmLength = (prompt("How many characters will your password have?"));
  }
  //This will let the user know that they have correctly entered answer to prompt.
  alert('This password will have 8 < 128 characters!');

  //asking users to confirm that they want to include lowercase, uppercase, special characters and numerical. If user clicks ok then it means this is true.
 var confirmLowerCase = confirm("Select Ok to include lower case characters");
  var confirmUpperCase = confirm("Select Ok to include Upper case characters");
  var confirmSpecialCharacter = confirm("Select Ok to include special characters");
  var confirmNumericCharacter = confirm("Select Ok to include numerical characters");

  // While is a loop that will loop if the insie of the parenthesis is true. if not then there will be an alert to try to choose at least one condition again.LOOKED BACK AT LECTURES AND ACTIVITIES FOR THIS SECTION.
  while (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("choose at least one");

    var confirmUpperCase = confirm("Click Ok to confirm if you would like to include uppercase characters");
    var confirmLowerCase = confirm("Click Ok to confirm if you would like to include lowercase characters");
    var confirmSpecialCharacter = confirm("Click Ok to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click Ok to confirm if you would like to include numeric characters");
  }
  // Line 42 is initializing an empty array that will be used to store our characters.
  var passwordCharacters = []
// special characters are being concatenated with password characters. So special characters will be involed in generating a password. Same for the next 3 if statements.REFERENCED ACTIVITIES FOR CONCAT.
  if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  }

  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(numbers)
  }

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCaseLetters)
  }
  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(upperCaseLetters)
  }
  // This will console log what is inside the passwordcharacters that will be used to create user's random passwords.
  console.log(passwordCharacters)
// This is and empty string so tht it can generate a random password.
  var randomPassword = ""


  // FOUND MATH.FLOOR(MATH.RANDOM() ON STACK OVERFLOW
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    // I can consolelog this to check the state of my randomPassword on inspect.
    console.log(randomPassword)
  }
  // This action allows me to receive my randomPassword or it will return undefined.note to self: RETURN IS VERY IMPORTANT.
  return randomPassword;
}

// This bottom part was already completed for us
// write password to the password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
