// array

// syntax:
const myArr= [0,1,2,3,4,5] //arrays are written in sq brackets ,each value inside sq bracket is known as elements
const myHeros =["ironman","batman"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);  //1

// Array amethods

// myArr.push(6)   //adds values in array
// myArr.push(7)   //adds values in array
// myArr.pop()   //last values in array is removed
       //output : [1,0,2,3,4,5,6}

// myArr.unshift(9)       //insert element in 1st place(start)
// myArr.shift()       //remove element of 1st place(start)

// console.log(myArr.includes(9));
//false which is a boolean type

// console.log(myArr.indexOf(3));

// console.log(myArr); 

// const newArr = myArr.join()   // join() changes array into string
// console.log(newArr);          //1,0,2,3,4,5
// console.log(myArr);           //[ 1, 0, 2, 3, 4, 5 ]
// console.log(typeof newArr);   //string


//Slice, splice method:---------------------------------------------------------------------

console.log("A ",myArr); //A  [ 0, 1, 2, 3, 4, 5 ]  //as it is array no difference

const myn1= myArr.slice(1,3)     //start from 1st ,include 2nd and 3rd doesnot include (0is at 0,1 is at 1 so start from 1 ,2 also include ,but 3 is at 3 so 3 is not includes )
console.log(myn1);               //[1,2]

console.log("B ",myArr);  //B  [ 0, 1, 2, 3, 4, 5 ] //again same array


const myn2= myArr.splice(1,3) //splice( location in the array from which to start removing elements,The number of elements to removed)
console.log("C ",myArr);   //C  [ 0, 4, 5 ] i.e splice elements are gone from the original array i.e [1,2,3] are gone 

console.log(myn2); //[1,2,3] //@returns — An array containing the elements that were deleted


