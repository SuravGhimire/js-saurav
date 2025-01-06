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

const balance =1000

if(balance > 500)  console.log("test");  //test

/* if(balance > 500)  console.log("test"),
 console.log("test2");      //test test2 ; its a e-mature code*/

