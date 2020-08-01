// Assignment Code

var generateBtn = document.querySelector("#generate");
var number = ['0','1','2','3','4','5','6','7','8','9'];
var upAlpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowAlpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var spec = [" ","!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

function generatePassword() {
  var numberofCharacters = parseInt(prompt("How many characters would you like your password to be? Please choose between 8 and 128 characters."));

  var pickedValues = []
  var numberArray = []
  var password =""

  if (numberofCharacters < 8 || numberofCharacters > 128) {
    alert("You must choose between 8 and 128 characters!")
  }

  if(confirm('Would you like to use numbers?')) {
    pickedValues.push(number)
  }
  
  if(confirm('Would you like to use uppercase letters?')){
    pickedValues.push(upAlpha)
  }
  
  if(confirm('Would you like to use lowercase letters?')){
    pickedValues.push(lowAlpha)
  }
  
  if(confirm('Would you like to use special characters?')){
    pickedValues.push(spec)
  }
  

  console.log(numberofCharacters, pickedValues)
  
  
  for (var i = 0;i < numberofCharacters; i++){
    var randomArrayIndex = Math.floor(Math.random() * pickedValues.length)
    var randomArray = pickedValues[randomArrayIndex]
    var randomCharacterIndex = Math.floor(Math.random() * randomArray.length)
    var randomCharacter = randomArray[randomCharacterIndex]
    // numberArray.push(randomCharacter)
    password = password + randomCharacter
    console.log(randomArrayIndex, randomCharacterIndex, randomCharacter)
  }
  return password
  console.log(numberArray)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
