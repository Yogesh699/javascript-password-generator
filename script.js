// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {  
  console.log("generate password") 
  
  let length=parseInt(prompt("provide password link between 8 and 128"));
  if(isNaN(length)){
    return("length must be a number, please retry");
  }

  if(length < 8 || length > 128){
    return("length must be between 8 and 128, please retry");
  }

  
}
