import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { axiosProducts } from "./store/productsSlice";
import { Routes, Route} from "react-router-dom";
import { Catalog } from "./components/Catalog/Catalog";
import { DetailedPage } from "./components/DetailedPage/DetailedPage";
import { Header } from "./components/Header/Header";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(axiosProducts());
	}, [dispatch]);

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route exact path="/" element={<Catalog />}/>
				<Route path="/product/:id" element={<DetailedPage />}/>
			</Routes>
		</div>
	);
}

export default App;
