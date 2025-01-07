//SYNTAX:
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month= 3

switch (month) {
    case 1:
        console.log("jan");
        
        break;
    case 2:
        console.log("feb");
        
        break;
    case 3:
        console.log("march");
        
       break;

    default:
        console.log("default case match");
        
        break;
}
/* By default where key match it gives result of all except default. */
/* if the value is given in number ,pass case value as number and for string 
   month ="3" then case"march" ...... */