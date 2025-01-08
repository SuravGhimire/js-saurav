
// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach( (item) => {   // what if we want to store in a variable , to know what does foreach return vakue or if it return or not 
//     console.log(item);
//     return item  // -> and again it comes undefined.
// })
// console.log(values);
// here undefined is the return value , so there is no value if we want to return value we have to return it manually ,as above. 
// hence foreach is a undefined.

//-----------------------------------------------------------------------------------------------------------

/* FILTER OPERATION*/ // and it also take call back fn:
const myNums = [1,2,3,4,5,6,7,8,9,10]

/* const newNums = myNums.filter((num) => {
    // num > 4 // it would return empty array []
    so in scope {} we have to use return keyword 
    return num > 4 //[ 5, 6, 7, 8, 9, 10 ]    
 })   */

    
// const newNums = myNums.filter((num) => num > 4)
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]
/* here we understand, whenever we use FILTER , we get a call back fn ,
   inside which every value is access each ,then we have to give a condition,
   those values who accept condn are returned other wise values are not returned */
   // So this is filter 


