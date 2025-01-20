
const button=document.querySelectorAll('.buttons')

const body = document.querySelector("body")

button.forEach(function (button) {

    button.addEventListener('click', (e) => {
        // console.log(e);
        // console.log(e.target);
        
        if (e.target.id ==='yellow') {
            body.style.backgroundColor = e.target.id
        }
        
        if (e.target.id ==='pink') {
            body.style.backgroundColor = e.target.id
        }
        
        if (e.target.id ==='green') {
            body.style.backgroundColor = "black"
            console.log(e.target.id);
            
        } 
    })
    
})