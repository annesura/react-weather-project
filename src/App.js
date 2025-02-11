import './App.css';
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York" />
      <footer>This project was built by Anne Sura and is open-sourced on <a href="https://github.com/annesura/react-weather-project" target="_blank" rel="noreferrer">GitHub</a>.</footer>
      </div>
    </div>
  );
}
