//truthy value concepts::
/* suppose we query with DB,we ask user email,and user gives a email,now on this basis we have to print email in website */ 


/*  const  userEmail="saurav@.com"

if(userEmail){
    console.log("Got the user email");
}else{
    console.log("Dont have user email"); 
}  */

//Got the user email
/* we dont write true/false value ,there was no any condition check ,but there is a string value and we check is that the valid value
  and we run , we dont compare any thing ,and we suppose a string is a true value this is a TRUTHY value.*/

// if there was no value in the string then what happens::

const  userEmail=[];

if(userEmail){
    console.log("Got the user email");
}else{
    console.log("Dont have user email"); 
}
//Dont have user email 

//and if the string is given as array like const userEmail= [] ,then it result is got the email::
/*but what is this scenario is the value true/false randomly:: lets know about that 
(Truthy/FAlsy values)  */

/* falsy values ::

false, 0, -0, BigInt 0n, "", null, undefined, NaN

Truthy values (except all falsy values are truthy):
some supprising truthy values: 
"0",'false', " " ,{},[] function()          :: if written in string then its a truthy  */


//detect if array is empty or not::
if (userEmail.length=== 0) {
    console.log("Array is empty");
    
} //Array is empty


//detecting if object is empty or not ::
const emptyObj = {}

if (Object.keys(emptyObj).length === 0 ){
    console.log("object is empty")
}
//object is empty


// Nullish Coalescing Operator (??) :: null ,undefined

let val1;
// val1 = 5 ?? 10  //5
// val1 = null ?? 10  //10
// val1 = undefined ?? 15  //15
val1 = null ?? 10 ?? 12    // 1st value after null //10

console.log(val1);


// Terniary Operator::

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
 // more than 80


