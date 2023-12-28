 // Primitive (datatype)

 // 7 types : String , Number, Boolean ,Null, undefined, Symbol, BigInt

// const score = 100 
// const scoreValue = 100.3

// const isLoggedIn =false
// const outsideTemp = null
// let userEmail ;

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id);
// console.log(typeof id);

//  console.log(id==anotherId); //false

// const bigNumber = 35995694654646n
// console.log(typeof bigNumber);



// // Reference (Non Primitive)

// Array, Objects , Functions

// const heros = ["ironman","batman","thor"]
// console.log(heros);
// console.log(typeof heros);

//  let myObj=   {
//     name : "saurav",
//     age : 21,
// }


// console.log(myObj.name);  //saurav
// console.log(typeof myObj);  //object


// const myFunction = function(){
//     console.log("Hello World");
// }
// console.log(typeof myFunction);


//**********************Memorys in JS****************************

// Stack(Primitive) , Heap (Non Primitive)

let myName ="saurav.com"

let anotherName = myName  //how a value can be changed
anotherName ="chaiaurcode"

console.log(myName);        // saurav.com
console.log(anotherName);   //chaiaurcode

let userOne ={
    email: "user@google.com",
    upi : "user@bl"
}

let userTwo =userOne

userTwo.email="saurav@google.com"
console.log(userOne.email);
console.log(userTwo.email);

