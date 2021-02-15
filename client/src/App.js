import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';




function App() {
  return (
    <div className="App">
      <Router>
        <Main path="notes/"/>
        <Detail path="notes/:id" />
        <Update path="notes/:id/edit"/>
      </Router>
    </div>
  );
}
export default App;




// import React from 'react';
// import Main from './views/Main';
// function App() {
//   return (
//     <div className="App">
//       <Main />
//     </div>
//   );
// }
// export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
