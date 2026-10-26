const myObject = {
    js: 'Javascript',
    cpp: 'c++',
    swift: 'swift by apple'
}

//  forin loop
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);   
}

const programming = ["js", "rb", "py", "java",  "cpp"]

for (const key in programming) {
    // console.log(programming[key]);   
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('fr', "France")
// map.set('IN', "India")

// for (const key in map) {  // gives no o/p so no itertation can be done on map
//    console.log(key);
   
// }