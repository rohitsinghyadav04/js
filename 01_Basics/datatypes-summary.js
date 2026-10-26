// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //=> false

const bigNumber = 24516855545454512n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman" , "naagraj" ,"doga"];
let myObj = {
    name:"rohit",
    age:22,
}

const myFunction = function() {
    console.log("Hello World");   
}


// ------------------------------------------------------------------------------------------------------

//  Stack (Prmirive), Heap (Non-Primitive)

// stack => copy , Heap=> reference

let myYouTubename = "rohitsinghdotcom"

let anothername = myYouTubename
anothername = "codeaurprogram"

console.log(myYouTubename);
console.log(anothername);

let  userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "rohit@google.com"

console.log(userOne.email);
console.log(userTwo.email);



