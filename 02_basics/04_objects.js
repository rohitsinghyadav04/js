// const tinderUser = new Object() //=> Singleton Obj
const tinderUser = {}  // => Non-singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname :{
        userfullname: {
            firstname: "rohit",
            lastname: "singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
//      Assigning object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}  // spread method it mostly used
console.log(obj3);

// when value comes from database
const users = [
    {
        id:1,
        email: "r@gmail.com"
    },
    {
        id:1,
        email: "r@gmail.com"
    },
    {
        id:1,
        email: "r@gmail.com"
    },
    {
        id:1,
        email: "r@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



