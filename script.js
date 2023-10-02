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

let incLower = confirm("press OK to include lower case letters")  ;
let incUpper = confirm("press OK to include upper case letters")  ;
let incNumber = confirm("press OK to include numbers")  ;
let incSymbol = confirm("press OK to include symbols")  ;

if (incLower === false && incUpper === false && incNumber === false && 
  incSymbol === false ){
    return("at least one caracter type should be include to generate password, please retry");
  }

}
