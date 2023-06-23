//* Object Spread Operator
const animals = {
   tiger: 23,
   lion: 5,
   monkey: 2,
   bird: 40
};


// tiger; // 23
// rest; //{lion:5, monkey:2}

// before 

function objectSpread( p1, p2, p3 ) {
   console.log( p1 );
   console.log( p2 );
   console.log( p3 );
}
const { tiger, lion, ...rest } = animals;

objectSpread( tiger, lion, rest );


const array = [ 1, 2, 3, 4, 5 ];

function sum( a, b, c, d, e ) {
   return ( a + b + c + d + e );
};

console.log( sum( ...array ) );  //15


// *finally()
const urls = [
   'https://swapi.dev/api/people/1',
   'https://swapi.dev/api/people/2',
   'https://swapi.dev/api/people/3',
   'https://swapi.dev/api/people/4',
];

Promise.all( urls.map( url => {
   return fetch( url ).then( people => people.json() );
} ) )
   .then( array => {
      throw Error; //this causes the function to skip over the rest of the block and go to catch()
      console.log( array[ 0 ] );
      console.log( array[ 1 ] );
      console.log( array[ 2 ] );
      console.log( array[ 3 ] );
   } )
   .catch( ( err ) => console.log( 'uuuggh, fix it!', err ) )
   .finally( () => console.log( 'extra' ) );  //this gets called no matter what (even if the catch block runs).  Ensures something happens after a promise

// *for wait of 
// allows us to iterate over promises
// Using our coe from async functions...

const urls2 = [
   'https://jsonplaceholder.typicode.com/users',
   'https://jsonplaceholder.typicode.com/posts',
   'https://jsonplaceholder.typicode.com/albums'
];

// const getData = async function() {
//    try {
//       const [ users, posts, album ] = await Promise.all( urls2.map( url =>
//          fetch( url ).then( resp => resp.json() )
//       ) );
//       console.log( users );
//       console.log( posts );
//       console.log( album );

//    } catch( err ) { // catch has to have an argument (the error being thrown)
//       console.log( 'oops', err );
//    }
// };

// getData();

// recalling the for of loop
const loopThroughUrls = array => {
   for( url of array ) {
      console.log( url );
   }
};

loopThroughUrls( urls2 );

const getData2 = async function() {
   const arrayOfPromises = urls2.map( url => fetch( url ) );
   for await( let request of arrayOfPromises ) {
      const data = await request.json();
      console.log( data );
   }
};

getData2();