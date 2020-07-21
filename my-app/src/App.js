import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './AppSubSection.css';
import Tweet from './Tweet';

function App() {

  const [isRed,setRed] = useState(false);
  const [count,setCount] = useState(0);

  const increment = () => {
    setCount(count+1);
    setRed(!isRed);
    console.log("isRed is: " + isRed + " , count: " + count);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="AppSubSection">
        <h1 className={isRed ? "red" : ""}>This is the color</h1>
        <button onClick={increment}>Click Me</button>
        <p>{count}</p>
        <Tweet name="John" message="Hello World is the first message" likes="103"/>
        <Tweet name="Tom" message="Hello World from Tommy" likes="84"/>
        <Tweet name="Sally" message="Hello World from Sally" likes="27"/>
      </div>
    </div>
  );
}

export default App;