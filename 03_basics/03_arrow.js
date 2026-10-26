const user = {
    username : "rohit",
    price :999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // it refers empty object
 
// function chai(){
//     let username = "rohit"
//     console.log(this.username);   // we shouldn't use 'this' inside function
// }
// chai()

// const chai = function () {
//     let username = "rohit"
//     console.log(this.username);   
// }

const chai = () => {  // remove 'function' and add => after parenthesis
    let username = "rohit"
    console.log(this);   
}

// chai()

// CORE  ARROW FUNCTION

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// IMPLICIT ARROW FUNCTION
 // if we  use curly braces then return must be use
 
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "rohit"})
 
console.log(addTwo(3,4));


