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
