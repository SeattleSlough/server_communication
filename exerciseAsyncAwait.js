// Solve the below problems:

// #1) Convert the below promise into async await
// fetch( "https://jsonplaceholder.typicode.com/users/" )
//   .then( ( response ) => response.json() )
//   .then( console.log );

// const problemOne = async function() {
//   const data = await fetch( "https://jsonplaceholder.typicode.com/users/" );
//   const obj = await data.json();
//   await console.log( obj );
// };

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all( urls.map( url =>
    fetch( url ) ) );

  console.log( await users.json() );
  console.log( await posts.json() );
  console.log( await albums.json() );
};

// getData();

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urlsError = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];


const badInput = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all( urlsError.map( url =>
      fetch( url ) ) );

    console.log( await users.json() );
    console.log( await posts.json() );
    console.log( await albums.json() );
  } catch( err ) { console.log( err, 'oops' ); }
};

badInput();