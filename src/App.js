import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />

        <footer>
          This project was coded by Sunita Mousavi{" "}
          <a
            href="https://github.com/SuniElVi/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          &{" "}
          <a
            href="https://spectacular-blini-8909df.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
