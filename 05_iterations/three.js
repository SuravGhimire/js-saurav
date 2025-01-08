//  HIGH ORDER ARRAY LOOPS::


// for of loop:
// ["","",""]
// [{},{},{}]

const arr =[1,2,3,4,5]

for (const num of arr) {   
    // console.log(num);
}

const greetings = "Hello world !"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps ::
//  map itself is an object
  /*The Map object holds key-value pairs and remembers the original insertion order of the keys.
    Any value (both objects and primitive values) may be used as either a key or a value */

const map = new Map()
map.set('nep',"nepal")
map.set('IN',"India")
map.set('FR',"france")

// console.log(map);
//Map(3) { 'nep' => 'nepal', 'IN' => 'India', 'FR' => 'france' }

for (const key of map) {
    // console.log(key);
}

for (const [key,value] of map) {
    console.log(key,':-', value);
}
/* nep :- nepal
   IN :- India
   FR :- france  */

   // for-of in object:

   const myObject = {
    game1: 'NFS',
    game2: 'GTA'
   }

   for (const [key, value] of myObject) {
    console.log(key,':-', value);
    
   }
   // in this scenario for-of iteration is not working on object
