function generateRandomPassword(length) {
    // Define all possible characters to include in the password
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  
    // Initialize an empty string to store the password
    var password = "";
  
    // Generate random characters until the desired length is reached
    for (var i = 0; i < length; i++) {
      // Generate a random index to pick a character from the charset
      var randomIndex = Math.floor(Math.random() * charset.length);
  
      // Add the randomly selected character to the password string
      password += charset.charAt(randomIndex);
    }
  
    // Return the generated password
    return password;
  }
module.exports.generate = generateRandomPassword;
  