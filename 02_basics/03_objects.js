// singelton : any object creared by using constructor

// OBJECT LITERALS
//object.create         //constructor method

const mySym = Symbol("key1")



const Jsuser = {
     name : " saurav",
     "full name" : "Saurav Ghimire",
     age :19,
     [mySym] :"mykey1",           // symbol sytax   act as key 
     location: "pokhara",
     email: "abc@gmail.com",
     isLoggedIn : false,
     lastLoginDays : ["monday", "saturday"]

 } 
 
//  console.log(Jsuser.name);         //saurav
//  console.log(Jsuser.email);         //abc@gmail.com
//  console.log(Jsuser["email"]);     //abc@gmail.com
// console.log(Jsuser ["full name"]);  //Saurav Ghimire
// console.log(Jsuser[mySym]);
// console.log(typeof Jsuser[mySym]); 

Jsuser.email = "sauravghimire21@gmail.com"
//Object.freeze(Jsuser)                      //  frezes the value so after changing the value of email it remains same as previous one 
Jsuser.email = "sauravghimire@gmail.com"
//console.log(Jsuser);    
/*

{
  name: ' saurav',
  'full name': 'Saurav Ghimire',
  age: 19,
  location: 'pokhara',
  email: 'sauravghimire21@gmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'monday', 'saturday' ],
  [Symbol(key1)]: 'mykey1'
} */

Jsuser.greeting = function() {
   // console.log("hello js user");
}

//   console.log(Jsuser.greeting);     // [Function (anonymous)]  function is not executed only function is returned back
//  console.log(Jsuser.greeting());     // make it function and output is : hello js user
 

Jsuser.greeting2 = function() {
    console.log(`hello js user,${this.name }`);
}


console.log(Jsuser.greeting2());      //hello js user, saurav


