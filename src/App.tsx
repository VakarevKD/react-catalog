import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { DetailedPage } from './pages/DetailedPage/DetailedPage';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={ <CatalogPage /> } />
				<Route path="/product/:id" element={ <DetailedPage /> } />
			</Routes>
		</>
	);
}

export default App;
