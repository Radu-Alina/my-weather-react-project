
import React from 'react';
import Weather from"./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          This project was coded by{" "}
          <a href="https://alinaradu.art/" target="">
            Alina Radu{" "}
          </a>
          {""} and is{" "}
          <a
            href="https://github.com/Radu-Alina/my-weather-react-project"
            target=""
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

