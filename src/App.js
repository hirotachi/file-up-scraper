import React from 'react';
import axios from axios;
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
function scraper() {
  let test = "";
  const setup = (obj) => test = obj;
  const jwplayer = () => {
    return { setup }
  };
  axios.get(`https://www.file-up.org/embed-${url}-1110x500.html`)
    .then(({ data }) => {
      let link = "eval(" +
        data.split("<span id='flvplayer'></span>")[1].split("eval(")[1].split("<\/script>")[0] +
        "";
      link = link.replace("return p", `
        return p;
        `);
      eval(link);
      console.log(test)
    });
}

export default App;
