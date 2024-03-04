// Assignment code here

function generatePassword() {
  //initialise all possible characters
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const specialCharacters = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', 
  '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '\\', '^', '_', '`', '~', '{', '}', '|'];
  const uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'Q', 'X', 'Y', 'Z'];
  const lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  //initialise variables: password, length of password and booleans of what characters should be included
  let length, password, lowercase, uppercase, nums, special;
  //array to keep track of which are included to be used when generating 
  //'l', 'u', 'n', 's' will represent lowercase, uppercase, numbers. and special characters, respectively
  let include = [];

  //set the length of the password
  length = prompt('Enter a password length between 8 and 128 characters: ')
  if (length < 8 || length > 128 || isNaN(length)) {
    password = 'Please enter a length between 8 and 128 characters.';
  } else {

    //prompt if lowercase characters can be included
    lowercase = prompt('Yes or no: include lowercase characters?');
    if (lowercase == 'yes' || lowercase == 'Yes' || lowercase == 'y' || lowercase == 'Y') {
      include.push('l');
    }

    //prompt if uppercase characters can be included
    uppercase = prompt('Yes or no: include lowercase characters?');
    if (uppercase == 'yes' || uppercase == 'Yes' || uppercase == 'y' || uppercase == 'Y') {
      include.push('u');
    }

    //prompt if numbers can be included
    nums = prompt('Yes or no: include numbers?');
    if (nums == 'yes' || nums == 'Yes' || nums == 'y' || nums == 'Y') {
      include.push('n');
    }

    //prompt if special characters can be included
    special = prompt('Yes or no: include special characters?');
    if (special == 'yes' || special == 'Yes' || special == 'y' || special == 'Y') {
      include.push('s');
    }
  }

  //generate the password
  for (i = 0; i < length; i++) {
    //select random character type from included types and generate a random character
    let selection = Math.random() * include.length;
    type = include.at(selection);
    if (type == 'l') {
      selection = Math.random() * lowercaseCharacters.length;
      password += lowercaseCharacters.at(selection);
    } else if (type == 'u') {
      selection = Math.random() * uppercaseCharacters.length;
      password += uppercaseCharacters.at(selection);
    } else if (type == 'n') {
      selection = Math.random() * numbers.length;
      password += numbers.at(selection);
    } else if (type == 's') {
      selection = Math.random() * specialCharacters.length;
      password += specialCharacters.at(selection);
    }
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
