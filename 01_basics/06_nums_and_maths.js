const score= 400
// console.log(score);

const balance = new Number(100)
// console.log(balance); //[Number: 100]

// console.log(balance.toString().length);  //since number is now changed to string we an use the prototypes of strings example :.length
// console.log(balance.toFixed(2));  

const otherNumber =  23.8766

// console.log(otherNumber.toPrecision(3)); //23.9
/* Precision gives priority to the given number ie 3 and round off the back (increment by one )
 so if I had given number 123.892 then output would be 124 since precision is (3).
 And for precision (4), output would be 123.9. */

 const hundereds = 1000000
//  console.log(hundereds.toLocaleString()); //1,000,000
//  console.log(hundereds.toLocaleString('en-IN')); //10,00,000

 //+++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++

//  console.log(Math);
//  console.log(Math.abs(-4)); //+ve always +ve but -ve changed to +ve.// 4
//  console.log(Math.round(4.213)); //4 (round off)
// console.log(Math.ceil(4.2));     //5  //while round off it chooses top value 
// console.log(Math.floor(4.9));    //4 //while round off it chooses lower value

// console.log(Math.sin(90));     //0.8939966636005579  i.e 1
// console.log(Math.cos(90));     //-0.4480736161291702 i.e 0
// console.log(Math.sqrt(36));    // 6
// console.log(Math.pow(2,2));    // 4

// console.log(Math.min(1, 2 , 3 , 9,0));  //0 // to find lowest value of the array
// console.log(Math.max(1, 2 , 3 , 9,0));  //9 // to find highest value of the array

// console.log(Math.random());     // value will always be between 0 and 1.
// console.log(Math.random()*10);   // here the value may be 0 also  
// console.log((Math.random()*10)+1);    // To avoid 0 coming case we add 1 .so the minimum value will 1 

const min = 1
const max = 6

console.log(Math.floor(Math.random() *((max -min) +1))+min);