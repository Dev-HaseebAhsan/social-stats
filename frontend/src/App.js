import React from 'react';
import logo from './logo.svg';
import './App.css';

//followed this tutorial: https://dev.to/pratham10/how-to-set-up-a-node-js-express-server-for-react-2fja

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/app")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data}
          Was passed from backend!
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
    </div>
  );
}

export default App;
