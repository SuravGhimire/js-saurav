//  let a= 10
//  const b =20
//  var c= 30
let a =300

 if(true){
    let a= 10
 const b =20
//  var c= 30 then removing var
// console.log("inner: ",a);   //inner:10 , value inside block scope is inside 

 }



//  console.log(a); //300 ie declared as a global scope 
//  console.log(a);
//  console.log(b);
//  console.log(c); // 30 
 //error with var in a scope {} 
 

 function one(){
    const username="saurav";

    function two(){
        const website="youtube";
        console.log(username);
    }
    // console.log(website);   error website is inside the two scope{}

    // two()    //saurav
 }
  one()

//nested fn child fn can access parent function.


if (true) {
    const username="saurav"
    if(username === "saurav"){
        const website="youtube"
        // console.log(username+website);  //saurav youtube
        
    }
    // console.log(website);  //no scope of website
    
    
}
// console.log(username);  //no scope of username


//+++++++++++++++++++++++++++++++++++++++++ intersting +++++++++++++++++


console.log(addone(5)) //6
function addone (num){
   return num+1
}


// addTwo(5)  but it wont be acccepted caouse we have declare function in term of variable
const addTwo = function(num){
    return num +2
}

addTwo(5)