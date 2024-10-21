// OBJECT PART 2:

// SINGELTON / USING CONSTRUCTOR METHOD:

//const tinderUser= new Object()  // one of declaretion method of object

// const tinderUser= {}

// console.log(tinderUser)        // {}
// console.log(tinderUser)        // {}

//--------------------------------------------------------------------------------------------------------------------

const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="saurav"
tinderUser.isLoggedin=false

//console.log(tinderUser)        //{ id: '123abc', name: 'saurav', isLoggedin: false }

// o>> DECLARE OBJECT INSIDE OBJECT::

const regularUser ={
 email:"saurav@gmail.com",
 fullname:{
   
   UserfullName:{
    firstName:"saurav",
    lastName:"ghimire"

   }
 }
}

console.log(regularUser.fullname)              //{ UserfullName: { firstName: 'saurav', lastName: 'ghimire' }
console.log(regularUser.fullname.UserfullName)  //{ firstName: 'saurav', lastName: 'ghimire' }
