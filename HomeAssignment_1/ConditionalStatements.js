/*
Assignment Details:
Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
`runTests` with `switch` for test type messages.
Assignment Requirements:
Create two functions : launchBrowser, runTests where,
 a) launchBrowser need to take input as browserName (string) and do not return any
 - use if-else (chrome or otherwise)
 - Print the value
 b) runTests need to take input as testType (string) and do not return any
 - use switch case (smoke, sanity, regression, default (smoke))
 - Print the values
Call that function from the javascript
Hints to Solve:
For `launchBrowser`, use `if-else` to check if `browserName` is "chrome" and print accordingly. For
`runTests`, use a `switch` statement to handle different `testType` values, including a default case.*/

function launchBrowser(browserName){
    if(browserName==="Chrome"){
        console.log("Launching Chrome Browser");
    }else{
        console.log("Launching Browser:", browserName);
    }
}

function runTests(testType){
    switch(testType){
        case "smoke":
            console.log("Running Smoke Tests");
            break;
        case "Sanity":
            console.log("running Sanity Tests");
            break;
        case "Regression":
            console.log("Running Regression Tests");
            break;
        default:
            console.log("Running Default Test Type: Smoke Tests...");
            break;
    }
}
// Call the functions
launchBrowser("Chrome");
runTests("Regression");