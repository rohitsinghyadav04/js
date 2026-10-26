// singleton
//  Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Rohit",
    [mySym]: "mykey1",
    "full name" : "Rohit Singh",
    age: 18,
    location: "Jaipur",
    email: "rohit@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "rohit@gpt.com"
// Object.freeze(JsUser) // used to freeze so it can't change
JsUser.email = "rohit@micro.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




