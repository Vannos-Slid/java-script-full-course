let age = 22;
if (age > 20) {
    console.log("You are adult");
}

let password = "1234";
if (password === "1234") {
    console.log("Now a safe password");
}

let finishedLoading = true;
if (finishedLoading == true) {
    console.log("Loading complete!");
}

if (finishedLoading) {
    console.log("Loading complete!");
}

if (0) { //falsy value
    console.log("Code will not run!");
}

if ("") { //falsy value
    console.log("Code will no run!");
}

if (null) { //falsy value
    console.log("Code will not run!");
}

if (undefined) { //falsy value
    console.log("Code will no run!");
}

if (187) { //truthy value
    console.log("Code will run!");
}

if ("text") { //truthy value
    console.log("Code will run!");
}

let dbPassword = "1234"; //from database
let enteredPassword = "123456";
let enterdUsername = "Harry";

if (enteredPassword === dbPassword) {
    console.log("Wellcome " + enterdUsername);
} else {
    console.log("Wrong password!");
}

let language = "monkey";

if (language === "spanish") {
    console.log("Bienvenido!");
} else if (language === "german") {
    console.log("Moin! Servus! Moin!");
} else if (language === "english") {
    console.log("Welcome!");
} else {
    console.log("We don't provide localization on: " + language)
}