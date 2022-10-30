import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Products } from "../../components/Products/Products";
import { fetchProducts } from "../../store/actions/productsActions";
import { Header } from "../../components/Header/Header";

export const CatalogPage = () => {
	const dispatch = useAppDispatch();
	const { products } = useAppSelector((state) => state.products);

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	return (
		<div>
			<Header page="catalog" />
			<main className="wrapper">
				<Products data={ products } />
			</main>
		</div>
	)
}
