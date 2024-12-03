//  let a= 10
//  const b =20
//  var c= 30
let a =300

 if(true){
    let a= 10
 const b =20
//  var c= 30 then removing var
console.log("inner: ",a);   //inner:10 , value inside block scope is inside 

 }

for (let i =0;i < array.leng;i++) {
    const element = array[i];
    
}

 console.log(a); //300 ie declared as a global scope 
//  console.log(a);
//  console.log(b);
//  console.log(c); // 30 
 //error with var in a scope {} 
 