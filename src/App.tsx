import { Routes, Route } from "react-router-dom";
import { CatalogPage } from "./pages/CatalogPage";
import { DetailedPage } from "./pages/DetailedPage";
import { Header } from "./components/Header/Header";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={ <CatalogPage /> } />
				<Route path="/product/:id" element={ <DetailedPage /> } />
			</Routes>
		</>
	);
}

export default App;
