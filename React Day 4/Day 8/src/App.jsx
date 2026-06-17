import React from 'react';
import MovieProvider from './MovieProvider';
import MovieList from './MovieList';

const App = () => {
  return (
    <MovieProvider>
      <MovieList />
    </MovieProvider>
  );
}

export default App;
// import React from 'react'
// import Parent from './Parent'

// const App = () => {
//   return (
//     <><div>Parent</div>
//     <Parent />
//     <Child />
//     </>
//   )
// }

// export default App