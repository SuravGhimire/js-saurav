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

/********************************************************************************************************************************************************************* */
//COMBINING OBJECTS

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3= {obj1,obj2}  //It gives the same problem as array ,as shown in below output
//console.log(obj3);        //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3 = Object.assign({},obj1,obj2)   //empty value {} is taken in order to get all the possible values  , {} acts as target and other objects as a source.
   //using Object.assig we can assign as many  as objects.
//console.log(obj3);    // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

/************************************************************************************************************************************ */

//BUT HOW WE GONE USE OBJECT::
  //USING SPREAD OPERATOR, i.e (...o1,..o2)

const obj3= {...obj1,...obj2} 
// console.log(obj3);     //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

/********************************************************************************************************************************* */
// SYNTAX USED WHEN THE VALUES COMES FROM DATABASE::

const users = [     //array of object

    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:2,
        email:"sa@gmail.com"
    }
]

users[1].email

//console.log(tinderUser);  //{ id: '123abc', name: 'saurav', isLoggedin: false }

// console.log(Object.keys(tinderUser));  //it changes all objects into array ,so we can now do any changes ,we can use loops etc
//   //[ 'id', 'name', 'isLoggedin'                                       console.log(Object.keys(tinderUser));                     

//   console.log(Object.values(tinderUser)); //[ '123abc', 'saurav', false ]
//   console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'saurav' ], [ 'isLoggedin', false ] ]

//IF NO VALUE EXIST , WE CAN ASK;;

// console.log(tinderUser.hasOwnProperty('islogin'));  //false


/********************************************************************************************************************************************* */

// OBJECT DE-STRUCTURE AND JSON API INTRO::
//DE-STRUCTURING:
//       Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays. It can be used in locations that receive data.

const course ={

   courseName:"JS",
   price:"999",
   courseInstructor:"hitesh"

}

//console.log(course.courseInstructor);   //hitesh 
/* If we have to repeatly print we cannot use same course. ..., so to make it more convinent*/
//WE use another SYNTAX::

// const {...} = course

const {courseInstructor}=course
console.log(courseInstructor);  //hitesh

//WE can also give name according to ourselves like:

const {courseInstructor:abc}= course
console.log(abc); //hitesh

/* So ,this is destructure, We can do destructure of any value. 
This is destructure of object */

/******************************************************************************************************************************************************************************* */



