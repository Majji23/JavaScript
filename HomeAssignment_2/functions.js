//funcion Declaration
function userProfile(name){
    return `Hello: ${name}`;
}

let name = 'praveen';
console.log(userProfile(name));

//Arrow function
const double=(number)=>{
    return number*2;
}
let number=5;
console.log(double(number));

//Ananymous function with setTimeout
setTimeout(function () {
  console.log("This message is delayed by 2 seconds");
}, 2000);

//callBack function
function getUserData(callback) {
  setTimeout(() => {
    const user = { name: "John Doe", age: 28 };
    callback(user);
  }, 3000);
}

// Calling getUserData and using a callback to log user info
getUserData((user) => {
  console.log(`User Name: ${user.name}, Age: ${user.age}`);
});
