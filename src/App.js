import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            <span>Coded by Sarah Gwynn on </span>
            <span>
              <a
                href="https://github.com/sarahanngwynn/dictionary-project"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </span>
          </small>
        </footer>
      </div>
    </div>
  );
}
