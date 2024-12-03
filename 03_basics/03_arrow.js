const user ={

    username: "saurav",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        // console.log(this);  current variables availables
        
    }

}

//this is used with  current context, like username ,price to access them  

// user.welcomeMessage() //saurav,welcome to website
// user.username="sam"     //here context change to sam ,so output changes
// user.welcomeMessage() //sam,welcome to website

// console.log(this);  // no current context so output is empty {}
//---------------------------------------------------------------------------------------------------------------------

// function chai(){
//     let username="saurav"
//     console.log(this.username); // we cannot use "this" inside function for current context //undefined
//     console.log(this);
    
// }
// // chai()   //all value inside the function comes in then this keyword


// const chai = function(){
//     let username="saurav"
//     console.log(this.username);  //undefinded
// }

const chai = ()=> {
    let username="saurav"
    console.log(this.username); //undefined
    console.log(this);  //{}
}
// chai()

//{} and undefinbed also in arrow function ()=>

    // const addTwo=(num1,num2) => {
    //     return num1+num2
    // }
    // console.log(addTwo(3,4)); //7
//-------------------------------------------------------------------------------------
    //implicite return , another way of using arrow function

    // const addTwo =(num1,num2) =>  num1+num2
    
    // console.log(addTwo(3,4)); //7
    
//------------------------------------------------------------------------------------
    //another if we use {} brackets we have to use return ,but if we use small () brackets we dont need reutrn
    // const addTwo =(num1,num2) =>  (num1+num2)
    
    // console.log(addTwo(3,4)); //7

    //-------------Returning object ----------------

    // const addTwo =(num1,num2) => {username:"saurav"}   //erro , we should rap object into prenthesis () to return objects
    // console.log(addTwo(3,4));
    

    const addTwo = (num1,num2) => ({username:"saurav"} )  //{ username: 'saurav' }


    //for loops ,arrow fn 

    const myArray=[2,1,4,5]
    // myArry.forEach(()=> {})
    