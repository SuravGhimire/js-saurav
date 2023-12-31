const marvelHeros = ["thor","Ironman","spiderman"]
const dcHeros = ["superman","flash","batman"]


// marvelHeros.push(dcHeros) //pushes in existing array

// console.log(marvelHeros);  //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvelHeros.length); //4    //[ 'superman', 'flash', 'batman' ] all this array is treated as a single element.

// console.log(marvelHeros[3][1]);  //flash

// const allHeros= marvelHeros.concat(dcHeros) //it returns new array
// console.log(allHeros);  //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//USE of sperade operator.

// const allNewHeros = [...marvelHeros,...dcHeros]
// console.log(allNewHeros);  [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);   /*[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  // ]  
  

  //----oftenly used in data selecting from web page ,that comes in diff format such as node list,object or strings but we need array
    // we can ask like
    // console.log(Array.isArray("saurav")); //false  // we ask whether saurav is array or not 
    // console.log(Array.from("saurav"));   // [ 's', 'a', 'u', 'r', 'a', 'v' ]     // to convert into array

    // console.log(Array.from({name: "saurav"}));   //[]  means empty array//interesting 

    let score1 = 100
    let score2 = 200
    let score3 = 300 

    //for mumtiple variablees to convert into array by using = Array.of (it returns new array from set of elements)

    console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]

    /* study about : Array.isArray, Array.from and Array.of. */
                    
    