// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword ()
{

  // Prompt user for password length
  // Password Length must be between 8 and 128 characters
  // Must include lowercase, uppercase. mumbers, special characters, symbols,
  // If critera isn't keep prompting user until they enter a valid password

    var passwordLength = parseInt(prompt("Password Length:"))

      if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
      alert("Invalid. Password Length Must Be Between 8-128 Characters.")
      return generatePassword ()
      }

  


// Variables needed for user in password generation

// Does user want to include any of the following:
// Capital letters
// Lowercase letters
// Special characters such as "!@#$%"
// Numeric

  var capitalLetters = ['A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseLetters =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharacters= ['!', '@', '#','$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', ',', '<', '>', ',', '.', '?', '/' ];
  var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  // Confirmation for Variables

  var useCapital = confirm("Do you want to include capital letters? Yes or No:");
  var useLowercase = confirm("Do you want to include lowercase letters? Yes or No:");
  var usespecialCharacters= confirm("Do you want to include special characters? Yes or No:");
  var useNumeric= confirm("Do you want to include numeric numbers? Yes or no:");

  //Prompt Validation
  
  if (!useCapital || !useLowercase|| !usespecialCharacters || !useNumeric) {
    alert("Invalid! You must pick one type of character that is true")
    
  };

var possibleCharacters = []
if (useCapital) {
  possibleCharacters= possibleCharacters.concat(capitalLetters);
}

if (useLowercase) {
  possibleCharacters= possibleCharacters.concat(lowercaseLetters);
}

if (usespecialCharacters) {
  possibleCharacters= possibleCharacters.concat(specialCharacters);
}

if (useNumeric) {
  possibleCharacters= possibleCharacters.concat(numeric);
}

//Final Password Confirmation
var finalPassword= ""; 
for (var i =0; i <passwordLength; i++){
  var randomize = Math.floor(Math.random() * possibleCharacters.length);
  finalPassword = finalPassword + possibleCharacters[randomize];
}
return finalPassword; 
}








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
