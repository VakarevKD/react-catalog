import React from "react";
import { useSelector } from "react-redux";
import style from "./Catalog.module.scss";
import { ProductCard } from "../ProductCard/ProductCard.jsx";

export const Catalog = () => {
	const catalog = useSelector((state) => state.products.products);

	return (
		<main className="wrapper">
			<ul className={ style.products }>
				{catalog.map((product) => {
					return (
						<ProductCard key={ product.id } id={ product.id } name={product.name} price={product.price} favorite={product.favorite} img={product.img}/>
					)
				})}
			</ul>
		</main>
	)
}
