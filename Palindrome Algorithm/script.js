// This function gets a string input and checks it is whether palindrome or not.
// Returns true if it is palindrome, otherwise false. 
// Palindromes are words that read the same backwards
// and forwards.
// --- Examples:
//   palindrome("Madam") === true
//   palindrome("love") === false

function palindrome(str) {
    str = str.toLowerCase();

    const reversed = str.split("").reverse().join("");

    if(str === reversed) {
        return true;
    } else {
        return false;
    }
}

palindrome("oloolo");