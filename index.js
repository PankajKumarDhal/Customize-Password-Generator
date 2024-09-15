// Function to generate random password
function generatePassword(length, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols) {
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  
    let charSet = '';
    let password = '';
  
    // Add characters to charSet based on selected options
    if (includeUpperCase) charSet += upperCaseChars;
    if (includeLowerCase) charSet += lowerCaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;
  
    // Ensure charSet is not empty
    if (charSet === '') return ''; // This will handle cases where no option is selected.
  
    // Generate the password by selecting random characters from charSet
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
    }
  
    return password;
  }
  
  // Event listener for Generate Password button
  document.querySelector('.checkbox button').addEventListener('click', function () {
    // Get password length from the input field
    const length = parseInt(document.getElementById('length').value);
  
    // Get the checkbox values (whether they are checked or not)
    const includeUpperCase = document.querySelectorAll('input[type="checkbox"]')[0].checked;
    const includeLowerCase = document.querySelectorAll('input[type="checkbox"]')[1].checked;
    const includeNumbers = document.querySelectorAll('input[type="checkbox"]')[2].checked;
    const includeSymbols = document.querySelectorAll('input[type="checkbox"]')[3].checked;
  
    // Validate if at least one option is selected and length is within the allowed range
    if (length >= 8 && length <= 50 && (includeUpperCase || includeLowerCase || includeNumbers || includeSymbols)) {
      // Generate the password
      const password = generatePassword(length, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols);
  
      // Set the generated password in the input field of the copy class
      document.querySelector('.copy input').value = password;
    } else {
      alert('Please select valid options and password length (8-50 characters).');
    }
  });
  
  // Function to copy the generated password to the clipboard
  function copyToClipboard() {
    const passwordInput = document.querySelector('.copy input');
  
    // Check if there's a password to copy
    if (passwordInput.value) {
      passwordInput.select();
      document.execCommand('copy');
  
      // Show an alert that the password was copied
      alert('Password copied!');
    } else {
      alert('No password to copy!');
    }
  }
  
  // Event listener for the copy button
  document.querySelector('.copy button').addEventListener('click', copyToClipboard);
  