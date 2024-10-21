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

//console.log(regularUser.fullname)              //{ UserfullName: { firstName: 'saurav', lastName: 'ghimire' }
//console.log(regularUser.fullname.UserfullName)  //{ firstName: 'saurav', lastName: 'ghimire' }

//********************************************************************************************************************************************************************* */
//COMBINING OBJECTS

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3= {obj1,obj2}  //It gives the same problem as array ,as shown in below output
//console.log(obj3);        //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj3 = Object.assign({},obj1,obj2)   //empty value {} is taken in order to get all the possible values  , {} acts as target and other objects as a source.
   //using Object.assig we can assign as many  as objects.
//console.log(obj3);    // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//************************************************************************************************************************************ */