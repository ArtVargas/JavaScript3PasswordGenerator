// Assignment Code
function generatePassword ()
{

  // Prompt user for password length
  // Password Length must be between 8 and 128 characters
  // Must include lowercase, uppercase. mumbers, special characters, symbols,
  // If critera isn't keep prompting user until they enter a valid password

    var passwordLength = parseInt(prompt("Password Length:"))
      console.log(passwordLength);
      if (passwordLength || passwordLength < 8 || passwordLength > 128) {
      alert("Sorry! This is an invalid length. Please, try again")
      return generatePassword ()
      }

  
}


var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
