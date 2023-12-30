/*JavaScript Date objects represent a single moment in time in a platform-independent format.
 Date objects encapsulate an integral number that represents milliseconds since the midnight 
 at the beginning of January 1, 1970, UTC (the epoch)*/

 let myDate = new Date()
//  console.log(myDate);                //2023-12-30T08:49:59.612Z
//  console.log(myDate.toString());     //Sat Dec 30 2023 08:48:29 GMT+0000 
//  console.log(myDate.toDateString()); //Sat Dec 30 2023
//  console.log(myDate.toLocaleString());  //12/30/2023, 8:52:58 AM

// console.log(typeof myDate); //object

 //let myCreatedDate = new Date(2023,0,23)
 let myCreatedDate = new Date("01-14-2023")
//  console.log(myCreatedDate.toLocaleDateString());   //1/14/2023 for mm/dd/yy

 //let myCreatedDate = new Date("2023-01-14")
 //console.log(myCreatedDate.toLocaleDateString()); // 1/14/2023 for dd/mm/yy

 //let myCreatedDate = new Date(2023,0,23,5,3)       //  1/23/2023, 5:03:00 AM for toLocaleString
 //console.log(myCreatedDate.toDateString());        //   Mon Jan 23 2023 .so the months starts from 0 as january in JS
      
  // * TIME STAMPS
  /* They are very useful specially to find exact Time Stamps calue, When we design Quizes in JS and design Polls in JS.
     (Who have given the polls faster that will be declared as winner). In these situations we use Time Stamps. */

  let myTimeStamp = Date.now () // we can do it by using new also

//   console.log(myTimeStamp); //1703930054457 milisec  // output will be a long digit ,which is in milisecond i.e from 1 jan 1970 till now  

//   console.log(myCreatedDate.getTime()); //1673654400000 ms   // .getTime() helps to get the milisec value from the beganing to our myCreatredDate
 // console.log(Math.floor(Date.now()/1000));  //1703930889 sec //convert into seconds

 let newDate =new Date()
//  console.log(newDate.getMonth());   //11
//  console.log(newDate.getFullYear());  //2023
//  console.log(newDate.getDay());     //6
 //console.log(newDate.getDay());

 //`${newDate.getDate()} and the time is `

console.log( newDate.toLocaleString('default',{
  weekday: "long",
  month: "long",
  timeZoneName: "long"
  
}));      //December Saturday at Coordinated Universal Time

