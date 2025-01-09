
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

    
 //------------------------------------------------------------------  
// const newNums = myNums.filter((num) => num > 4)
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]
/* here we understand, whenever we use FILTER , we get a call back fn ,
   inside which every value is access each ,then we have to give a condition,
   those values who accept condn are returned other wise values are not returned */
   // So this is filter 

//-----------------------------------------------------------------
// if we want to do above thing using foreach::
// const newNums =[]

// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

//--------------------------------------------------------------------------------------

// reak world example of filter in database:
const books =[
    { title:'Book One', genre:'Friction', publish:1981,
     edition :2004},
    { title:'Book Two', genre:'Non-Friction', publish:2000,
     edition :2004},
    { title:'Book Three', genre:'History', publish:1986,
     edition :2004},
    { title:'Book 5', genre:'History', publish:2000,
     edition :2004},
    { title:'Book FOur', genre:'Science', publish:2101,
     edition :2004}
]
/* Q) here user wants to use filter show only the book with genre History */
let userBooks = books.filter( (bk) => bk.genre === 'History' )

// console.log(userBooks);

/* [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1981,
    edition: 2004
  }
]   */

   userBooks = books.filter ((bk) => {return bk.publish >= 2000})
//    console.log(userBooks);

// Q) book publish after 1981 and genre history
userBooks = books.filter ((bk) => bk.publish >=1982 && bk.genre=== 'History')
console.log(userBooks);
   
