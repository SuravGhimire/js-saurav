//CONTOL FLOW::
// if statement;;
 
/* if(true){
    
} */
// if(true){
//    console.log("executed")    //exectued
// }

if(2=="2"){
   // console.log("executed");    //executed
}
//BUT::

if (2==="2"){
   // console.log("executed");    //it doesnot execute the pgm
}

// here == only check condition ;; but === checks condn and type check:

//comparision operators :: <,>,<=,>=,==,!=,===,!==(-ve sign check)

// const temperature= 40
//if (temperature < 50)
{
    //console.log("less then 50");
}
//console.log("temp is greater than 50.");

/*  less then 50
    temp is greater than 50.  */
// we have 2 outputs in these case but to find which one is true We use if-else sattement::

// if-else statement::

// const temperature = 51
// if (temperature < 50)
//     {
//         console.log("less then 50");
//     }
// else{
//     console.log("temp is greater than 50.");
// }
/* temp is greater than 50.*/


//SCOPE related ::

// const score =200

// if(score > 100){
//     const power ="fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

//Shorthand notation:

// const balance =1000

// if(balance > 500)  console.log("test");  //test

/* if(balance > 500)  console.log("test"),
 console.log("test2");      //test test2 ; its a e-mature code*/

//nesting (checking multiple conditions)

// const balance =1000
// if(balance < 500){
//     console.log("less than 500");
// }else if (balance < 750){
// console.log("less than 750");
// }
// else if(balance < 900)
// {
//     console.log("less than 750");
// }else(balance < 1200)
// {
//     console.log("less than 1200");
// }

//less than 1200

//Real life example ::

const userLoggedIn =true
const debitcard =true
const loggedINfromGoogle = false
const logInFromEmail =true

if(userLoggedIn && debitcard && 2==2){   //all condn should be true to execute
    console.log("Allow to buy course");
}

if(loggedINfromGoogle || logInFromEmail || debitcard)   // || (or)  either of one true
{
    console.log("User logged in");
}