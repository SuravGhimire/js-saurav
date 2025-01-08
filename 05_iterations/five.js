// continue.....

//interesting loop ,which we use most of time for array.
//FOR EACH loop::

const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function (val) {

// console.log(val);

// })  
  /*js
    ruby
    java
    python
    cpp */ 

    
// another variation:: it is not necessary to write a function like this,
//  we have a arrow function also.

// coding.forEach( greet = () => {})  //basic arrow function.
// coding.forEach(  (item) => {           //  // a call back fn, by removing name and ca write any thing in function defination.
//  console.log(item);
// })


// more interesting:: suppose a function (printme) it takes item and it print every thing that we provide.

// function printMe (item) {
//     console.log(item);
    
// }
// coding.forEach(printMe)   //giving reference of function, dont execute it by giving paranthesis().


/* here foreach don't bring parameter item only,but other parameters also
   index,arraylist...... */

// coding.forEach((item , index, arr) => {
//     console.log(item,index,arr);
// })

/* js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ] */ 

//here js is item , 0 is index and all remaining are array list ,so foreach has excess of all of these.