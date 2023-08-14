/**
Exercise 4: Palindrome
Create a function that checks whether a word is a palindrome (that is, whether 
it reads the same backwards and forwards). The program must ask the user for a 
word and inform whether or not it is a palindrome.
*/

function isPalindrome(word) {
  const newWord = word.toLowerCase().split('');
  let wordIsPalindrome = true;
  while (newWord.length > 0 ) {
    if (newWord.length === 1) break;
    const firstChar = newWord.shift();
    const lastChar = newWord.pop();    
    if (firstChar !== lastChar) {
      wordIsPalindrome = false;
      break;
    }    
  }
  if (wordIsPalindrome) {
    return 'Word IS a palindrome';
  } else {
    return 'Word is NOT a palindrome';
  }
}

console.log(isPalindrome('level'));