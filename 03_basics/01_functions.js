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
//-----------------------------------------------------------------------------------
//We can save the function call addTwoNumber in a variable like: 
// const result = addTwoNumber(3,5)

function addTwoNumber (num1,num2){
    console.log(num1+num2);
    
  }
  // const result = addTwoNumber(3,5);   //8
  // console.log("result is: ",result);  // result is : undefined
  
  /* The result may come as above i.e 8 but if we print what is in resulkt ,then undefined comes 
    So, to correct we have some methods OR what a function matters .
    so we use a return method */
  
    function addTwoNumber(num1,num2){
      let result = num1+num2;
  
      //console.log("saurav");    // saurav
      return result;
      console.log("saurav");
      
    }
  
    // const result = addTwoNumber(3,5);
    // console.log("Result is : ",result);    //Result is : 8
  
    /* There is a rule in Js for function that it doesnot execute any thing after the return 
     So, we cannot see the output of console.log("sauav") in above pgm .
     BUT before return its output was saurav.
    */
  
     // ANOTHER EASY WAY IS ::
  
     function addTwoNumber(num1,num2){
      return num1+num2;
    }
  
    //  console.log(addTwoNumber(3,5));  //8
     /* Here we directly use return so we dont have to decklare an extra variable */
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // NOW LETS LEARN OTHER WAYS , that we can pass parameter and argument in a finction:
  
  function loginUserMessage(username){
    return `${username} just logged in `
  }
  // console.log(loginUserMessage("saurav"));  // saurav just logged in
  // console.log(loginUserMessage(""));       // just logged in 
  // console.log(loginUserMessage());        // undefined just logged in 
  
  
  
  /* o>> IF we dont pass any values then what !!
    SO, it gives undefined not a null */
  //-----------------------------------------------------------------------------------------------------
  //SO LET CHECK IT BY USING  if statement ::
  
  function loginUserMessage(username){
    if (username === undefined){
      console.log("please enter a username");
      return
    }
    return `${username} just loggeed in `
  }
  // console.log(loginUserMessage());        /* please enter a username ,  undefined */
                                             
  //--------------------------------------------------------------------------
  
  // BY DEFAULT PARAMETER METHOD ::
   
  function loginUserMessage(username="saurav"){
    if (!username){
      console.log("please enter a username");
      return
    }
    return `${username} just loggeed in `
  }
  console.log(loginUserMessage());  //saurav just logged in 
  console.log(loginUserMessage("sam"));  //sam just logged in 
  // and if we pass argument, it will override the default value
    //---------------------------------------------------------------------------
  // FOR SHOPPING CARDS: where we dont know how many arguments are comimg, we have to ready our parametwer likewise.

  function calculateCartPrice(...num1){
    return num1
 }
 // console.log(calculateCartPrice(2));//2
 //but if we pass more than 1;
 // console.log(calculateCartPrice(200,100,300));  //200  it will return a 1st num only .

// SO to solve it we have a rest operator ,rest = ...num1 
// AFTER rest :
// console.log(calculateCartPrice(200,100,300));   //[ 200, 100, 300 ]

// what if;
function calculateCartPrice(val1,val2,...num1){
 return num1
}
// console.log(calculateCartPrice(100,200,300,400));  //[ 300, 400 ]
// IT would return the num1 as a array and neglet others.
//-------------------------------------------------------------------------------------------

    