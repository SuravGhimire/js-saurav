// Another method:: map,
//MAP METHOD::
// map also has call back fn like filter.


const myNumbers =[1,2,3,4,5,6,7,8,9,10]
//add 10 in all above numbers

// const newNums = myNumbers.map( (num) => num + 10 )  // map also has call back fn.
// console.log(newNums);
//[ 11, 12, 13, 14, 15,16, 17, 18, 19, 20 ]

//-------------------------------------------------------------------------------------------------------

//Chainning:: 2-3 methods directly used;

const newNums = myNumbers
                  .map((num) => num*10 )
                  .map((num)=> num+1)
                //   .filter((num) => num>=40)
console.log(newNums);
/* [
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]  */ 
