//Given a string s consisting of words and spaces, return the length of the last word in the string
let s= 'Hello World';
s = s.trim();
let words = s.split(' ');
let lastWord= words[words.length-1];
let lastWordLenght =lastWord.length;
console.log(lastWordLenght); 

// using Fnunction
function lengthOfLastWord(s){
    s=s.trim();
    const word= s.split(' ');
    const lastWord = word[word.length-1];
    return lastWord.length;
}
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  ")); 