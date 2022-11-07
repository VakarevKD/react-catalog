import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch"
import { useAppSelector } from "../hooks/useAppSelector";
import { getProducts } from "../store/actions/getProducts";
import { Catalog } from "../components/Catalog/Catalog"

export const CatalogPage = () => {
	const dispatch = useAppDispatch();
	const { products } = useAppSelector((state) => state.products);

	useEffect(() => {
		dispatch(getProducts())
	}, [dispatch])

	return (
		<main className="wrapper">
			<Catalog data={ products } />
		</main>
	)
}
