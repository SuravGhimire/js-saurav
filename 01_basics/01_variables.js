const accountId = 1234 // use to make a value permanent in memory .
let accountEmail="saurav12@gmail.com"  //to befine a variable we use let rather then var (having some issue in var)
var accountPassword="saurav"
accountCity ="pokhara"
let accountState; // undefined variable so result will be undefined 
//accountID =2 //not allowed

accountEmail="sa2g.com"
accountPassword="giminire"
accountCity="ktm"

 console.log(accountId);

/*
 prefer not to use var
 because of issue in block scope and functional scope.
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState ])
