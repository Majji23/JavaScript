function reverseString(str){
    const reverseedString = str.split('').reverse().join('');
    return reverseedString;
}

function isPalindrome(str) {
    const rev=reverseString(str);
    return str === rev;
}
// Example usage:
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
