//loops

//for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
        
    }
    // console.log(element);
    
}
// console.log(element);   element not declared outside loop

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value : ${i}`);
    
    for (let j = 0; j <=10; j++) {
    //   console.log(`inner loop value: ${j} and inner loop :${i}`);
    // console.log(i + '*' + j +' = ' + i*j);
    }
}

let myArray =["flash","batman","superman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// break and continue :: 

for (let index = 1; index <= 20; index++) {
   if (index == 5) {
    console.log(`detached 5`);
    break     // come out of loop after condition
   }
    console.log(`value of i is : ${index}`);
    
} /* value of i is : 1
value of i is : 2
value of i is : 3
value of i is : 4
detached 5 */

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
     console.log(`detached 5`);
     continue        // skip condition by one steo , and won't come outside loop  
    }
     console.log(`value of i is : ${index}`);
     
 }     /*value of i is : 1
 value of i is : 2
 value of i is : 3
 value of i is : 4
 detached 5
 value of i is : 6
 value of i is : 7
 value of i is : 8
 value of i is : 9
 value of i is : 10
 value of i is : 11
 value of i is : 12
 value of i is : 13
 value of i is : 14
 value of i is : 15
 value of i is : 16
 value of i is : 17
 value of i is : 18
 value of i is : 19
 value of i is : 20 */
