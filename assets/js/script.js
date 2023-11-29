// Assignment Code
var generateBtn = document.querySelector("#generate");

//Added Character variables for password creation
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~";

//Added function to generate the random password based on user choices
function generatePassword() {
  var passwordLength = parseInt(prompt("Enter desired length between 8 and 128 characters):"));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }
  // Added prompts for character types
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

    // Added validation at least one character type is selected
    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
      alert("Please select at least one character type.");
      return "";
    }
 // Concatenate selected character sets
var allChars = "";
if (includeLowercase) allChars += lowercaseChars;
if (includeUppercase) allChars += uppercaseChars;
if (includeNumeric) allChars += numericChars;
if (includeSpecial) allChars += specialChars;

//Generate Password
var password = "";
for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * allChars.length);
  password += allChars.charAt(randomIndex);
}

return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
