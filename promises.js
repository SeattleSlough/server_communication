const promise = new Promise( ( resolve, reject ) => {
   if( true ) {
      resolve( 'Stuff worked' );
   } else {
      reject( 'Error, it broke' );
   }
} );

// example of chaining and throw/catch
promise
   .then( result => {
      return result + '!';
      //throw Error;
   } )
   .then( result2 => result2 + '?' )
   .catch( () => console.log( 'error!' ) )
   .then( result3 => {
      console.log( result3 + '!' );
   } ); 