// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for password criteria
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numerics = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", ",", "*", "(", ")", ",", "-", "_", "=", "+", "-", ".", "/", "<", ">", "?","~"];

// Variables for prompts
var length ="";
var lowercase;
var uppercase;
var numbers;
var special;

// Password prompts
function generatePassword() {
   length = window.prompt ("How many characters would you like your password to contain?");
      if (length <= 7 || length >= 129) {
            alert ("Password length must be between 8-128 characters Try again");
               return window.prompt ("How many characters would you like your password to contain?");
                  } else alert (`Your password will have ${length} characters`);
   
   lowercase = window.confirm ("Would you like your password to include lowercase?");
      if (lowercase === false) {
            window.alert ("Your password will NOT include lowercase");
               } else alert ("Your password will include lowercase");

   uppercase = window.confirm ("Would you like your password to include uppercase?");
      if (uppercase === false) {
            window.alert ("Your password will NOT include uppercase");
               } else alert ("Your password will include uppercase");

   numbers = window.confirm ("Would you like your password to include numbers?");
      if (numbers === false) {
            window.alert ("Your password will NOT include numbers");
               } else alert ("Your password will include numbers"); 

   special = window.confirm ("Would you like your password to include special characters?");
      if (special === false) {
            window.alert ("Your password will NOT include special characters");
               } else alert ("Your password will include special characters");  

// Message if all prompts were cancelled
      if (lowercase === false && uppercase === false && numbers === false && special === false) {
         return window.alert ("You need to select at least one criteria");
         }    

// Applying password criteria (source from https://github.com/TiffanyCasey/Password-Generator/blob/master/script.js)
var passwordSet = [];
      if (lowercase === true) {
         passwordSet = passwordSet.concat(alphaLower);
               console.log (passwordSet)
               }

      if (uppercase === true) {
         passwordSet = passwordSet.concat(alphaUpper);
               console.log (passwordSet)
               }

      if (numbers === true) {
         passwordSet = passwordSet.concat(numerics);
               console.log (passwordSet)
               }

      if (special === true) {
         passwordSet = passwordSet.concat(specialChar);
               console.log (passwordSet)
               }
             
var newpassword = "";   
      for (var i = 0; i < length; i++) {
            newpassword = newpassword + passwordSet[Math.floor(Math.random() * passwordSet.length)];
               console.log(newpassword);
               }
         return newpassword;
}

// Write password to the #password input
function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
 
         passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


 