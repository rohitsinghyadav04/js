// Immediately Invoked Function Expression (IIFE)


// IIFE is used to removes the things from global scope's variables to stay away from prob
(function chai(){
    // named iife
    console.log('DB CONNECTED');
})()

// OR

(  (name)  => {
    console.log('DB CONNECTED TWO ${name}');
} ) ('rohit')