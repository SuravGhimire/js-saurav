/* Filter,map and reduce method:: */
//Reduce method::


/* the reduce() method executes a user-supplied "reducer" callback function 
  on each element of the array,in order ,passing in the return value from
  the calculation on the preceding element. */

//   const myNums=[1,2,3] 

//   const myTotal = myNums.reduce(function (acc,currentval){
//     console.log(`acc: ${acc} and currentval: ${currentval}`);
    
//     return  acc + currentval             // acc don't know where to start so ,give value after function
//   }, 0)

//   console.log(myTotal);
  /* acc: 0 and currentval: 1
    acc: 1 and currentval: 2
    acc: 3 and currentval: 3
    6 */

//----------------------------------------------------------------------------------------------------

// reduce using arrow function

const myTotal = myNums.reduce( (acc,curr) => acc+curr, 5)

// console.log(myTotal); //11

 //example::

 const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data scientist course",
        price: 12999
    }
 ]

 const priceToPay = shoppingCart.reduce((acc,item) => acc+ item.price ,0)
 console.log(priceToPay);  //23996
 