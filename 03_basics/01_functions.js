 // function is simply a package of line of codes , function can be used as copies in anywhere ,anytime

 //suppose

//  console.log("s");
//  console.log("a");
//  console.log("u");
//  console.log("r");
 
 //line by line printing can be a bit confusing , so we use a Function.

 //syntax: function fun_name (){....}

 function sauMyName(){
    
 console.log("s");
 console.log("a");
 console.log("u");
 console.log("r");
 
 }

 //sauMyName()    // here sayMyname is function reference and () parenthesis are use tp execute it.
     // saur

// ADD 2 NUMBERS:

function addTwoNumber (num1,num2){
    console.log(num1+num2) ;
}

addTwoNumber(); //NaN not a number

// so wehave to pass an argument.


function addTwoNumber (num1,num2){
    console.log(num1+num2) ;
}

addTwoNumber(2,3);  //5
addTwoNumber(2,"3");  //23  JS treat both as string
