let userName ="Praveen kumar ***W(%W%7184357496";

//To find length of string
console.log("Length of userName:", +userName.length);

let companyName='QsomeTechnologies';
// To find Single Character
console.log("Character at index 5:"+ companyName.charAt(1));
console.log("Character at index 5:", companyName[5]);
// To find index of a character
console.log("Index of 'T':", companyName.indexOf('T'));

// To find last index of a character
console.log("last index of 'e':", companyName.lastIndexOf('e'));

//template literals
let price = 'rs100';
console.log(`The price of the product is ${price}`);

//To concatenate strings
let firstName = 'Praveen';
let lastName = 'Kumar';
console.log("full name is:", firstName.concat(' '+lastName))
//console.log(Object.getOwnPropertyNames(String.prototype));
// To print substring
console.log("Substring from index 0 to 5:", companyName.substring(0, 5));
console.log("Substring on firstname from starting:", firstName.substring(3));

