import React from "react";
import style from "./DetailedPage.module.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { ProductCounter } from "../ProductCounter/ProductCounter";

export const DetailedPage = () => {
	const catalog = useSelector((state) => state.products.products);
	const { id } = useParams();

	const product = catalog[id];

	return (
		<main className={ `${style.main_detailed } wrapper`}>
			<div className={ style.product_image_box }>
				<img src="/img/catalog-product-detailed.png" width="150" height="200" alt="Product" />
			</div>
			<div className={ style.product_info }>
				<p className={ style.product_title }>{product.name}</p>
				<p className={ style.product_description }>{product.description}</p>
				<p className={ style.details }>Details</p>
				<p className={ style.details_text }>{product.details}</p>
				<div className={ style.add_product }>
					<span className={ style.product_detailed_price }>${product.price}</span>
					<ProductCounter />
					<button className={ style.add_button }>Add to cart</button>
					<FavoriteButton page="favorite_button_detailed" />
				</div>
			</div>
		</main>
	)
}
