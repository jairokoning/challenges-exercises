/*
Exercise 6: Vowel Counter
Create a function that counts the number of vowels in a string. The program 
should ask the user for a sentence and display how many vowels it has.
*/

const vowels = ['a', 'e', 'i', 'o', 'u']

function vowelCounter(sentence) {    
  const newSentence = sentence.toLowerCase().split('');
  let vowelCount = 0;
  for (const letter of newSentence) {
    if (vowels.includes(letter)) {
      vowelCount++;
    }
  }
  return 'This sentence has ' + vowelCount + ' vowel(s)'
}

console.log(vowelCounter('Lets count how many vowels has this setence'));