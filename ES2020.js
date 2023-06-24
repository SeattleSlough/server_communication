// * allSettled()

const promiseOne = new Promise( ( resolve, reject ) =>
   setTimeout( resolve, 3000 ) );
const promiseTwo = new Promise( ( resolve, reject ) =>
   setTimeout( reject, 3000 ) );

Promise.all( [ promiseOne, promiseTwo ] ).then( data => console.log( data ) )
   .catch( err => console.log( 'something failed', err ) );

// this causes an error to be thrown to the catch block and promiseOne never resolves


// * allSettled() allows for the promises to resolve regardless if the catch block is run 

const promiseA = new Promise( ( resolve, reject ) =>
   setTimeout( resolve, 3000 ) );
const promiseB = new Promise( ( resolve, reject ) =>
   setTimeout( reject, 3000 ) );

Promise.allSettled( [ promiseA, promiseB ] ).then( data => console.log( data ) )
   .catch( err => console.log( 'something else failed here too', err ) );


// * Updated for ES2021 is Promise.any()
// This will take the first promise to resolve (first past the post) and throw and error if none resolve