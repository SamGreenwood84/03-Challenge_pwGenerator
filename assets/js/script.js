// Assignment Code
var generateBtn = document.querySelector("#generate");

//Added Character variables for password creation
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~";

//Added function to generate the random password based on user choices for length and character inclusions
function generatePassword() {
    var passwordLength = parseInt(prompt("Enter desired length between 8 and 128 characters):"));
    if (isNaN(passwordLength) || passwordLength > 128) {
      alert("Please enter a valid password length between 8 and 128 characters.");
      return "";
    }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
