import './App.css';
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <footer>This project was built by Anne Sura and is open-sourced on <a href="https://github.com/annesura/react-weather-project" target="_blank">GitHub</a>.</footer>
      </div>
    </div>
  );
}
