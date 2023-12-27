// console.log(2>1); //true
// console.log(2>=1);  // true
// console.log(2==1);   //false
// console.log(2!=1);   //true


//  console.log("2">1); //true
//  console.log("02">1);  //true

//  console.log(null > 0);  //false
//  console.log(null >= 0);  //true
  console.log(null == 0);  //false

 /*The reason is that an equality check == and comparisons > < >= <= wroks differently.
   Comparisons convert null to number, treating it as 0.
   That's why (2)null >= 0 is true and (1) null>0 is false.*/

   console.log(undefined  == 0);  //false
   console.log(undefined > 0);  //false
   console.log(undefined < 0);  //false

   // === not only value is checked but the data type is also checked (stricked checked)

//    console.log("2"===2); //false




