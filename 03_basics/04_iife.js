//IIFE (Immesiately Invoked Function Expression)
/*    Means immediate execution of function , when function
      is written   */
     
 /*    function chai(){
        console.log(`DB CONNECTED`);
      }
      chai() //DC CONNECTED */
    
 /*   (function chai(){
        console.log(`DB CONNECTED`);
      }() //ERROR   */
    
      //BUT USE OF IIFE :()()
     (function chai(){
        //named iife
        console.log(`DB CONNECTED`);
      })();  //DB CONNECTED

// IIFE as an arrow function
   /* (() => {
        console.log(`DB CONNECTED TWO`);
    })()   //Error ; since IIFE dont know when to stop ,while dealing with many fns So use a semi-colon ;
   */

    (() => {
        console.log(`DB CONNECTED TWO`);
    })(); //DB CONNECTED TWO
   
    //passing parameters
    ((name) => {
        console.log(`DB CONNECTED TWO ${name}`);
    })('saurav'); //DB CONNECTED TWO saurav


    ((a,s) => {
        console.log(a+s)
    })(2,3)   //5

    
