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


// src/App.js
import React from 'react';
// import Button from './Button'; // Import the Button component
import Toolbar from './Toolbar2';

function App() {
  return (
    <div className="App">
      {/* <h1>React Events Lab</h1> */}
      <h1>Reading Props in Event Handlers</h1>
      <Toolbar />
    </div>
  );
}

export default App;