const accountId = 144553
let accountEmail = "rohit@gmail.com"
var accountPassword = "12345"
accopuntCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "rs@gmail.com"
accountPassword = "212121"
accopuntCity = "Lko"

console.log(accountId);

/*
Prefer not to use var
bacause of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accopuntCity, accountState])
