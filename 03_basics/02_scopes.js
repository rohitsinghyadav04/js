// var c =300
let a = 300
if(true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}


// console.log(a);
// console.log(b);
// console.log(c);


// NESTED SCOPE

function one(){
    const username = "Rohit"

    function Two(){
        const website = "youtube"
        // console.log(username);   
    }
    // console.log(website);
    Two()
}
// one()

if(true) {
    const username = "rohit"
    if(username === "rohit") {
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//+++++++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++++++++++++

addone(5)  // if we  print then it gives 6 
function addone(num) {  // function
    return num + 1
}

addTwo(5) // here it will not print gives error  due to type of deceration of function
const addTwo = function(num){  // it's also function but sometimes called expression
    return num + 2
 }
 