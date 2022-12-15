import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MoviesGrid } from "./components/MoviesGrid.jsx";
import { MoviesInfo } from "./components/MoviesInfo.jsx";
import './App.css';

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<header className="header">Movies</header>
				<main className="mainBody">
					<Routes>
						<Route path='/react-peliculas-emiravalles/' element={<MoviesGrid/>} />
						<Route path='/react-peliculas-emiravalles/movie/:id' element={<MoviesInfo/>} />
					</Routes>
				</main>
				<footer className="footer">Copyright © 2022 Emanuel Miravalles</footer>
			</BrowserRouter>
		</div>
	);
};

export default App;
