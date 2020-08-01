// Assignment Code

function promptMe(numberofCharacters) {
  
}

var generateBtn = document.querySelector("#generate");
var confirmNumber;
var confirmSpec;
var confirmUpAlpha;
var confirmLowAlpha;
var number = ['0','1','2','3','4','5','6','7','8','9'];
var upAlpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowAlpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var spec = [" ","!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var numberofCharacters = parseInt(prompt("How many characters would you like your password to be? Please choose between 8 and 128 characters."));

var pickedValues = []
var numberArray = []

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
  var randomNumber = Math.floor(Math.random() * pickedValues.length)
  var randomInteger = Math.floor(Math.random() * pickedValues[randomNumber])
  var integer = pickedValues[randomNumber][randomInteger]
  numberArray.push(integer)

  console.log(randomNumber, randomInteger, integer)
}

console.log(numberArray)


// function promptMe() {
//   var numberofCharacters = parseInt.prompt("How many characters would you like your password to be? Please choose between 8 and 128 characters.");
//   if (!numberofCharacters) {
//     alert("This needs a value");
//   } else if (numberofCharacters < 8 || numberofCharacters > 128) {
//     numberofCharacters = parseInt(prompt("You must choose between 8 and 128"));

//   } else {
//     confirmNumber = confirm("Will this contain numbers?");
//     confirmSpec = confirm("Will this contain special characters?");
//     confirmUpAlpha = confirm("Will this contain uppercase letters?");
//     confirmLowAlpha = confirm("Will this contain lowercase letters?")
//   };

//   if(!confirmNumber && !confirmSpec && !confirmUpAlpha && !confirmLowAlpha) {
//     alert("You must choose an option!")
//   }

// }




// var pickedValues = []

// if(confirm('Would you like numbers?')
//   pickedValues.push(number)





// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// function generatePassword()
//   var random = Math.floor((Math.random() * 10) +1)
//   console.log(random)

  // JEFFS NOTES

  
//   var choices = []

//   var passlength = prompt('How long do you want your password to be?')

//   console.log(num)
//   passLength = parseInt(passLength)

//   if (userWantsDigits) {
//     choices.push(digits)
//   }
//   if(userWantsUpAlphas) {
//     choices.push(upAlpha)
//   }
//   if(userWantsLowAlphas) {
//     choices.push(lowAlpha)
//   } 
  
//   if(userWantsSpec) {
//     choices.push(spec)
//   }

//  for (var i= 0; i <passLength; i++) {

// function generatePassword() {
//     var result = '';
//     return result;

//     for (var i = 0; i < desiredLength; i++)
// //       result = result + genererateNextcharacter
// }

//  }


  // }


// }