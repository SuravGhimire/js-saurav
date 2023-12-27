// Primitive (datatype)

// 7 types : String , Number, Boolean ,Null, undefined, Symbol, BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn =false
const outsideTemp = null
let userEmail ;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id);
console.log(typeof id);

 console.log(id==anotherId); //false

const bigNumber = 35995694654646n
console.log(typeof bigNumber);



// Reference (Non Primitive)

// Array, Objects , Functions

const heros = ["ironman","batman","thor"]
console.log(heros);
console.log(typeof heros);

 let myObj=   {
    name : "saurav",
    age : 21,
}


console.log(myObj);
console.log(typeof myObj);


const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction);