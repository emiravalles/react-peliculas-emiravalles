import { MoviesGrid } from "./components/MoviesGrid.jsx";
import './App.css';

import { MoviesInfo } from "./components/MoviesInfo.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<header className="header">Movies</header>
				<main className="mainBody">
					<Routes>
						<Route path='/' element={<MoviesGrid/>} />
						<Route path='/movie/:id' element={<MoviesInfo/>} />
					</Routes>
				</main>
				<footer className="footer">Copyright © 2022 Emanuel Miravalles</footer>
			</BrowserRouter>
		</div>
	);
};

export default App;
