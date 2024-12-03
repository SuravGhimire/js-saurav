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

    