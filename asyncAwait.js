//ASYNC AWAIT

// movePlayer( 100, 'Left' )
//    .then( () => movePlayer( 400, "Left" ) )
//    .then( () => movePlayer( 10, 'Right' ) )
//    .then( () => movePlayer( 330, 'Left' ) );

async function playerStart() {
   const first = await movePlayer( 100, 'Left' ); //pause
   const second = await movePlayer( 400, 'Left' );
   await movePlayer( 10, 'Right' );
   await movePlayer( 330, 'Left' );
}

//syntactic sugar (same thing as a Promise but looks prettier)


fetch( 'https://jsonplaceholder.typicode.com/users' )
   .then( resp => resp.json() )
   .then( console.log );

// as an async function 

async function fetchUsers() {
   const resp = await fetch( 'https://jsonplaceholder.typicode.com/users' );
   const data = await resp.json();
   console.log( data );
}


const urls = [
   'https://jsonplaceholder.typicode.com/users',
   'https://jsonplaceholder.typicode.com/posts',
   'https://jsonplaceholder.typicode.com/albums'
];

const getData = async function() {
   try {
      const [ users, posts, album ] = await Promise.all( urls.map( url =>
         fetch( url ).then( resp => resp.json() )
      ) );
      console.log( users );
      console.log( posts );
      console.log( album );

   } catch( err ) { // catch has to have an argument (the error being thrown)
      console.log( 'oops', err );
   }
};

getData();