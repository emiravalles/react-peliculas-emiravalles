import { MoviesGrid } from "./components/MoviesGrid.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="title">Movies</header>
			<main><MoviesGrid/></main>
      <footer className="footer">Copyright © 2022 Emanuel Miravalles</footer>
    </div>
  );
};

export default App;
