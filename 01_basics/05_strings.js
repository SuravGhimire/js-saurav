// const name ="saurav"
// const repoCount = 50

// // console.log(name + repoCount+ "Value"); //saurav50Value

// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);  //modern srting syntax(string intepollation )
//                               //SAURAV
const gameName = new String('saurav-ghimire')

// console.log(gameName[0]); //s
// console.log(gameName.__proto__); //{}
/*All proto are the functions so use of small paranthesis ()
   Example : gameName.toUpperCase() */


// console.log(gameName.length); //6 
// console.log(gameName.toUpperCase()); //SAURAV
// console.log(gameName.charAt(2));  // u // To see which character is in the given position 'charAt()'

// console.log(gameName.indexOf('v'));  //5 // to see the given character is in which position 'indexOf()'

//To break strings into parts
// const newString=  gameName.substring(0,4) //saur
// console.log(newString);

// const anotherString = gameName.slice(-14,9) //saurav-gh
// console.log(anotherString);

// const newStringOne = "   saurav   " //when we dont want too many spaces themn we use trim(),it alse cnotains trimStart() and trimEnd()
// console.log(newStringOne);    //  saurav  //
// console.log(newStringOne.trim()); //saurav//

const url ="https:saurav.com/saurav%20ghimire" //To completely replace the url we use  replece('item to replece ','replace by item')

console.log(url.replace('%20','-'));//https:saurav.com/saurav-ghimire

console.log(url.includes('saurav')) //true

//to convert string into array bsace on anything like _ or space ,we use split(seperator,limit)

console.log(gameName.split('-')); //[ 'saurav', 'ghimire' ]
