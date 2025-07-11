/*Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the
number is odd and `"Even"` if the number is even.
Assignment Requirements:
1. Create a function named `isOddOrEven` that takes a number as a parameter
2. Declare and initialize the variable
3. Use a conditional statement to check if the number is divisible by 2
4. Call the function and print the result
Hints to Solve:
Use an operator that checks divisibility by 2 for evenness, and apply a conditional statement to return "Even"
or "Odd*/
function isOddOrEven(number){
    // check if the  number is divisible by 2
    if(number %2==0){
        return "Even";
    } else{
        return "Odd";
    }
}
// Declare and initialize the variable
let number = 999;
// Call the function and print the result
let result = isOddOrEven(number);
console.log("The number is:", result); 